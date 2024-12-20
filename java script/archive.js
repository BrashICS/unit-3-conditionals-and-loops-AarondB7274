// this is the origional text-based game code, I am working on reworking it to use html outputs and inputs

let panic = 0
let time = 0
let day = 0
let cover = false

function menu() {
    alert(`Welcome to a slightly spooky (and *really* mentaly ill) little game! I've put a lot of work into this, so I hope you enjoy!`)
    let choice = +prompt(`
        (1) - Start
        (2) - Settings
        (3) - DLC & Updates
        (4) - Exit`)
    if(choice == 1) {
        start_game()
    } else if(choice == 2) {
        settings()
    } else if(choice == 3) {
        extra_content()
    } else if(choice == 4) {
        exit()
    }
}

function start_game() {
    let choice = prompt(`Do you want to:
        (1) - Start a new game
        (2) - Load a saved game`)
    if(choice == 1) {
        alert(`Starting a new game!`)
        new_game()
    } else if(choice == 2) {
        alert(`Loading your saved games!`)
        load_game()
    }
}

function new_game() {
    let choice = prompt(`What difficulty do you want to play on?
        (1) - Merciful
        (2) - Standard
        (3) - Painful`)
    if(choice == 1) {
        let difficulty_modifier = 0.5
    } else if(choice == 2) {
        let difficulty_modifier = 1
    } else if(choice == 3 ) {
        let difficulty_modifier = 2
    } else {
        alert(`That isn't a difficulty.`)
        start_game()
        return
    }
    time = 0
    panic = 0
    loop = 0
    alert(`You wake up in a familiar feild, only you don't seem to remember being here before. There's a pine forest to the east, a frozen sea to the south, a ruined city to the west and a grand mountian range to the north. It's just after sundown, the silver moons hang above the horizon and the icy wind whips around you as snow drifts down from the sky.`)
    start_choice()
    return time, loop, panic
}

function load_game() {
    alert(`Saved games coming soon!`)
    start_game()
}

function extra_content() {
    alert(`All up to date! Not that I know how to check that, or even update this!`)
    menu()
}

function start_choice() {
    time = 0
    cover = false
    if(panic > 0) {
        panic = panic - 1
    }
    let choice = Number(prompt(`Where do you want to go:
        (1) The forest,
        (2) The sea,
        (3) The ruins
        (4) Or exit?`))
    if(choice == 1) {
        forest()
        return
        } else if(choice == 2) {
        sea()
        return
        } else if(choice == 3) {
        ruins()
        return
        } else if(choice == 4) {
        exit()
        return
        } else {
            alert (`That wasn't one of the options. You can't plot-armor your way out of this one.`)
            start_choice()
        }
    return time, cover, panic
}

