const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function toMorseCode(char) {
    const morseCodeDict = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    };
    return morseCodeDict[char.toUpperCase()] || '';
}

function isMorseCodePalindrome(s) {
    const alphanumericChars = s.split('').filter(char => /[a-zA-Z0-9]/.test(char));
    const morseCode = alphanumericChars.map(char => toMorseCode(char)).join('');
    return morseCode === morseCode.split('').reverse().join('');
}

rl.on('line', (line) => {
    const inputString = line.trim();
    if (inputString.match(/[a-zA-Z0-9]/)) {
        console.log(isMorseCodePalindrome(inputString) ? 1 : 0);
    } else {
        console.log(0);
    }
});

/*The task at hand requires determining whether a given input string, when converted to Morse code, forms a palindrome. 
A palindrome is a sequence of characters that reads the same forwards and backwards, disregarding spaces, capitalization, 
punctuation, and word boundaries.

To solve this task, we need to follow these steps:

Define a function to convert characters to Morse code.
Filter out non-alphanumeric characters from the input string.
Convert the remaining alphanumeric characters to Morse code.
Check if the Morse code sequence reads the same forwards and backwards.
Output 1 if the input string is a Morse Code Palindrome, otherwise output 0. If there are no alphanumeric characters 
in the input string, the output should be 0.
The code should handle reading input from the standard input and producing output to the standard output, as required 
by the input/output specifications provided.*/