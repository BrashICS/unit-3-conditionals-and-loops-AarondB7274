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
let panic = 0
let time = 0
let loop = 0
let cover = false
function start_game() {
    time = 0
    panic = 0
    loop = 0
    let user_name = prompt(`Hello there, what's you name?`)
    let user_colour = prompt(`Now I just need a colour, any colour would work but I suggest your favourite.`)
    alert(`Welcome, ${user_name}, to a slightly spooky (and *really* mentaly ill) little game!`)
    alert(`You wake up in a familiar feild, only you don't seem to remember being here before. There's a pine forest to the east, a frozen sea to the south, a ruined city to the west and a grand mountian range to the north. It's just after sundown, the silver moons hang above the horizon and the icy wind whips around you as snow drifts down from the sky.`)
    start_choice()
    return time, user_name, user_colour, loop, panic
}

function start_choice() {
    time = 0
    cover = false
    if(panic > 0) {
        panic = panic - 1
    }
    let first_choice = Number(prompt(`Where do you want to go, the forest (1), the sea (2), the ruins (3) or the mountains (4)?`))
    if(first_choice == 1) {
        forest()
        } else if(first_choice == 2) {
        sea()
        } else if(first_choice == 3) {
        ruins()
        } else if(first_choice == 4) {
        mountains()
        }
    return time, cover, panic
}
function forest() {
    alert(`You head to the forest. The trees and undergrowth are blanketed in a thick layer of snow. Its all quite and you venture farther in, the snow crunching beneath your feet. After a while you hear erie giggling and sounds of struggle in the distance.`)
    let second_choice = Number(prompt(`Do you want to stand your ground (1), hide (2) or run (3)?`))
    if (second_choice == 1) {
        forest_stand()
    }
    if (second_choice == 2) {
        forest_hide()
    }
    if (second_choice == 3) {
        forest_run()
    }
    return time
}

function forest_stand() {
        alert(`You stand your ground. The noises continue for quite some time, often punctuated with screams. A winged figure is launched above the canopy in the distance, and the forest goes silent as another follows.`)
        forest_second()
        time = time + 0.5
        panic = panic + 1
        return time, panic
}

function forest_hide() {
        panic = 0
        if(time < 8)alert(`You hide in the undergrowth. The noises continue for quite some time, often punctuated with screams. The forest soon goes silent but you stay hidden longer out of fear, when you come out the moons have falled behind the trees.`)
        forest_second()
        time = time + 1.5
        return time
}

function forest_run() {
        alert(`You run away. As you stumble over the snow covered roots and stones, a figure lands on a tree infront of you, alerted to your presence by yout noisy retreat. You manage to let out a single, bone chilling scream before they lung at you, a mass of tatered wings and metal.`)
        alert(`The snow is stained black with your spilled oil, not the most pleasant end.`)
        forest()
        time = 0
        return time
}

function forest_second() {
    alert(`You stand in the forest, the snow faintly lit ${user_colour} from the glow of your eyes.`)
    let third_choice = Number(prompt(`Do you want to venture deeper into the forest (1), or go back (2)?`))
    if(third_choice == 1) {
        forest_continue()
    } else if(third_choice == 2) {
        leave()
    }
}

function sea() {
    alert(`You head to the seaside. The ice is perfectly smooth, a glassy mirror reflecting the moons from above. The shore is blanketed in snow, bordering the blue sea in white. It's calm here, a pair of winged figures dance in the sky over the frozen waters.`)
    let second_choice = Number(prompt(`Do you want to stare out across the ice (1), watch the figures (2) or leave (3)?`))
    if(second_choice == 1) {
        sea_stare()
    } else if(second_choice == 2) {
        sea_watch()
    } else if(second_choice == 3) {
        leave()
    }
    time = time + 0
    return time
}

function sea_stare() {
    alert(`You stare out across the frozen sea. You stay for quite some time, when you rise the figures have gone and the moons have gone below the horizon.`)
    sea_second()
    time = time + 1.5
    if(panic > 1) {
        panic = panic - 2
    } else if(panic > 0) {
        pnic = panic - 1
    }
    return time, panic
}

