/*
    CIT 281 Project 1
    Name: Teresa Tseng
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// resource: https://codehandbook.org/generate-random-string-characters-in-javascript/

function random_character () {
    // List all characters 
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    let str = ''    // Pick random characters 

    // Output random characters between 5-25 inclusivly 
    for (let i = 5; i <= 25; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

console.log(random_character())