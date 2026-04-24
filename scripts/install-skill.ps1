param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("codex", "claude")]
  [string]$Target
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceSkill = Join-Path $repoRoot "skills\elodie-skill"

if (-not (Test-Path $sourceSkill)) {
  throw "Skill source not found: $sourceSkill"
}

switch ($Target) {
  "codex" {
    $homeRoot = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME ".codex" }
    $skillRoot = Join-Path $homeRoot "skills"
  }
  "claude" {
    $skillRoot = Join-Path $HOME ".claude\skills"
  }
}

$targetSkill = Join-Path $skillRoot "elodie-skill"

New-Item -ItemType Directory -Force -Path $skillRoot | Out-Null

if (Test-Path $targetSkill) {
  Remove-Item -Recurse -Force $targetSkill
}

Copy-Item -Recurse -Force $sourceSkill $targetSkill

Write-Output "Installed ELODIE SKILL to $targetSkill"