function sea_watch() {
    alert(`You watch the figures frolic in the sky. They zip around the clouds, decending with incredible speed before ascending again.`)
    sea_second()
    time = time + 0.5
    if(panic > 0) {
        panic = panic - 1
    }
    return time
}

function leave() {
    alert(`You head back to the feild where you woke up. There wasn't anything that intrested you here anyways.`)
    start_choice()
    time = time + 0.5
    return time
}

function sea_second() {
    let third_choice = Number(prompt(`You can wait here longer (1) or go back to the start (2)`))
    if(third_choice == 1) {
        sea_wait()
    } else if(third_choice == 2) {
        sea_leave()
    }
    return time
}

function sea_wait() {
    alert(`You stare you over the frozen waters. Its surface is perfectly smooth and still, not even a wave, frozen in time to be seen.`)
    time = time + 0.5
    return time
}

function ruins() {
    alert(`You head towards the ruined city. The crumbling buildings tower overhead, their windows strewn about as fragments of glass. Broken rebar jut out from the ends of snapped skyscrapers. A head crunches beneath your feet, the message "FATAL ERROR" displayed beneath its glass face. A spire made of...something, rises in the distance.`)
    let second_choice = Number(prompt(`Do you want to explore the city (1), go towards the spire (2) or leave (3)?`))
    if(second_choice == 1) {
        ruins_explore()
    } else if(second_choice == 2) {
        ruins_spire()
    } else if(second_choice == 3) {
        leave()
    }
}

function ruins_explore() {
    alert(`You search the dilapidated skyscrapers and desolate streets.`)
}

function ruins_spire() {
    alert(`You go towards the spire. Upon closer inspection the jagged, impractical sructure is made of...corpses. Theres a sort of archway in the side of the structure.`)
    let choice = Number(prompr(`Do you want to enter the spire (1) or leave the area?`))
    if(choice == 1) {
        ruins_spire_enter()
    } else if(choice == 2) {
        ruins()
    }
}

function ruins_spire_enter() {
    cover = true
    alert(`You enter the corpse-spire. There's a damaged landing craft in the center, the ground is covered in frozen, rusting bodies.`)
    let choice = Number(prompt(`A winged figure lands on the craft, it doesn't seem to notice you. You could run (1) or find somewhere to hide (2)`))
    if(choice = 0) {}
}

function mountains() {
    alert(`You head to the mountain range. The towering stone plate rises high into the sky, `)
}

if(time == 0.5) {
    time = time + 0.5
    alert(`Its very early into the night, the moons have just risen above the eastern horizon.`)
} else if(time == 1.5) {
    time = time + 0.5
    alert(`Its early into the night, the moons hover just above the eastern horizon.`)
} else if(time == 2.5) {
    time = time + 0.5
    alert(`Its just before midnight, the moons hang overhead.`)
} else if(time == 3.5) {
    time = time + 0.5
    alert(`Its midnight, the moons hang directly above you in the sky.`)
} else if(time == 4.5) {
    time = time + 0.5
    alert(`Its just after midnight, the moons hang nearly overhead.`)
} else if(time == 5.5) {
    time = time + 0.
    alert(`Its late into the night, the moons hang over the western horizon. You should find shelter before the morning.`)
} else if(time == 6.5) {
    time = time + 0.5
    alert(`Its very late into the night, the moons hang just above the western horizon. You should find shelter immediately.`)
} else if(time > 7, cover == false) {
    alert(`The sun comes up over the horizon, its sickly yellow glare burning your skin. The smell of burning metal perforates the air around you as you are involitarily incinerated.`)
    start_choice()
    time = 0
} else if(time > 14, cover == true) {
    alert(`The sun comes up over the horizon, its sickly yellow glare casting an orange hue over the outside world. Your hiding place protects you from it. Nothing will come after you in the day, but you won't be able to go anywhere either.`)
    loop = loop + 1
    time = 0
}

if(panic > 7) {
    alert(``)
}