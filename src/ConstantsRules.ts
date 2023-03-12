// these are in pairs
export const FLAGS = ["i", "instruction", "m", "machineCode"];

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
export const OP_MACHINECODES = new Map<string, string>();
OP_MACHINECODES.set("AND", "0000");
OP_MACHINECODES.set("EOR", "0001");
OP_MACHINECODES.set("ORR", "1100");
OP_MACHINECODES.set("ADD", "0100");
OP_MACHINECODES.set("SUB", "0010");
OP_MACHINECODES.set("LSL", "1101");
OP_MACHINECODES.set("LSR", "1101");
OP_MACHINECODES.set("ASR", "1101");
OP_MACHINECODES.set("ROR", "1101");
OP_MACHINECODES.set("RSB", "0011");
OP_MACHINECODES.set("MOV", "1101");
OP_MACHINECODES.set("MVN", "1111");
OP_MACHINECODES.set("MUL", "00000000");
OP_MACHINECODES.set("MLA", "00000010");
OP_MACHINECODES.set("LDR", "0101");
OP_MACHINECODES.set("STR", "0111");
