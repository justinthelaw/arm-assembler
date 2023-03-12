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
// follows VALID_OPERATIONS so that no errors occur later in program
export const OP_MACHINECODES = new Map<string, string>();
OP_MACHINECODES.set(VALID_OPERATIONS[0], "0000");
OP_MACHINECODES.set(VALID_OPERATIONS[1], "0001");
OP_MACHINECODES.set(VALID_OPERATIONS[2], "1100");
OP_MACHINECODES.set(VALID_OPERATIONS[3], "0100");
OP_MACHINECODES.set(VALID_OPERATIONS[4], "0010");
OP_MACHINECODES.set(VALID_OPERATIONS[5], "0011");
OP_MACHINECODES.set(VALID_OPERATIONS[6], "1101");
OP_MACHINECODES.set(VALID_OPERATIONS[7], "1111");
OP_MACHINECODES.set(VALID_OPERATIONS[8], "1101");
OP_MACHINECODES.set(VALID_OPERATIONS[9], "1101");
OP_MACHINECODES.set(VALID_OPERATIONS[10], "1101");
OP_MACHINECODES.set(VALID_OPERATIONS[11], "1101");
OP_MACHINECODES.set(VALID_OPERATIONS[12], "00000000");
OP_MACHINECODES.set(VALID_OPERATIONS[13], "00000010");
OP_MACHINECODES.set(VALID_OPERATIONS[14], "0101");
OP_MACHINECODES.set(VALID_OPERATIONS[15], "0111");
