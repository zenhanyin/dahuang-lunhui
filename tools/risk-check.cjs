const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "text-adventure.html");
const configPath = path.join(root, "story-config.js");

function fail(message) {
  throw new Error(message);
}

function loadGame() {
  const html = fs.readFileSync(htmlPath, "utf8");
  const configJs = fs.readFileSync(configPath, "utf8");
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  if (!scripts.length) fail("No inline game script found.");

  const elements = new Map();
  const created = [];

  class Element {
    constructor(selector = "") {
      this.selector = selector;
      this.children = [];
      this.style = {};
      this.className = "";
      this.type = "";
      this._textContent = "";
      this._innerHTML = "";
      this.listeners = {};
    }

    set textContent(value) {
      this._textContent = String(value ?? "");
    }

    get textContent() {
      return this._textContent;
    }

    set innerHTML(value) {
      this._innerHTML = String(value ?? "");
      this.children = [];
    }

    get innerHTML() {
      return this._innerHTML;
    }

    append(child) {
      this.children.push(child);
      if (typeof child === "string") this._textContent += child;
      else if (child && typeof child.textContent === "string") this._textContent += child.textContent;
    }

    appendChild(child) {
      this.children.push(child);
      return child;
    }

    addEventListener(type, handler) {
      this.listeners[type] = handler;
    }
  }

  const document = {
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, new Element(selector));
      return elements.get(selector);
    },
    createElement(tag) {
      const element = new Element(tag);
      created.push(element);
      return element;
    },
    createTextNode(text) {
      return { textContent: String(text ?? "") };
    }
  };

  const storage = {
    data: new Map(),
    getItem(key) {
      return this.data.has(key) ? this.data.get(key) : null;
    },
    setItem(key, value) {
      this.data.set(key, String(value));
    }
  };

  const context = {
    console,
    document,
    window: {
      localStorage: storage,
      sessionStorage: storage,
      addEventListener() {},
      setInterval() { return 1; },
      clearInterval() {},
      setTimeout(fn) { return fn(); },
      crypto: { getRandomValues(array) { array[0] = 123456789; return array; } }
    },
    navigator: { sendBeacon() { return true; } },
    fetch() { return Promise.resolve({ ok: true }); },
    setInterval() { return 1; },
    clearInterval() {},
    setTimeout(fn) { return fn(); }
  };
  context.globalThis = context;

  vm.createContext(context);
  vm.runInContext(configJs, context, { filename: "story-config.js" });
  const instrumented = `${scripts.at(-1)[1]}
globalThis.__risk = {
  get state() { return state; },
  set state(value) { state = value; },
  scenes,
  availableChoices,
  endingChoices,
  artworkForState,
  render,
  choose
};`;
  vm.runInContext(instrumented, context, { filename: "text-adventure.html" });
  return { context, elements };
}

function imageSrc(markup) {
  const match = String(markup || "").match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : "";
}

function assertRenderable(test, elements, step) {
  test.render();
  const state = test.state;
  const scene = test.scenes[state.scene] || test.scenes.birth;

  const title = elements.get("#scene-title")?.textContent || "";
  const text = elements.get("#scene-text")?.textContent || "";
  const sketch = elements.get("#scene-sketch")?.innerHTML || "";
  const choices = test.availableChoices({ ...scene, choices: test.endingChoices(scene) })
    .filter(choice => !(choice.once && state.flags[choice.once]));

  if (!title.trim()) fail(`Empty title at step ${step}, scene ${state.scene}.`);
  if (!text.trim()) fail(`Empty text at step ${step}, scene ${state.scene}.`);
  if (!choices.length) {
    const raw = typeof scene.choices === "function" ? scene.choices() : (scene.choices || []);
    fail(`No choices at step ${step}, scene ${state.scene}, act ${state.act}, years ${state.years}, raw choices ${raw.length}.`);
  }
  const src = imageSrc(sketch);
  if (!src) fail(`No image output at step ${step}, scene ${state.scene}.`);
  if (!/^assets\/[-a-z0-9]+\.webp$/i.test(src)) fail(`Unsafe image src ${src}.`);
  if (!fs.existsSync(path.join(root, src))) fail(`Missing image asset ${src}.`);

  for (const key of ["life", "qi", "years", "virtue", "karma", "memory", "talent", "fragments", "realm", "rootBone", "mind", "luck", "debt"]) {
    if (!Number.isFinite(state[key])) fail(`Non-finite numeric state ${key}=${state[key]} at step ${step}.`);
    if (Math.abs(state[key]) > 1000000) fail(`Likely numeric runaway ${key}=${state[key]} at step ${step}.`);
  }

  return choices;
}

function runSimulation(rounds = 80, stepsPerRound = 80) {
  const { context, elements } = loadGame();
  const test = context.__risk;
  const visitedScenes = new Set();
  let endings = 0;

  for (let round = 0; round < rounds; round += 1) {
    if (round > 0) {
      const reset = assertRenderable(test, elements, `reset-${round}`).find(choice => choice.hardReset);
      if (reset) test.choose(reset);
    }

    for (let step = 0; step < stepsPerRound; step += 1) {
      const choices = assertRenderable(test, elements, `${round}-${step}`);
      visitedScenes.add(test.state.scene);
      if (test.scenes[test.state.scene]?.ending) endings += 1;
      const index = Math.floor(Math.random() * choices.length);
      test.choose(choices[index]);
    }
  }

  return {
    rounds,
    steps: rounds * stepsPerRound,
    visitedScenes: [...visitedScenes].sort(),
    endings
  };
}

const report = runSimulation();
console.log(JSON.stringify(report, null, 2));
