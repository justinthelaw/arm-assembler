import HandleUserInput from "./HandleUserInput";
import OptionsInterface from "./OptionsInterface";
import ProgramInterface from "./ProgramInterface";
import CommandInterface from "./CommandInterface";

const FLAGS = ["i", "instruction", "m", "machine-code"];

// object for storing options for the command
const OPTIONS: OptionsInterface[] = [
  // generate the ARM assembly instruction conversion option
  {
    name: "arm assembly instruction",
    flags: [`-${FLAGS[0]}`, `--${FLAGS[1]}`],
    description: "flag prior to inputting ARM assembly instruction",
    required: false,
  },
  // generate the Mmachine code conversion option
  {
    name: "machine code",
    flags: [`-${FLAGS[2]}`, `--${FLAGS[3]}`],
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

// object for storing program attributes, same as package.json
const PROGRAM: ProgramInterface = {
  name: "node ./src/Main.js",
  version: "1.0.0",
  description: "Mock ARM assembly instruction to machine code translator",
};

// instantiate the user input handler for use
const handler = new HandleUserInput(PROGRAM, COMMANDS);
const inputObject = handler.parseUserInput();

console.log(
  inputObject[FLAGS[0]],
  inputObject[FLAGS[1]],
  inputObject[FLAGS[2]],
  inputObject[FLAGS[3]]
);
