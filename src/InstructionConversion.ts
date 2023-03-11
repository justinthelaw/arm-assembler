// default error message for incorrect input
// may accidentally hide program edge case errors too haha
export const ERROR = "User input is incorrect!";

// stores operation
let op = "";
// stores the destination register
let destReg = "";
// stores source registers
let srcRegs: Array<string> = [];

export default function InstructionConversion(instruction: string): string {
  console.log(
    `=> Converting the following ARM assembly instruction to machine code:\n\t${instruction}`
  );

  if (!isArmInstruction(instruction)) {
    throw new Error(ERROR);
  }

  let result = "";
  // adds the op code
  const opCode = instruction.substring(0, 3);
  // TODO: complete the op and type check
  const opCodeAndType = checkOpAndTypeCode(opCode);

  return result;
}

function checkOpAndTypeCode(code: string): string {
  // adds the 0b prefix and condition code
  // always defaults to assumption of 0b1110
  const withCond = "0b1110";

  // TODO: complete determination based on srcRegs
  const withReg = "000";
  const withImm = "001";

  switch (code) {
    case "AND": // includes S
      return withCond + "0000";
    case "EOR": // includes S
      return withCond + "0001";
    case "ORR": // includes S
      return withCond + "1100";
    case "ADD": // includes S
      return withCond + "0100";
    case "SUB": // includes S
      return withCond + "0010";
    case "LSL": // all the same
    case "LSR": // all the same
    case "ASR": // all the same
    case "ROR": // all the same
      return withCond + "1101";
    case "RSB":
      return "0011";
    case "MOV":
      return "1101";
    case "MVN":
      return "1111";
    case "MUL": // includes A and S
      return withCond + "00000000";
    case "MLA":
      return withCond + "00000010";
    case "LDR":
      return withCond + "0101";
    case "STR":
      return withCond + "0111";
    default:
      throw new Error(ERROR);
  }
}

// takes in an all uppercase string and determines if it is
// a valid ARM assembly instruction based on the assumptions
// and design identified within the README
function isArmInstruction(instruction: string): boolean {
  // Split the instruction into parts by whitespace
  const parts = instruction.trim().split(/\s+/);

  // Check that the first part is a valid operation
  op = parts[0];
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
    "STR",
    "LDR",
  ];
  if (!validOperations.includes(op)) {
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
  destReg = parts[1].substring(0, 2);
  if (!validRegisters.includes(destReg)) {
    return false;
  }

  // secondary registers identified in the instruction
  srcRegs = cleanSourceRegisters(parts.slice(2, parts.length));
  let i = 1; // keep count of reg terms checked
  for (const register of srcRegs) {
    let r = register;
    // check for register or immediate
    if (!validRegisters.includes(r) && !r.includes("#")) {
      return false;
    }
    // immediates should only be in the last term
    if (i !== srcRegs.length && r.includes("#")) {
      return false;
    }
    i++; // move on to next term
  }

  console.log("=> Program has parsed out the following:");
  console.log(
    `\tOperation: ${op}\n\tDestination Register: ${destReg}\n\tSource Register(s) and/or Immediate: ${srcRegs}`
  );
  // If all checks pass, the instruction is valid
  return true;
}

function cleanSourceRegisters(regs: Array<string>): Array<string> {
  return regs.map((reg) => {
    if (reg.includes("[")) {
      return reg.substring(1, reg.length).substring(0, 2);
    } else if (reg.includes("]")) {
      return reg.substring(0, reg.length - 1).substring(0, 2);
    } else {
      return reg.substring(0, 2);
    }
  });
}
