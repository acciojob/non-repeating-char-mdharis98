function firstNonRepeatedChar(str) {
    // Create an object to store character frequency
    const charCount = {};
    
    // Iterate over the string and count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate again to find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If no non-repeated character is found, return nul
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
