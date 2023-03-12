# ARM Instruction Assembler

This is a mock ARM instruction assembler written in TypeScript. This exercise serves as a method to increase my understanding of the ARM assembly language and the mechanics of creating executable machine code for the CPU.

## Assumptions

- The provided ARM assembly language instruction is correctly formatted and written
- The provided machine code is correctly formatted and written
- The ARM assembly instruction is a Data Processing or Load/Store operation of the following types:
  - AND, EOR, ORR
  - ADD, SUB
  - RSB, MOV, MVN, LSL, LSR, ASR, ROR
  - MUL, MLA
  - LDR, STR
- Only certain codes from class are applied, like conditions (1110) and S-flag (0)
- Instructions will not exceeding 4 terms
- See [Testing](#testing) section for examples of properly formatted instructions that fall within these assumptions

## Design

- TypeScript was chosen as a way to practice using the syntax of the language for my own professional development, although I could have comfortably done this in Java or Kotlin
- Each class/function file handles a different aspect of the ARM Assembly conversion to machine code, to include operations like user input handling and binary to hexadecimal conversions
- Most of the rules are implemented as key-value pair objects or arrays in a Constants file for consistent/easy importing and referencing
- Command line arguments are parsed using a library named commander.js

## Usage

This is a command-line tool that takes in a String argument that contains an ARM assembly language instruction. To run the program, execute the following in your command-line:

```bash
# install all required npm packages
npm install
# compile the TypeScript files into JavaScript
# see package.json and tsconfig.json for details
npm run build
# run the main function using node JS
# see usage instructions and options for this program
node ./src/Main.js convert help
# run as an ARM assembler for machine code conversion
# supply the ARM assembly instruction as a string
node ./src/Main.js convert -i "mov r1, r2"
```

If you want a hot-reload dev environment, you can execute the following instead of `npm run build`:

```bash
# compile the TypeScript files into JavaScript
# adds watch mode option for live change reloads/builds
npm run dev
```

## Testing

The following ARM assembly instruction-machine code pairs are used as test cases for verifying this program's performance:

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

To run the tests, for to the `Test.ts` file and modify the code according to the comments. Then, execute the following:

```bash
# TypeScript compile in watch mode
npm run dev
# run the tests file contents
node ./src/Test.js
```

## Disclaimer

The current program cannot perform machine code to ARM assembly instruction conversion (disassembly) yet; therefore, the `-m --machine-code <string>` options are stubs and will only echo the user-input option.

This program is incomplete and I may come back one day to complete this. For now, please take a look at the code and feel free to provide issues or pull requests. Thank you!
