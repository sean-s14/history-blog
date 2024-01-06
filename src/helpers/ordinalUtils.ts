export function numberToOrdinal(num: number) {
  const ordinals = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
    "twentieth",
  ];

  // Check if the number is within the valid range
  if (num >= 1 && num <= ordinals.length) {
    return ordinals[num - 1];
  } else {
    return "Invalid number";
  }
}

// Example usage
// console.log(numberToOrdinal(1));  // Output: "first"
// console.log(numberToOrdinal(2));  // Output: "second"
// console.log(numberToOrdinal(3));  // Output: "third"
