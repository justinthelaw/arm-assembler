import { ERROR } from "./constantsRules";

// check the source registers for an immediate
export function checkForImm(regs: Array<string>): boolean {
  for (let i = 0; i < regs.length; i++) {
    if (regs[i].includes("#")) {
      return true;
    }
  }
  return false;
}

export function checkRegsImm(
  opCode: string,
  srcRegs: string[],
  destReg: string
): string {
  let machineCode = "";
  let hasImmediate = false;

  // Determine if any source registers contain an immediate value
  for (let i = 0; i < srcRegs.length; i++) {
    if (checkForImm(srcRegs)) {
      hasImmediate = true;
      break;
    }
  }

  // Handle the different opcodes that require immediate values
  switch (opCode) {
    case "MOV":
      if (hasImmediate) {
        machineCode += "001";
      } else {
        machineCode += "000";
      }
      break;

    case "ADD":
    case "SUB":
    case "AND":
    case "ORR":
      if (hasImmediate) {
        machineCode += "0010";
      } else {
        machineCode += "0000";
      }
      break;

    case "LDR":
    case "STR":
      if (hasImmediate) {
        machineCode += "010";
      } else {
        machineCode += "011";
      }
      break;

    case "MUL":
    case "MLA":
      if (hasImmediate) {
        machineCode += "00000";
        throw new Error(ERROR);
      } else {
        machineCode += "0001";
      }
      break;

    default:
      throw new Error(ERROR);
  }

  // Handle the destination register
  if (destReg === "PC") {
    machineCode += "1110";
  } else {
    const destRegNumber = parseInt(destReg[1]);
    machineCode += ("000" + destRegNumber.toString(2)).slice(-4);
  }

  // Handle the source registers
  let srcRegBits = "";
  for (let i = 0; i < srcRegs.length; i++) {
    const srcReg = srcRegs[i];
    if (srcReg.includes("#")) {
      // Handle immediate values
      const immValue = parseInt(srcReg.slice(1));
      srcRegBits += ("00000000" + immValue.toString(2)).slice(-8);
    } else {
      // Handle register values
      const srcRegNumber = parseInt(srcReg[1]);
      srcRegBits += ("000" + srcRegNumber.toString(2)).slice(-4);
    }
  }
  machineCode += srcRegBits;

  // Return the resulting machine code
  return machineCode;
}
