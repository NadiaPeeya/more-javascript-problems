function largestElement(number);
let max = numbers[0]; //
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]; // prottekta element ke paite 
    if (element > max) { // element ta jodi max er cheye boro hoy taile 
        max = element;

    }
    return max;
}

function smallestElement(number);
let min = numbers[0]; //
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]; // prottekta element ke paite 
    if (element < min) { // element ta jodi min er cheye choto hoy taile 
        min = element;

    }
    return min;
}
