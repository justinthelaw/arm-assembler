// converts a given integer to a binary representation with a given number of bits
export default function decimalToBinary(decimal: number, bits: number): string {
  let binary = "";

  // Convert the decimal number to binary
  for (let i = bits - 1; i >= 0; i--) {
    if ((decimal & (1 << i)) !== 0) {
      binary += "1";
    } else {
      binary += "0";
    }
  }

  return binary;
}
