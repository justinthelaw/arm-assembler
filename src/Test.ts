import instructionConversion from "./instructionConversion";
import binaryToHex from "./binaryToHex";

/*
Test the following:
  e1a01002 mov r1, r2
  e3a03007 mov r3, #7
  e2837005 add r7, r3, #5
  e0468003 sub r8, r6, r3
  e0030594 mul r3, r4, r5
  e1a01312 lsl r1, r2, r3
  e1a02453 asr r2, r3, r4
  e5921000 ldr r1, [r2]
  e5902004 ldr r2, [r0, #4]
  e7821003 str r1, [r2, r3]
*/

// for hexadecimal test
// let convertedResult: string = binaryToHex(
//   instructionConversion("mov r1, r2".toUpperCase())
// );
// console.log(`\nExpected: e1a01002\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("mov r3, #7".toUpperCase())
// );
// console.log(`\nExpected: e3a03007\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("add r7, r3, #5".toUpperCase())
// );
// console.log(`\nExpected: e2837005\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("sub r8, r6, r3".toUpperCase())
// );
// console.log(`\nExpected: e0468003\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("mul r3, r4, r5".toUpperCase())
// );
// console.log(`\nExpected: e0030594\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("lsl r1, r2, r3".toUpperCase())
// );
// console.log(`\nExpected: e1a01312\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("asr r2, r3, r4".toUpperCase())
// );
// console.log(`\nExpected: e1a02453\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("ldr r1, [r2]".toUpperCase())
// );
// console.log(`\nExpected: e5921000\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("ldr r2, [r0, #4]".toUpperCase())
// );
// console.log(`\nExpected: e5902004\nReceived: ${convertedResult}\n`);
// convertedResult = binaryToHex(
//   instructionConversion("str r1, [r2, r3]".toUpperCase())
// );
// console.log(`\nExpected: e7821003\nReceived: ${convertedResult}\n`);

// for binary troubleshooting
let binaryResult: string = instructionConversion("mov r1, r2".toUpperCase());
console.log(`\nExpected: e1a01002\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("mov r3, #7".toUpperCase());
console.log(`\nExpected: e3a03007\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("add r7, r3, #5".toUpperCase());
console.log(`\nExpected: e2837005\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("sub r8, r6, r3".toUpperCase());
console.log(`\nExpected: e0468003\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("mul r3, r4, r5".toUpperCase());
console.log(`\nExpected: e0030594\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("lsl r1, r2, r3".toUpperCase());
console.log(`\nExpected: e1a01312\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("asr r2, r3, r4".toUpperCase());
console.log(`\nExpected: e1a02453\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("ldr r1, [r2]".toUpperCase());
console.log(`\nExpected: e5921000\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("ldr r2, [r0, #4]".toUpperCase());
console.log(`\nExpected: e5902004\nReceived: ${binaryResult}\n`);
binaryResult = instructionConversion("str r1, [r2, r3]".toUpperCase());
console.log(`\nExpected: e7821003\nReceived: ${binaryResult}\n`);
