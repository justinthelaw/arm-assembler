import { ERROR } from "./constantsRules";

export default function checkRegsImm(
  opCode: string,
  srcRegs: Array<string>,
  destReg: string
): string {
  let result = "";

  // check if data operation uses immediate or register
  if (
    opCode !== "LDR" &&
    opCode !== "STR" &&
    opCode !== "MUL" &&
    opCode !== "MLA"
  ) {
    const immRegIndex = srcRegs.findIndex((reg) => reg.includes("#"));
    if (immRegIndex !== -1) {
      const immReg = srcRegs[immRegIndex];
      const imm = immReg.slice(1);
      if (+imm >= 0 && +imm <= 255) {
        // valid immediate value
        const regList = [
          ...srcRegs.slice(0, immRegIndex),
          ...srcRegs.slice(immRegIndex + 1),
        ];
        const rn = regList[0];
        const rd = destReg;
        result = `0x${(+imm).toString(16).padStart(2, "0")}${rn}${rd}`;
      } else {
        throw new Error(ERROR);
      }
    } else {
      // no immediate operand
      const [rn, rd] = srcRegs;
      result = `0x0${rn}${rd}`;
    }
  }

  return result;
}
