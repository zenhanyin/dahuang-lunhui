$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$runtimePython = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if (Test-Path $runtimePython) {
  & $runtimePython (Join-Path $root "tools\excel-to-story-js.py") (Join-Path $root "story-config.xlsx") (Join-Path $root "story-config.js")
} else {
  python (Join-Path $root "tools\excel-to-story-js.py") (Join-Path $root "story-config.xlsx") (Join-Path $root "story-config.js")
}
