import { program } from "commander";

program.option("-i, --instruction", "ARM Assembly Instruction");

const input = program.parse(process.argv);

console.log(input.args[0]);
