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

// If loop time!

function user() {
    let user_age = +prompt(`How old are you?`)
    if(user_age >= 60) {
        console.log(`You qaulify for a senior discount!`)
    } else if(user_age == 44) {
        console.log(`You're the same age as Mr. Brash, neat!`)
    } else if(user_age < 16) {
        console.log(`You aren't old enough to drive yet! No worries, I'm old enough and haven't gotten my license yet.`)
    }
    let age_div = user_age % 2
    if(age_div = 1) {
        console.log(`Your age is an odd number!`)
    } else {
        console.log(`Your age is an even number!`)
    }
    let user_name = prompt(`Whats your prefered name (or user tag!)?`)
    if(user_name == Mr. Squirrel) {
        console.log(`Are you a 🐿️?`)
    }
    let name_guess = +prompt(`Now, how many characters do you think that was?`)
    if(name_guess > user_name.length) {
        console.log(`Sorry, thats too many characters`)
    } else if(name_guess < user_name.length) {
        console.log(`Sorry, thats too few characters.`)
    } else {
        console.log(`Thats right! The user name you entered is ${user_name.length} characters long!`)
    }
}

function longer_string(str1, str2) {
    if( str1.length > str2.length) {
        return str1
    } else {
        return str2
    }
}

function discriminant(a,b,c) {
    if(b**2-4*a*c > 0) {
        console.log(`That parabola has two zero's.`)
    } else if(b**2-4*a*c < 0) {
        console.log(`That parabola doesn't have any zero's.`)
    } else {
        console.log(`That parabola has one zero.`)
    }
}

function greeting(hour) {
    if(hour < 12 && hour > 0) {
        return "Good morning!"
    } else if(hour < 18 && hour > 11) {
        return "Good afternoon!"
    } else if(hour < 24 && hour > 17) {
        return "Good evening!"
    } else {
        return "Invalid hour!"
    }
}

function two_digit() {
    let digit = randInt(10,99)
    if(digit == 0) {
        return 0
    } else if(Math.floor(digit/2) == digit/2 &&Math.floor(digit/3) == digit/3) {
        return "Divisible by six."
    }
}

// While loop time!

function countdown(start, stop) {
    let loop = 0
    while (start >= stop) {
        console.log(start)
        loop++
        start--
    }
    console.log(`Go!`)
    return loop
}

function random_until(min, max, stop) {
    if (stop < min || stop > max || max <= min) {
        return -1
    }
    let rnd = randInt(min, max)
        while (rnd != stop) {
        console.log(rnd)
        rnd = randInt(min, max)
       }
       return stop
}

function average(n) {
    let loop = 0
    let total = 0
    while (loop < n) {
        loop++
        let num = +prompt(`Enter a value ${loop}/${n}`)
        total += num
        console.log(`Value #${loop}: ${num}`)
    }
    total = round(total/n, 1)
    console.log(`The average is ${total}`)
}

function print_reverse(str) {
    let loop = str.length
    let str_sec = ""
    while (loop > 0) {
        str_sec += str[loop-1]
        loop--
    }
    console.log(str_sec)
}

function dragons_and_goblins(str) {
    let dragons = 0
    let goblins = 0
    let loop = str.length
    while (loop > 0) {
        if (str[loop-1] == "d") {
            dragons++
        } else if (str[loop-1] == "g") {
            goblins++
        }
        loop--
    }
    console.log(`You passed ${dragons} dragons and ${goblins} goblins!`)
}

function add(str) {
    let num = 0
    let loop = 0
    while (loop < str.length) {
        num += +str[loop]
        loop++
    }
    return num
}

function add_subtract(str) {
    let num = 0
    let loop = 0
    while (loop < str.length) {
        if(str[loop] == "-") {
            num -= +str[loop+1]
            loop += 2
        } else {
            num += +str[loop]
            loop++
        }
    }
    return num
}

function substring(mainstring, start, stop) {
    let sub = ""
    if (start > stop) {
        let holster = stop
        stop = start
        start = holster
    }
    if (start < 0) {
        start = 0
    }
    if (stop < 0) {
        stop = 0
    }
    while (start < stop) {
        sub += mainstring[start]
        start++
    }
    return sub
}

function fix_pronoun(str) {
    str = str.toLowerCase()
    let loop = 1
    let fixed = str[0].toUpperCase()
    while (loop < str.length) {
        fixed += str[loop]
        loop++
    }
    return fixed
}

// Do-while loop time!

// ignore th fact that this task, in the do-while section, uses a for loop. Its fine, dw about it.
function print_odd(n) {
    if(isNaN(n) == false && n > 0) {
        for(let i = 1; i <= n; i += 2) {
            console.log(i)
        }
    }
}

function negative_only() {
    let input
    do {
        input = +prompt(`Gimme a negative number!`)
    } while (input > 0)
    return input
}

function parrot() {
    let input = ""
    do {
        input = prompt(`Enter any variant of "quit"`)
        console.log(`${input.toUpperCase()}`)
    } while (input.toLowerCase() != "quit")
    console.log(`GOODBYE!`)
}


function factorial(n) {
    let loop = 1
    let output = 1
    do {
        output = output*loop
        loop++
    } while (loop <= n)
    console.log(output)
    return
}

// For-loop time!

function count_up(start, stop) {
    for (let i = start; i < stop; i++) {
        console.log(i)
    }
    console.log(stop)
}

function count_down(start, stop) {
    for (let i = start; i > stop; i--) {
        console.log(i)
    }
    console.log(stop)
}

function print_chars(str, step) {
    for (let i = 0; i < str.length; i += step) {
        console.log(str[i])
    }
}

function sum(n) {
    let num = 0
    for (let i = 0; i < n+1; i++) {
        num += i
    }
    return num
}

function count4(start,stop) {
    let output = 0
    for (let i = start; i < stop+1; i++) {
        if (i % 4 == 0) {
            output++
        }
    }
    return output
}

function sum_divisible(n,x) {
    let output = 0
    for (let i = 0; i < n+1; i++) {
        if (i % x == 0) {
            output += i
        }
    }
    return output
}