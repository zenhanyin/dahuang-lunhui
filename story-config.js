window.DAHUANG_STORY_CONFIG = {
  "chapters": [
    {
      "name": "雷后入局",
      "text": {
        "normal": "雷劫散后，西陵旧议厅的水镜亮起。天机营、冰心堂、魍魉、云麓、荒火都派人入席，却没有一个人愿意先说真话。\n\n{{status}}\n\n你这一世不必急着选正邪，而要先决定从哪里撬开大荒的第一道缝。"
      },
      "choices": [
        {
          "text": "逼问魍魉长老：上一世谁藏起裂纹",
          "to": "shadow",
          "effects": {
            "karma": 4,
            "fragments": 1
          },
          "log": "魍魉席后一阵沉默。有人承认，铜门裂纹不是第一次出现。"
        },
        {
          "text": "先救城外疫民，换冰心堂公开药账",
          "to": "iceHeart",
          "effects": {
            "virtue": 12,
            "years": -1
          },
          "log": "药账里夹着一枚旧印，印文正与铜门边缘吻合。"
        },
        {
          "text": "让遗墨机关鸟拓下水镜裂纹",
          "to": "jadeClue",
          "effects": {
            "fragments": 1,
            "qi": 10
          },
          "talentToQi": true,
          "log": "机关鸟飞回时，爪上多了一粒东海盐晶。"
        },
        {
          "text": "借天机营兵符封锁铜门，逼各派留下证词",
          "to": "greatCouncil",
          "requires": {
            "karmaMax": 35
          },
          "effects": {
            "virtue": 6,
            "karma": 6,
            "fragments": 1
          },
          "log": "封锁不是仁慈，却让三个说谎的人同时露怯。"
        },
        {
          "text": "听云麓弟子推演星图，查裂纹对应的天象",
          "to": "tribulation",
          "effects": {
            "qi": 18,
            "years": -1
          },
          "talentToQi": true,
          "log": "星图尽头不是九天，而是一片被抹去名字的海。"
        },
        {
          "text": "去荒火营查沉船兵器，不问来路先问用途",
          "to": "copperGate",
          "effects": {
            "qi": 22,
            "karma": 6,
            "years": -1
          },
          "log": "沉船铁锈里藏着神域火纹，像是专为破门而铸。"
        },
        {
          "text": "不入议厅，先跟踪夜哭里的影步残象",
          "to": "foxRoad",
          "effects": {
            "memory": 1,
            "karma": 3
          },
          "log": "影步尽头留着半句誓词：救人者也会成为钥匙。"
        }
      ]
    },
    {
      "name": "诸门相疑",
      "text": {
        "normal": "第一条线索已经落地，却把更多旧债牵了出来：铜门裂纹、城外疫民、北溟盐晶、沉船兵器、九天祭席，全都不像偶然。\n\n{{status}}\n\n此时的选择会决定谁愿意信你，也会决定谁开始怕你。"
      },
      "choices": [
        {
          "text": "公开天书残页，迫诸门当场站队",
          "to": "greatCouncil",
          "effects": {
            "virtue": 8,
            "karma": 3
          },
          "log": "诸门终于不再谈风骨，只开始谈各自欠下的债。"
        },
        {
          "text": "夜入北溟，追玄晶留下的幽都旧约",
          "to": "northSea",
          "effects": {
            "fragments": 1,
            "years": -1
          },
          "log": "北溟风雪里，你听见幽都并不承认自己是地狱。"
        },
        {
          "text": "独自贴近铜门，听清门内喊出的名字",
          "to": "copperGate",
          "effects": {
            "qi": 16,
            "karma": 8
          },
          "talentToQi": true,
          "log": "铜门没有打开，只把你的倒影换成了上一世的样子。"
        },
        {
          "text": "请冰心堂先验疫民魂灯，查谁动过生死簿",
          "to": "iceHeart",
          "requires": {
            "virtueMin": 55
          },
          "effects": {
            "virtue": 14,
            "fragments": 1,
            "years": -1
          },
          "log": "魂灯没有灭，说明有人把活人提前写进了死册。"
        },
        {
          "text": "与弈剑旧友论剑三夜，换他带你进旧阵眼",
          "to": "tribulation",
          "effects": {
            "qi": 24,
            "years": -2
          },
          "talentToQi": true,
          "log": "剑意洗去浮躁，也削开阵眼外层的伪装。"
        },
        {
          "text": "让魍魉暗网散出假消息，引蛇出洞",
          "to": "shadow",
          "requires": {
            "karmaMax": 45
          },
          "effects": {
            "karma": 9,
            "fragments": 1
          },
          "log": "这不是作恶，是用影子照出更深的影子。"
        },
        {
          "text": "护送一队凡人离开裂隙，暂缓追查",
          "to": "death",
          "requires": {
            "yearsMin": 1,
            "virtueMin": 80
          },
          "effects": {
            "virtue": 18,
            "memory": 1,
            "years": -1
          },
          "log": "他们不知道真相，却会在下一世替你记得一个名字。"
        }
      ]
    },
    {
      "name": "北溟旧约",
      "text": {
        "normal": "你沿着线索抵达北溟边境。雪原下埋着幽都旧约，海风里带着东海神域的潮声；某些神明把人间叫作试炼，也把牺牲叫作秩序。\n\n{{status}}\n\n真相变得更大，也更危险。你可以公开、潜入、修行、救人，或把自己推到铜门前。"
      },
      "choices": [
        {
          "text": "把北溟旧约带回议厅，要求诸门共证",
          "to": "greatCouncil",
          "requires": {
            "fragmentsMin": 2
          },
          "effects": {
            "virtue": 10,
            "karma": 5
          },
          "log": "旧约一出，最先拔剑的不是魔修，而是仙盟使者。"
        },
        {
          "text": "潜入幽都边市，查轮回簿被谁改写",
          "to": "hell",
          "requires": {
            "karmaMin": 45
          },
          "effects": {
            "memory": 2,
            "karma": -8
          },
          "log": "幽都没有审你，只让你看见自己每次逃避的代价。"
        },
        {
          "text": "闭关炼化盐晶，冲击更高境界",
          "to": "tribulation",
          "effects": {
            "qi": 38,
            "years": -2
          },
          "talentToQi": true,
          "log": "盐晶化作潮声，丹田里第一次出现神域门影。"
        },
        {
          "text": "救北溟雪灾里的敌派弟子，不问立场",
          "to": "iceHeart",
          "effects": {
            "virtue": 20,
            "karma": -6,
            "years": -1
          },
          "log": "对方醒来后只说一句：原来你不是为了赢。"
        },
        {
          "text": "借荒火战阵强行撬开铜门外环",
          "to": "copperGate",
          "requires": {
            "realmMin": 2
          },
          "effects": {
            "qi": 30,
            "karma": 12,
            "fragments": 1,
            "years": -2
          },
          "log": "铜门震动，九天祭席上有一个无名位被点亮。"
        },
        {
          "text": "用魍魉影契换取神域使者真名",
          "to": "heartDemon",
          "requires": {
            "karmaMin": 20
          },
          "effects": {
            "fragments": 1,
            "karma": 10,
            "memory": 1
          },
          "log": "你得到了真名，也听见心魔学会了那人的声音。"
        },
        {
          "text": "请太虚观召灵问古，不让任何一派独占答案",
          "to": "jadeClue",
          "requires": {
            "virtueMin": 60
          },
          "effects": {
            "virtue": 8,
            "fragments": 2,
            "years": -1
          },
          "log": "古灵只留下四字：补天有价。"
        },
        {
          "text": "若碎片已足，提前拼合旧约试探轮回边界",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 4,
            "realmMin": 3
          }
        }
      ]
    },
    {
      "name": "东海神域",
      "text": {
        "normal": "东海神域并非天外净土。潮宫残碑上写着九天与幽都的旧盟，神使说轮回是补天之器，魍魉影主却说那只是好听的锁链。\n\n{{status}}\n\n这一幕会把你的修炼方式变成结局倾向：守护者、破局者、独行者，或被因果拖入幽都。"
      },
      "choices": [
        {
          "text": "登潮宫残碑，问东海神域为何沉默",
          "to": "jadeClue",
          "effects": {
            "fragments": 1,
            "qi": 18,
            "years": -1
          },
          "talentToQi": true,
          "log": "残碑回答你的不是文字，而是一段被献祭的飞升记忆。"
        },
        {
          "text": "救下被当作祭品的神域侍童",
          "to": "iceHeart",
          "requires": {
            "virtueMin": 70
          },
          "effects": {
            "virtue": 22,
            "karma": -10
          },
          "log": "侍童把潮宫暗门告诉你，却求你别把所有神明都当敌人。"
        },
        {
          "text": "假意接受神使册封，查九天祭席名单",
          "to": "greatCouncil",
          "requires": {
            "karmaMax": 60
          },
          "effects": {
            "karma": 12,
            "fragments": 1
          },
          "log": "你坐上了不该坐的位置，也看清了谁在数人间的命。"
        },
        {
          "text": "让心魔代你入梦，偷听祭席背后的交易",
          "to": "heartDemon",
          "requires": {
            "karmaMin": 30
          },
          "effects": {
            "memory": 2,
            "karma": 14
          },
          "log": "心魔带回真相，也带回一枚更像你的面具。"
        },
        {
          "text": "以修为硬闯九天门缝，先看飞升真假",
          "to": "ascend",
          "requires": {
            "realmMin": 5
          }
        },
        {
          "text": "以诸门新约重订绝地天通",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 4,
            "virtueMin": 75
          }
        },
        {
          "text": "因果已重，先入幽都照见本心再谈飞升",
          "to": "hell",
          "requires": {
            "karmaMin": 55
          }
        },
        {
          "text": "寿元将尽，把东海神域的坐标交给下一世",
          "to": "death",
          "requires": {
            "yearsMin": 1
          },
          "effects": {
            "memory": 2,
            "fragments": 1,
            "years": -99
          },
          "log": "你没有失败，只是把终局推给了更强的自己。"
        }
      ]
    },
    {
      "name": "天命收束",
      "text": {
        "normal": "本世所有线索收束在铜门之前：诸门新约、幽都旧契、东海神域、九天祭席，都等你给出最后答案。\n\n道德越高，飞升越稳；因果越重，越容易先入幽都重走人间。正邪不是罪名，选择如何使用力量才是。"
      },
      "choices": [
        {
          "text": "以高德行登九天，公开祭席后的旧账",
          "to": "ascend",
          "requires": {
            "realmMin": 5,
            "virtueMin": 90,
            "karmaMax": 45
          }
        },
        {
          "text": "以天命碎片重封铜门，结束献祭式轮回",
          "to": "breakWheel",
          "requires": {
            "fragmentsMin": 5,
            "virtueMin": 70
          }
        },
        {
          "text": "牺牲本世修为，换诸门凡人全数撤离",
          "to": "death",
          "requires": {
            "virtueMin": 100
          },
          "effects": {
            "memory": 3,
            "fragments": 1,
            "qi": -80,
            "years": -99
          },
          "log": "你把胜利留给别人，把答案留给下一世。"
        },
        {
          "text": "带着因果强行飞升，赌九天不敢拒你",
          "to": "ascend",
          "requires": {
            "realmMin": 6,
            "karmaMin": 45
          }
        },
        {
          "text": "若因果压过道心，入幽都重走人间",
          "to": "hell",
          "requires": {
            "karmaMin": 65
          }
        },
        {
          "text": "以魍魉、冰心、天机三方证词重审旧约",
          "to": "greatCouncil",
          "requires": {
            "fragmentsMin": 3,
            "virtueMin": 65
          },
          "effects": {
            "virtue": 12,
            "karma": -8,
            "memory": 1
          },
          "log": "这一次不是你一个人对抗天命，而是大荒一起开口。"
        },
        {
          "text": "什么都不争，只把真相刻进轮回记忆",
          "to": "death",
          "effects": {
            "memory": 2,
            "fragments": 1,
            "years": -99
          },
          "log": "你选择下一世再来，但不是空手而来。"
        },
        {
          "text": "若境界已至巅峰，直面东海神域背后的神界边界",
          "to": "ascend",
          "requires": {
            "realmMin": 6,
            "fragmentsMin": 4
          }
        }
      ]
    }
  ],
  "statusLines": {
    "highKarma": "你的因果太重，魍魉席后的影子始终盯着你的手；若再强行登天，幽都会先来要账。",
    "highVirtue": "你的名声已足以让诸门暂时放下私怨，但真正的信任仍要靠下一步换来。",
    "normal": "你尚未赢得所有人的信任，诸门只肯给你一次说明的机会。"
  },
  "artPools": {
    "birth": [
      "assets/xiling-ruins.webp",
      "assets/great-council.webp"
    ],
    "memoryArchive": [
      "assets/copper-gate.webp",
      "assets/underworld-ledger.webp"
    ],
    "sect": [
      "assets/xiling-ruins.webp"
    ],
    "iceHeart": [
      "assets/iceheart-hall.webp",
      "assets/sect-new-pact.webp"
    ],
    "shadow": [
      "assets/leize-shadow.webp",
      "assets/cold-shadow.webp"
    ],
    "foxRoad": [
      "assets/fox-road.webp"
    ],
    "jadeClue": [
      "assets/east-sea-tide-palace.webp",
      "assets/copper-gate.webp"
    ],
    "copperGate": [
      "assets/copper-gate.webp",
      "assets/east-sea-godrealm.webp"
    ],
    "northSea": [
      "assets/beiming-pact.webp",
      "assets/beiming-road.webp"
    ],
    "greatCouncil": [
      "assets/sect-new-pact.webp",
      "assets/great-council.webp"
    ],
    "tribulation": [
      "assets/tribulation.webp"
    ],
    "afterBreak": [
      "assets/sect-new-pact.webp",
      "assets/beiming-pact.webp",
      "assets/east-sea-tide-palace.webp"
    ],
    "heartDemon": [
      "assets/heart-trial.webp",
      "assets/underworld-ledger.webp"
    ],
    "hell": [
      "assets/underworld-ledger.webp",
      "assets/hell-rebirth.webp"
    ],
    "ascend": [
      "assets/true-ascend.webp",
      "assets/east-sea-tide-palace.webp"
    ],
    "breakWheel": [
      "assets/copper-gate.webp",
      "assets/sect-new-pact.webp"
    ],
    "trueEnding": [
      "assets/true-ascend.webp"
    ],
    "sacrifice": [
      "assets/copper-gate.webp"
    ],
    "death": [
      "assets/xiling-ruins.webp",
      "assets/underworld-ledger.webp"
    ]
  }
};
