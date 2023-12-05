function isPalindrome(word) {
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        return false; // Not a palindrome if the first and last characters are different
    }
}

// Example usage:
const word1 = "gag";
const word2 = "hello";

console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);
console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);