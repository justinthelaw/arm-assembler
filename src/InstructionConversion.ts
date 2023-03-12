import {
  validOperations,
  validRegisters,
  opMachineCodes,
} from "./ConstantsRules";

// default error message for incorrect input
// may accidentally hide program edge case errors too haha
export const ERROR = "User input is incorrect!";

// stores operation
let opCode = "";
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

  // see individual function for descriptions
  const result = checkOpAndTypeCode() + checkRegistersAndImmediates();

  // transforms binary machine code answer to hexadecimal representation
  return toHexadecimal(result);
}

function toHexadecimal(code: string): string {
  return code;
}

// adds Rn, Rd, Rt, Rm, Scaled Register, and Operand2 format
function checkRegistersAndImmediates(): string {
  let result = "";

  return result;
}

// adds Cond Code, Op Type, Op Code, A and S or L/S code
function checkOpAndTypeCode(): string {
  // adds the 0b prefix and condition code
  // always defaults to assumption of 0b1110
  let result = "0b1110";

  // check if LDR/STR uses immediate or register
  if (opCode === "LDR" || opCode === "STR") {
    if (srcRegs.includes("#")) {
      result += "010";
    } else {
      result += "011";
    }
  }

  // check if data operation uses immediate or register
  if (
    opCode !== "LDR" &&
    opCode !== "STR" &&
    opCode !== "MUL" &&
    opCode !== "MLA"
  ) {
    if (srcRegs.includes("#")) {
      result += "001";
    } else {
      result += "000";
    }
  }

  // check the op code based on Map<string, string>
  // note 1: includes S values
  // note 2: MUL and MLA include Op Type and Op Code, A and S
  result += opMachineCodes.get(opCode);

  // check if load or store code
  if (opCode === "LDR") {
    result += "0";
  } else if (opCode === "STR") {
    result += "1";
  }

  return result;
}

// takes in an all uppercase string and determines if it is
// a valid ARM assembly instruction based on the assumptions
// and design identified within the README
function isArmInstruction(instruction: string): boolean {
  // Split the instruction into parts by whitespace
  const parts = instruction.trim().split(/\s+/);

  // Check that the first part is a valid operation
  opCode = parts[0];
  if (!validOperations.includes(opCode)) {
    return false;
  }

  // Check that the instruction has at least one destination register operand
  if (parts.length < 2) {
    return false;
  }

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

  // message to the user as a potential debug step
  // shows the parsed operation, registers, and/or immediate
  console.log("=> Program has parsed out the following:");
  console.log(
    `\tOperation: ${opCode}\n\tDestination Register: ${destReg}
    \tSource Register(s) and/or Immediate: ${srcRegs.join(", ")}`
  );
  // If all checks pass, the instruction is valid
  return true;
}

// provides registers without the comma or bracket notations
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
