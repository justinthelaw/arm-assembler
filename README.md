# Arm Assembler

This is a mock ARM instruction assembler written in TypeScript. This exercise serves as a method to increase my understanding of the ARM assembly language and the mechanics of creating executable machine code for the CPU.

## Assumptions
- The provided ARM assembly language instruction is correctly formatted and written
- The ARM assembly instruction is a Data Processing or Load/Store operation of the following types:
  - AND, EOR, ORR
  - ADD, SUB
  - RSB, MOV, MVN, LSL, LSR, ASR, ROR, RRX
  - MUL, MLA

## Design
- TypeScript was chosen as a way to practice using the syntax of the language for my own professional development, although I could have comfortably done this in Java or Kotlin
- One class is generated and methods from the class are used to accomplish different steps related to each ARM assembly instruction set
- Most of the rules are implemented as key-value pair objects for easy switch-based referencing

## Usage
This is a command-line tool that takes in a String argument that contains an ARM assembly language instruction. To run the program, execute the following in your command-line:

```bash
# compile the TypeScript files into JavaScript
# see package.json for command details
npm build
# use node.js to run the file
# supply the ARM assembly instruction as a string
node armAssembler.js "mov r1, r2"
```

## Testing

The following ARM assembly instruction-machine code pairs will be used as test cases for verifying the performance of this program:

```text
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
```