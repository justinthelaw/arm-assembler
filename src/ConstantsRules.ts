export const validOperations = [
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

export const validRegisters = [
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
export const opMachineCodes = new Map<string, string>();
opMachineCodes.set("AND", "0000");
opMachineCodes.set("EOR", "0001");
opMachineCodes.set("ORR", "1100");
opMachineCodes.set("ADD", "0100");
opMachineCodes.set("SUB", "0010");
opMachineCodes.set("LSL", "1101");
opMachineCodes.set("LSR", "1101");
opMachineCodes.set("ASR", "1101");
opMachineCodes.set("ROR", "1101");
opMachineCodes.set("RSB", "0011");
opMachineCodes.set("MOV", "1101");
opMachineCodes.set("MVN", "1111");
opMachineCodes.set("MUL", "00000000");
opMachineCodes.set("MLA", "00000010");
opMachineCodes.set("LDR", "0101");
opMachineCodes.set("STR", "0111");
