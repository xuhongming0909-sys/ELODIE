#!/usr/bin/env node

const { run } = require("../lib/cli");

run(process.argv.slice(2)).catch((error) => {
  console.error(`elodie error: ${error.message}`);
  process.exit(1);
});
