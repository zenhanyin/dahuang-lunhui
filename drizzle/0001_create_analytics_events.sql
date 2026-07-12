CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  event TEXT NOT NULL,
  session_id TEXT,
  player_id TEXT,
  scene TEXT,
  life INTEGER,
  realm TEXT,
  path TEXT,
  virtue INTEGER,
  karma INTEGER,
  fragments INTEGER,
  turn INTEGER,
  choice_text TEXT,
  choice_to TEXT,
  ending_scene TEXT,
  title TEXT
);

CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events (created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event ON analytics_events (event);
CREATE INDEX IF NOT EXISTS idx_analytics_events_scene ON analytics_events (scene);
CREATE INDEX IF NOT EXISTS idx_analytics_events_choice_text ON analytics_events (choice_text);
