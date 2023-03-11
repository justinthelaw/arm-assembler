import HandleUserInput from "./HandleUserInput";
import OptionsInterface from "./OptionsInterface";
import ProgramInterface from "./ProgramInterface";
import CommandInterface from "./CommandInterface";
import InstructionConversion, { ERROR } from "./InstructionConversion";

// some console welcome messages
console.log("\nWelcome to the mock ARM Assembly and Disassembly Program!");
console.log("Written by Justin Law (https://www.github.com/justinthelaw)\n");
console.log("=> PROGRAM MESSAGES START BELOW");

const FLAGS = ["i", "instruction", "m", "machineCode"];

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

// if disassembly (machine code to ARM instruction)
// provide stub response (not built yet)
if (inputObject[FLAGS[2]] || inputObject[FLAGS[3]]) {
  console.log(
    `=> This is a stub response, as "-${FLAGS[2]}" and "-${FLAGS[3]}" are not built yet`
  );
  // if assembly (ARM instruction to machine code)
  // complete the conversion and output resulting message
} else if (inputObject[FLAGS[0]] || inputObject[FLAGS[1]]) {
  // get ARM instruction from the input response object
  const instruction = (
    inputObject[FLAGS[0]] || inputObject[FLAGS[1]]
  ).toUpperCase();
  // print out result from conversion, or error
  console.log(
    `=> Resulting machine code:\n\t${
      InstructionConversion(instruction) || ERROR
    }`
  );
  // if none of the above, output error and end
} else {
  throw new Error(ERROR);
}
console.log(`\nThank you for using the mock ARM Assembly and Disassembly Program!`);
console.log("Written by Justin Law (https://www.github.com/justinthelaw)\n");
