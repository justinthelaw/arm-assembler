import OptionsInterface from "./OptionsInterface";
import CommandInterface from "./CommandInterface";
import ProgramInterface from "./ProgramInterface";

// these are in pairs
export const FLAGS = ["i", "instruction", "m", "machineCode"];

// object for storing options for the command
export const OPTIONS: OptionsInterface[] = [
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
export const COMMANDS: CommandInterface[] = [
  {
    name: "convert",
    description:
      "assemble or disassemble ARM assembly instructions and associated machine codes",
    options: OPTIONS,
  },
];

// object for storing program attributes, same as package.json
export const PROGRAM: ProgramInterface = {
  name: "node ./src/Main.js",
  version: "1.0.0",
  description: "Mock ARM assembly instruction to machine code translator",
};

// default user error message
// blames all errors on user input being formatted incorrectly
export const ERROR = "User input is incorrect!";

export const VALID_OPERATIONS = [
  "AND",
  "EOR",
  "ORR",
  "ADD",
  "SUB",
  "RSB",
  "MOV",
  "MVN",
  "LSL",
  "LSR",
  "ASR",
  "ROR",
  "MUL",
  "MLA",
  "STR",
  "LDR",
];

export const VALID_REGISTERS = [
  "R0",
  "R1",
  "R2",
  "R3",
  "R4",
  "R5",
  "R6",
  "R7",
  "R8",
  "R9",
  "R10",
  "R11",
  "R12",
];

// includes A and S as appropriate
// follows VALID_OPERATIONS so that no errors occur later in program
export const OP_MACHINECODES = new Map<string, string>();
OP_MACHINECODES.set(VALID_OPERATIONS[0], "0000"); //  "AND"
OP_MACHINECODES.set(VALID_OPERATIONS[1], "0001"); //  "EOR"
OP_MACHINECODES.set(VALID_OPERATIONS[2], "1100"); //  "ORR"
OP_MACHINECODES.set(VALID_OPERATIONS[3], "0100"); //  "ADD"
OP_MACHINECODES.set(VALID_OPERATIONS[4], "0010"); //  "SUB"
OP_MACHINECODES.set(VALID_OPERATIONS[5], "0011"); //  "RSB"
OP_MACHINECODES.set(VALID_OPERATIONS[6], "1101"); //  "MOV"
OP_MACHINECODES.set(VALID_OPERATIONS[7], "1111"); //  "MVN"
OP_MACHINECODES.set(VALID_OPERATIONS[8], "1101"); //  "LSL"
OP_MACHINECODES.set(VALID_OPERATIONS[9], "1101"); //  "LSR"
OP_MACHINECODES.set(VALID_OPERATIONS[10], "1101"); //  "ASR"
OP_MACHINECODES.set(VALID_OPERATIONS[11], "1101"); //  "ROR"
OP_MACHINECODES.set(VALID_OPERATIONS[12], "00000000"); //  "MUL"
OP_MACHINECODES.set(VALID_OPERATIONS[13], "00000010"); //  "MLA"
OP_MACHINECODES.set(VALID_OPERATIONS[14], "1101"); //  "STR"
OP_MACHINECODES.set(VALID_OPERATIONS[15], "1101"); //  "LDR"
