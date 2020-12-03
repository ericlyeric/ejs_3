// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3

function loopingATriangle(numberOfRows) {
    let triangle = '';
    for (let i = 0; i < numberOfRows; i++) {
        triangle += '#';
        console.log(triangle);
    }
}

loopingATriangle(7);