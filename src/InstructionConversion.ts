export default function InstructionConversion(instruction: string): string {
  console.log(
    `=> Converting the following ARM assembly instruction to machine code:\n\t${instruction}`
  );

  if (!isArmInstruction(instruction)) {
    return "ILLEGAL ARGUMENT EXCEPTION: The user-provided instruction was improperly formatted. Please try again!"
  }

  let result = ""



  return result;
}

// takes in an all uppercase string and determines if it is
// a valid ARM assembly instruction based on the assumptions
// and design identified within the README
function isArmInstruction(instruction: string): boolean {
  // Split the instruction into parts by whitespace
  const parts = instruction.trim().split(/\s+/);

  // Check that the first part is a valid operation
  const operation = parts[0];
  const validOperations = [
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
  ];
  if (!validOperations.includes(operation)) {
    return false;
  }

  // Check that the instruction has at least one destination register operand
  if (parts.length < 2) {
    return false;
  }

  // Check that all register operands are valid
  const validRegisters = [
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

  // first register identified in the instruction
  const destinationRegister = parts[parts.length - 1];
  if (!validRegisters.includes(destinationRegister)) {
    return false;
  }

  // secondary registers identified in the instruction
  const sourceRegisters = parts.slice(2, parts.length - 1);
  for (const register of sourceRegisters) {
    if (!validRegisters.includes(register)) {
      return false;
    }
  }

  // If all checks pass, the instruction is valid
  return true;
}
