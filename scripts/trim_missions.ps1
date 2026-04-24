param(
    [string]$MissionsPath = (Join-Path (Split-Path -Parent $PSScriptRoot) "missions"),
    [int]$Keep = 30
)

if (-not (Test-Path -LiteralPath $MissionsPath)) {
    throw "Missions path not found: $MissionsPath"
}

$repoRoot = (Resolve-Path -LiteralPath (Split-Path -Parent $PSScriptRoot)).Path
$resolvedMissionsPath = (Resolve-Path -LiteralPath $MissionsPath).Path

if (-not $resolvedMissionsPath.StartsWith($repoRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to trim missions outside the repository root."
}

$missionDirs = Get-ChildItem -LiteralPath $resolvedMissionsPath -Directory | Sort-Object LastWriteTime -Descending
$staleDirs = $missionDirs | Select-Object -Skip $Keep

foreach ($dir in $staleDirs) {
    Remove-Item -LiteralPath $dir.FullName -Recurse -Force
}
