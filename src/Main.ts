import HandleUserInput from "./HandleUserInput";
import OptionsInterface from "./OptionsInterface";
import ProgramInterface from "./ProgramInterface";
import CommandInterface from "./CommandInterface";

// object for storing options for the command
const OPTIONS: OptionsInterface[] = [
  // generate the ARM assembly instruction conversion option
  {
    name: "arm assembly instruction",
    flags: ["-i", "--instruction"],
    description: "flag prior to inputting ARM assembly instruction",
    required: false,
  },
  // generate the Mmachine code conversion option
  {
    name: "machine code",
    flags: ["-m", "--machine-code"],
    description: "flag prior to inputting machine code.",
    required: false,
  },
];
// object for storing the commands in the program
const COMMANDS: CommandInterface[] = [
  {
    name: "convert",
    description:
      "assemble or disassemble ARM assembly instructions and associated machine codes",
    options: OPTIONS,
  },
];

// object for storing program attributes
const PROGRAM: ProgramInterface = {
  name: "node ./src/Main.js",
  description: "ARM assembler and disassembler",
  version: "0.0.0.0",
};

// instantiate the user input handler for use
const handler = new HandleUserInput(PROGRAM, COMMANDS);
handler.parseUserInput();
