// takes in a binary string prefixed with 0b, or not
// then converts to hexadecimal
export default function binaryToHex(binary: string): string {
  // Remove the "0b" prefix from the binary string
  if (binary.includes("0b")) {
    binary = binary.slice(2);
  }

  // Pad the binary string with leading zeros if necessary
  while (binary.length % 4 !== 0) {
    binary = "0" + binary;
  }

  let hex = "";
  for (let i = 0; i < binary.length; i += 4) {
    // Convert the current 4-bit segment to a hexadecimal digit
    const segment = binary.slice(i, i + 4);
    const digit = parseInt(segment, 2).toString(16);
    hex += digit;
  }

  return hex;
}
