const greeting = 'hello, how are you?'

function reverseString(text) {
    let reverse = '';
    for (const char of text) {
        console.log(char);
        reverse = char + reverse;
    }
    return reverse;
}

const reversed = reverseString(greeting);
console.log(reversed);