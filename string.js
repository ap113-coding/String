let string = "Aman Pandey"
// console.log(string);
string = "Aman Yash Kumar Pandey";
console.log(string);

let my_name = "Aman Pandey";
console.log(my_name);

function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    
    // Initialize a counter to keep track of the number of vowels
    let count = 0;
    
    // Iterate over each character in the input string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    // Return the total count of vowels
    return count;
}

// Test the function
console.log(countVowels("hello")); 


function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the cleaned string is the same as its reversed version
    return cleanedStr === reversedStr;
}

// Test the function
console.log(isPalindrome("radar")); 


function reverseWords(str) {
    // Split the string into an array of words
    const wordsArray = str.split(' ');

    // Reverse the order of the words in the array
    const reversedArray = wordsArray.reverse();

    // Join the reversed array back into a string
    const reversedStr = reversedArray.join(' ');

    return reversedStr;
}

// Test the function
console.log(reverseWords("hello world")); 
