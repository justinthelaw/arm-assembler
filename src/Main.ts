import HandleUserInput from "./HandleUserInput";
import ArgumentsInterface from "./OptionsInterface";
import ProgramInterface from "./ProgramInterface";
import CommandInterface from './CommandInterface';

// object for storing program attributes
const PROGRAM: ProgramInterface = {
  name: "arm-assembler",
  description: "ARM assembler and disassembler",
  version: "0.0.0.0"
}

// object for storing command attributes
const COMMAND: CommandInterface = {
  name: "convert",
  description: "Assemble or disassemble ARM assembly instructions",
}

// object for storing options for the program
const OPTIONS: ArgumentsInterface[] = [
  // generate the ARM assembly instruction option
  {
    name: "instruction",
    flags: ["i", "instruction"],
    description:
      "An ARM assembly instruction that has been properly\
       formatted, following the assumptions, examples, \
       and guidelines listed in the README.",
    required: true,
  },
];

// instantiate the user input handler with options
const input = new HandleUserInput(OPTIONS);
