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

function start_game() {
    let user_name = prompt(`Hello there, what's you name?`)
    alert(`Welcome, ${user_name}, to a spooky (and *really* autistic) little game!`)
    alert(`You find yourself in a familiar feild, only you don't seem to remember being here before and it's rather Halloween themed.
    There's a pine forest to the east, a frozen sea to the south, a ruined city to the west and a grand mountian range to the north.
    It's the middle of the night, the silver moons hang above and the icy wind wips around you and snow drifts down from the sky.`)
    start_choice()
}

function start_choice() {
    let first_choice = Number(prompt(`Where do you want to go, the forest (1), the sea (2), the ruins (3) or the mountains (4)?`))
    if(first_choice=1) {
        forest()
        }
    if(first_choice=2) {
        sea()
        }
    if(first_choice=3) {
        ruins()
        }
    if(first_choice=4) {
        mountains()
        }
    return
}
function forest() {
    alert(`You head to the forest. The trees and undergrowth are blanketed in a thick layer of snow. Its all quite and you venture farthe in. After a while you hear erie giggling and soundss of struggle in the distance.`)
    let second_choice = Number(prompt(`Do you want to stand your ground (1), hide (2) or run (3)?`))
    if (second_choice = 1) {
        forest_stand()
    }
    if (second_choice = 2) {
        forest_hide()
    }
    if (second_choice = 3) {
        forest_run()
    }
    return
}

function forest_stand() {
        alert(`You stand your ground. The noises continue for quite some time, often punctuated with screams. A figure is launched above the canopy in the distance, and the forest goes silent as another follows.`)
        return
}

function forest_hide() {
        alert(`You hide in the undergrowth. The noises continue for quite some time, often punctuated with screams. The forest soon goes silent, and you come out from your hinding spot.`)
        return
}

function forest_run() {
        alert(`You run away. As you stumble over the snow covered roots and stones, a figure lands on a tree infront of you. You manage to let out a single, bone chilling scream before they lung at you, a mass of tatered wings and metal.`)
        alert(`The snow is stained black with your spilled oil, not the most pleasant end.`)
            forest()
        return
}

function sea() {

}

function ruins() {

}

function mountains() {

}
