/**
 * Objective: write a function to give me the sum of all numbers in an array
 */

// kono ekta function kono kisu return na korle value hobe undefined.

function sumOfNumbers(array) {
    console.log(array);

    let sum = 0;
    for (const i of array) {
        sum += i;
    }

    return sum;
}

const sum = sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(`Sum: ${sum}`);