param(
    [string]$FilePath = (Join-Path (Split-Path -Parent $PSScriptRoot) "MEMORY.md"),
    [int]$Keep = 50
)

if (-not (Test-Path -LiteralPath $FilePath)) {
    throw "Memory file not found: $FilePath"
}

$lines = Get-Content -LiteralPath $FilePath
if ($lines.Count -eq 0) {
    exit 0
}

$header = @()
$entries = New-Object System.Collections.Generic.List[object]
$current = @()
$insideEntry = $false

foreach ($line in $lines) {
    if ($line -match '^## ') {
        if ($current.Count -gt 0) {
            $entries.Add([string[]]$current)
        }
        $current = @($line)
        $insideEntry = $true
        continue
    }

    if ($insideEntry) {
        $current += $line
    }
    else {
        $header += $line
    }
}

if ($current.Count -gt 0) {
    $entries.Add([string[]]$current)
}

$keptEntries = $entries | Select-Object -First $Keep
$output = @($header)

if ($output.Count -gt 0 -and $output[-1] -ne "") {
    $output += ""
}

foreach ($entry in $keptEntries) {
    $output += $entry
    if ($entry[-1] -ne "") {
        $output += ""
    }
}

Set-Content -LiteralPath $FilePath -Value $output -Encoding UTF8
