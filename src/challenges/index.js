// Task: reverse the line

/**
 * The function takes a string and returns it in reverse order.
 * @param {string} str - original line
 * @returns {string} - inverted line
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Examples of use:
console.log(reverseString("hello"));     // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("12345"));      // "54321"

// Try changing the arguments and see the result :)
