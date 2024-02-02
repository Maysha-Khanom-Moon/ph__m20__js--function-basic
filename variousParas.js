/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSized(str) {
    console.log(str);

    return (str.length % 2) == 0;
}

console.log('size:', evenSized('Dhaka') ? 'Even' : 'Odd', '\n');

console.log('size:', evenSized([1, 2, 3]) ? 'Even' : 'Odd', '\n');