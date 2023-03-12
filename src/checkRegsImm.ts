import { ERROR } from "./constantsRules";

export default function checkRegsImm(
  opCode: string,
  srcRegs: Array<string>,
  destReg: string
): string {
  let result = "";

  switch (opCode) {
    case "ADD":
    case "SUB":
      result = addSub(srcRegs, destReg);
      break;
    case "MOV":
      result = mov(srcRegs, destReg);
      break;
    case "LDR":
    case "STR":
      result = ldrStr(srcRegs, destReg);
      break;
    case "AND":
    case "ORR":
    case "EOR":
      result = andOrrEor(srcRegs, destReg, opCode);
      break;
    case "LSL":
    case "LSR":
      result = lslLsr(srcRegs, destReg, opCode);
      break;
    case "MUL":
    case "MLA":
      result = mulMla(srcRegs, destReg, opCode);
      break;
    default:
      throw new Error(ERROR);
  }

  return result;
}

function addSub(srcRegs: Array<string>, destReg: string): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += "0100";

  // add S flag (only for SUB) and Rn
  result += destReg;
  result += "000";

  // add Rd
  result += destReg;

  // check if operation is ADD or SUB
  if (srcRegs[1].includes("#")) {
    // immediate operand
    result += "1";
    const immValue = srcRegs[1].substring(1);
    const binaryImmValue = parseInt(immValue).toString(2).padStart(12, "0");
    result += binaryImmValue;
  } else {
    // register operand
    result += "0";
    result += srcRegs[1];
    result += "0000";
  }

  return result;
}

function mov(srcRegs: Array<string>, destReg: string): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += "0011";

  // add S flag and Rd
  result += "0000";
  result += destReg;

  // immediate operand
  result += "0";
  const immValue = srcRegs[0].substring(1);
  const binaryImmValue = parseInt(immValue).toString(2).padStart(12, "0");
  result += binaryImmValue;

  return result;
}

function ldrStr(srcRegs: Array<string>, destReg: string): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += srcRegs[0].includes("[") ? "0101" : "0110";

  // add P, U, and B flags
  result += "1"; // P flag
  result += srcRegs[0].includes("!") ? "1" : "0"; // U flag
  result += "0"; // B flag

  // add W flag
  result += srcRegs[0].includes("[") && srcRegs[1] === "sp" ? "1" : "0";

  // add Rn
  const rnValue = srcRegs[0].substring(1, srcRegs[0].indexOf(","));
  result += rnValue;

  // add Rd
  result += destReg;

  // add offset if there is one
  if (srcRegs[0].includes("#")) {
    const offsetValue = srcRegs[0].substring(srcRegs[0].indexOf("#") + 1);
    const binaryOffsetValue = parseInt(offsetValue)
      .toString(2)
      .padStart(12, "0");
    result += binaryOffsetValue;
  } else {
    result += "000000000000";
  }

  return result;
}

function andOrrEor(
  srcRegs: Array<string>,
  destReg: string,
  opCode: string
): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += "000110";

  // add S flag
  result += opCode === "EOR" ? "1" : "0";

  // add Rn
  result += srcRegs[0];

  // add Rd
  result += destReg;

  // check if operation is AND or ORR
  if (srcRegs[1].includes("#")) {
    // immediate operand
    result += "1";
    const immValue = srcRegs[1].substring(1);
    const binaryImmValue = parseInt(immValue).toString(2).padStart(12, "0");
    result += binaryImmValue;
  } else {
    // register operand
    result += "0";
    result += srcRegs[1];
    result += "0000";
  }

  return result;
}

function lslLsr(
  srcRegs: Array<string>,
  destReg: string,
  opCode: string
): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += opCode === "LSL" ? "110100" : "110101";

  // add S flag
  result += "0";

  // add Rn
  result += srcRegs[0];

  // add Rd
  result += destReg;

  // add shift amount
  const shiftAmount = srcRegs[1].substring(1);
  const binaryShiftAmount = parseInt(shiftAmount).toString(2).padStart(5, "0");
  result += binaryShiftAmount;

  return result;
}

function mulMla(
  srcRegs: Array<string>,
  destReg: string,
  opCode: string
): string {
  let result = "";

  // add the 0b prefix
  result += "0b";

  // add I flag and opcode
  result += "0001";

  // add A flag (only for MLA) and Rd
  if (opCode === "MLA") {
    result += "1";
  } else {
    result += "0";
  }
  result += destReg;

  // add Rm
  result += srcRegs[1];

  // add Rs (only for MLA) or 0000
  if (opCode === "MLA") {
    result += srcRegs[2];
  } else {
    result += "0000";
  }

  // add Rn or immediate value
  if (srcRegs[0].includes("#")) {
    const immValue = srcRegs[0].substring(1);
    const binaryImmValue = parseInt(immValue).toString(2).padStart(8, "0");
    result += binaryImmValue;
  } else {
    result += srcRegs[0];
  }

  // add padding bits
  result += "000000";

  return result;
}
