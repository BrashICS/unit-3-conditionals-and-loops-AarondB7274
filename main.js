/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// For "equal to" use == , for "and" use && , for  "or" use ||

function user() {
    let user_age = Number(prompt(`How old are you?`))
    if (user_age >= 60) {
        console.log(`You qualify for a senior discount!`)
    }
    if (user_age < 16) {
        console.log(`You aren't old enough to drive yet! No worries, I'm old enough and don't know anyways.`)
    }
    if (user_age == 44) {
        console.log(`You're the same age as Mr. Brash, cool!`)
    }
    let user_name = prompt(`What's your prefered name (or tag)?`)
    if (user_name == "Mr. Squirrel") {
        console.log(`Are you a 🐿️?`)
    }
    let name_length = user_name.length
    if(name_length < 4) {
        console.log(`You have an under average length name!`)
    }
    if(name_length < 8) {
        console.log(`You have an above average length name!`)
    }
    let name_guess = Number(prompt(`How many character do you think that was?`))
    if(name_guess = name_length) {
        console.log(`Thats right! Your name is ${name_length} characters long! Not the hardest guess, if I'm honest.`)
    }
    if(name_guess > name_length) {
        console.log(`Sorry, thats too many characters. No worries, string length can be difficult.`)
    }
    if(name_guess < name_length) {
        console.log(`Sorry, thats too few characters. No worries, string length can be difficult.`)
    }
}
