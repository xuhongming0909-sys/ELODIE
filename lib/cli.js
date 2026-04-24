const fs = require("fs");
const path = require("path");

function printHelp() {
  console.log(`Coding Workflow 4 Agent

Usage:
  cw4a init [target-path] --assistant codex|claude [--force]
  cw4a help

Examples:
  cw4a init . --assistant codex
  cw4a init ./my-project --assistant claude
  npx coding-workflow-4-agent init . --assistant codex
`);
}

function parseArgs(argv) {
  const [command, maybeTarget, ...rest] = argv;
  const options = {
    command: command || "help",
    targetPath: maybeTarget && !maybeTarget.startsWith("-") ? maybeTarget : ".",
    assistant: "codex",
    force: false,
  };

  const flagArgs = maybeTarget && maybeTarget.startsWith("-") ? [maybeTarget, ...rest] : rest;
  for (let i = 0; i < flagArgs.length; i += 1) {
    const arg = flagArgs[i];
    if (arg === "--assistant") {
      options.assistant = flagArgs[i + 1];
      i += 1;
      continue;
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      options.command = "help";
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }

  return options;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDirectory(srcDir, destDir, force) {
  ensureDir(destDir);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath, force);
      continue;
    }
    copyFile(srcPath, destPath, force);
  }
}

function copyFile(srcPath, destPath, force) {
  ensureDir(path.dirname(destPath));
  if (!force && fs.existsSync(destPath)) {
    throw new Error(`target file already exists: ${destPath}. Use --force to overwrite.`);
  }
  fs.copyFileSync(srcPath, destPath);
}

function buildAssistantFile(packageRoot, assistant) {
  const source = fs.readFileSync(path.join(packageRoot, "AGENT.md"), "utf8");
  if (assistant === "codex") {
    return { name: "AGENT.md", content: source };
  }
  if (assistant === "claude") {
    const transformed = source.replaceAll("AGENT.md", "CLAUDE.md");
    return { name: "CLAUDE.md", content: transformed.replace("# CLAUDE.md", "# CLAUDE.md") };
  }
  throw new Error(`unsupported assistant: ${assistant}. Use codex or claude.`);
}

function writeAssistantFile(packageRoot, targetRoot, assistant, force) {
  const { name, content } = buildAssistantFile(packageRoot, assistant);
  const targetPath = path.join(targetRoot, name);
  if (!force && fs.existsSync(targetPath)) {
    throw new Error(`target file already exists: ${targetPath}. Use --force to overwrite.`);
  }
  fs.writeFileSync(targetPath, content, "utf8");
}

function mergeGitignore(packageRoot, targetRoot) {
  const rule = fs.readFileSync(path.join(packageRoot, ".gitignore"), "utf8").trim();
  const targetPath = path.join(targetRoot, ".gitignore");
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, `${rule}\n`, "utf8");
    return;
  }
  const existing = fs.readFileSync(targetPath, "utf8");
  if (existing.includes(rule)) {
    return;
  }
  const suffix = existing.endsWith("\n") ? "" : "\n";
  fs.writeFileSync(targetPath, `${existing}${suffix}${rule}\n`, "utf8");
}

function initWorkflow(targetPath, assistant, force) {
  const packageRoot = path.resolve(__dirname, "..");
  const targetRoot = path.resolve(process.cwd(), targetPath);
  ensureDir(targetRoot);

  const directories = ["config", "missions", "scripts", "specs", "templates"];
  const files = ["MEMORY.md"];

  for (const dir of directories) {
    copyDirectory(path.join(packageRoot, dir), path.join(targetRoot, dir), force);
  }
  for (const file of files) {
    copyFile(path.join(packageRoot, file), path.join(targetRoot, file), force);
  }

  writeAssistantFile(packageRoot, targetRoot, assistant, force);
  mergeGitignore(packageRoot, targetRoot);

  console.log(`Initialized Coding Workflow 4 Agent in ${targetRoot}`);
  console.log(`Assistant mode: ${assistant}`);
  console.log(`Created: ${assistant === "codex" ? "AGENT.md" : "CLAUDE.md"}, MEMORY.md, config/, missions/, scripts/, specs/, templates/`);
  console.log("Updated: .gitignore");
}

async function run(argv) {
  const options = parseArgs(argv);
  if (options.command === "help") {
    printHelp();
    return;
  }
  if (options.command !== "init") {
    throw new Error(`unknown command: ${options.command}`);
  }
  initWorkflow(options.targetPath, options.assistant, options.force);
}

module.exports = {
  run,
};