function forest() {
    alert(`You head to the forest. The trees and undergrowth are blanketed in a thick layer of snow. Its all quite and you venture farther in, the snow crunching beneath your feet. After a while you hear erie giggling and sounds of struggle in the distance.`)
    let second_choice = Number(prompt(`Do you want to:
        (1) Stand your ground,
        (2) Hide
        (3) Or run?`))
    if (second_choice == 1) {
        forest_stand()
        return
    } else if (second_choice == 2) {
        forest_hide()
        return
    } else if (second_choice == 3) {
        forest_run()
        return
    } else {
        alert(`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        forest()
        return
    }
    return time
}

function forest_stand() {
        alert(`You stand your ground. The noises continue for quite some time, often punctuated with screams. A winged figure is launched above the canopy in the distance, and the forest goes silent as another follows.`)
        forest_second()
        time += 0.5
        panic += 0.5
        return time, panic
}

function forest_hide() {
        panic = 0
        if(time < 8)alert(`You hide in the undergrowth. The noises continue for quite some time, often punctuated with screams. The forest soon goes silent but you stay hidden longer out of fear, when you come out the moons have falled behind the trees.`)
        forest_second()
        time += 1.5
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
    alert(`You stand in the forest, the snow faintly lit purple from the glow of your eyes.`)
    let choice = Number(prompt(`Do you want to:
        (1) Venture deeper into the forest
        (2) Or go back?`))
    if(choice == 1) {
        forest_continue()
        return
    } else if(choice == 2) {
        leave()
        return
    } else {
        alert(`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        forest_second()
        return
    }
}

function sea() {
    alert(`You head to the seaside. The ice is perfectly smooth, a glassy mirror reflecting the moons from above. The shore is blanketed in snow, bordering the blue sea in white. It's calm here, a pair of winged figures dance in the sky over the frozen waters.`)
    let second_choice = Number(prompt(`Do you want to:
        (1) Stare out across the ice,
        (2) Watch the figures
        (3) Or leave?`))
    if(second_choice == 1) {
        sea_stare()
        return
    } else if(second_choice == 2) {
        sea_watch()
        return
    } else if(second_choice == 3) {
        leave()
        return
    } else {
        alert(`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        sea()
        return
    }
    time = time + 0
    return time
}

function sea_stare() {
    alert(`You stare out across the frozen sea. You stay for quite some time, when you rise the figures have gone and the moons have gone below the horizon.`)
    sea_second()
    time += 1.5
    if(panic > 1) {
        panic -= 2
    } else if(panic > 0) {
        panic-- 
    }
    return time, panic
}

function sea_watch() {
    alert(`You watch the figures frolic in the sky. They zip around the clouds, decending with incredible speed before ascending again.`)
    sea_second()
    time += 0.5
    if(panic > 0) {
        panic--
    }
    return time
}

function leave() {
    alert(`There wasn't anything that intrested you here anyways. You head back to the feild where you woke up.`)
    start_choice()
    time += 0.5
    return time
}

function sea_second() {
    let choice = Number(prompt(`Do you want to:
    (1) wait here longer
    (2) Or go return to the feild?`))
    if(choice == 1) {
        sea_wait()
        return
    } else if(choice == 2) {
        sea_leave()
        return
    } else {
        alert(`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        forest()
        return
    }
    return time
}

function sea_wait() {
    alert(`You stare you over the frozen waters. Its surface is perfectly smooth and still, not even a wave, frozen in time to be seen.`)
    time += 0.5
    return time
}

function ruins() {
    alert(`You head towards the ruined city. The crumbling buildings tower overhead, their windows strewn about as fragments of glass. Broken rebar jut out from the ends of snapped skyscrapers. A head crunches beneath your feet, the message "FATAL ERROR" displayed beneath its glass face. A spire made of...something, rises in the distance.`)
    let choice = Number(prompt(`Do you want to:
        (1) Explore the city,
        (2) Or towards the spire
        (3) Or leave?`))
    if(choice == 1) {
        ruins_explore()
        return
    } else if(choice == 2) {
        ruins_spire()
        return
    } else if(choice == 3) {
        leave()
        return
    } else {
        alert (`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        ruins()
        return
    }
}

function ruins_explore() {
    alert(`You search the dilapidated skyscrapers and desolate streets.`)
}

function ruins_spire() {
    alert(`You go towards the spire. Upon closer inspection the jagged, impractical sructure is made of...corpses. Theres a sort of archway in the side of the structure.`)
    let choice = Number(prompt(`Do you want to:
        (1) Enter the spire
        (2) Or leave the area?`))
    if(choice == 1) {
        ruins_spire_enter()
        return
    } else if(choice == 2) {
        ruins()
        return
    }
}

function ruins_spire_enter() {
    cover = true
    alert(`You enter the corpse-spire. There's a damaged landing craft in the center, the ground is covered in frozen, rusting bodies.A winged figure lands on the craft, it doesn't seem to notice you.`)
    let choice = Number(prompt(`Do you want to:
        (1) Run
        (2) Or find somewhere to hide?`))
    if(choice == 1) {
        //stuff
    } else if(choice == 2) {
        //stuff
    } else if(choice == null || choice != 1 & choice != 2) {
        alert(`That wasn't one of the options. You can't plot-armor your way out of this one.`)
        ruins_spire_enter()
    }
}

function exit() {
    alert(`Have a great day (or night)! Don't die out there!`)
    return
}

if(time == 0.5) {
    time += 0.5
    alert(`Its very early into the night, the moons have just risen above the eastern horizon.`)
} else if(time == 1) {
    time += 0.5
    alert(`Its early into the night, the moons hover just above the eastern horizon.`)
} else if(time == 2) {
    time += 0.5
    alert(`Its just before midnight, the moons hang overhead.`)
} else if(time == 3) {
    time += 0.5
    alert(`Its midnight, the moons hang directly above you in the sky.`)
} else if(time == 4) {
    time += 0.5
    alert(`Its just after midnight, the moons hang nearly overhead.`)
} else if(time == 5) {
    time += 0.5
    alert(`Its late into the night, the moons hang over the western horizon. You should find shelter before the morning.`)
} else if(time == 6) {
    time += 0.5
    alert(`Its very late into the night, the moons hang just above the western horizon. You should find shelter immediately.`)
} else if(time > 7 && cover == false) {
    alert(`The sun comes up over the horizon, its sickly yellow glare burning your skin. The smell of burning metal perforates the air around you as you are involitarily incinerated.`)
    start_choice()
    time = 0
} else if(time > 7 && cover == true) {
    alert(`The sun comes up over the horizon, its sickly yellow glare casting an orange hue over the outside world. Your hiding place protects you from it. Nothing will come after you in the day, but you won't be able to go anywhere either.`)
    day++
    time = 0
}

if(panic == 0.5) {
    panic += 0.5
} else if(panic == 1.5) {
    panic += 0.5
} else if(panic == 2.5) {
    panic += 0.5
} else if(panic == 3.5) {
    panic += 0.5
} else if(panic == 4.5) {
    panic += 0.5
} else if(panic == 5.5) {
    panic += 0.5
} else if(panic == 6.5) {
    panic += 0.5
    alert(`You colapse into the snow, a high temperature warning blaring from your eyes as you gasp and struggle to your feet. You should find somewhere to relax ASAP.`)
} else if(panic > 7) {
    alert(`You colapse into the snow, your limbs moving of their own accord, dragging you to a secluded place. Before long your steel chasis sprouts a pair of tattered wings and you soon  have a body count in the double digits.`)
    panic = 0
    start_choice()
}