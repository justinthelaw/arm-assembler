import HandleUserInput from "./HandleUserInput";
import instructionConversion from "./instructionConversion";
import binaryToHex from "./binaryToHex";
import { ERROR, FLAGS, PROGRAM, COMMANDS } from "./constantsRules";

// some console welcome messages
console.log("\nWelcome to the mock ARM Assembly and Disassembly Program!");
console.log("Written by Justin Law (https://www.github.com/justinthelaw)\n");
console.log("=> PROGRAM MESSAGES START BELOW");

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

  // use converter on instruction
  const convertedResult: string = instructionConversion(instruction);

  // print out result from conversion, or error
  // provides binary and hexadecimal representation
  console.log(
    `=> Resulting machine code:
    \tBinary: ${convertedResult || ERROR}
    \tHexadecimal: ${binaryToHex(convertedResult) || ERROR}`
  );
  // if none of the above, output error and end
} else {
  throw new Error(ERROR);
}

// some console closing messages
console.log(
  `\nThank you for using the mock ARM Assembly and Disassembly Program!`
);
console.log("Written by Justin Law (https://www.github.com/justinthelaw)\n");
