/**
 * -------- function ---------
 * 
 * 1. function declaration
 * 2. function return
 * 3. function call to get return value
 * 
 */

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add(5, 80);
console.log(bill);


// conditional return
function result(marks) {
    if(marks >= 40) {
        return 'passed\n';
    }
    else {
        return 'failed\n';
    }
}

const final = result(43);
console.log(final);


// no return: undefined
function no() {
    console.log('no return: undefined');
}

let NO = no();
console.log(NO);