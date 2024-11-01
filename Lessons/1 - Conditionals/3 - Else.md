# Unit 3 - Conditionals and Loops

## 3.3 - Else

##### ICS3 - Mr. Brash 🐿️

<table>
<tr>
<th>3.3 - In this Lesson:</th>
<th>Unit 3 - Conditionals & Loops</th>
</tr>
<tr>
<td td valign="top" style="height: 100px;padding-right:50px">

- [The `Else` Statement](#lesson)
- [Examples](#examples)
- [A Note about `prompt()`](#a-note-about-prompt)
- [Practice Time!](#practice-time)
    - [Part 1 - ???](#part-1)
    - [Part 2 - ???](#part-2)
    
</td>
<td td valign="top" style="height: 100px;padding-right:50px">

- [README](../../README.md)
- [3.1 - If](./1%20-%20IF.md)
- [3.2 - Else-If](./2%20-%20Else-If.md)
- [3.3 - Else](./3%20-%20Else.md)
- [3.4 - While](../2%20-%20Loops/4%20-%20While.md)
- [3.5 - Do...While](../2%20-%20Loops/5%20-%20Do-While.md)
- [3.6 - For](../2%20-%20Loops/6%20-%20For.md)

</td></tr></table>

Here's the scenario: 
> You ask the user to select from a menu by entering a _number_ between 1 and 5.  
They don't select from the proper range or they enter a _word_. Perhaps they don't enter anything at all and just click OK.

❓ How would you handle that in code? 

---

### Lesson:

> **Recall:** An if-statement can only have _one_ `if` but several optional `else if` pieces.

So far, we know how to handle the _correct_ responses:

<table>
<tr>
<td width="60%">

```JS
if (selection == 1) {
    // Code here
} else if (selection == 2) {
    // Code here
} else if (selection == 3) {
    // Code here
}
```

</td>

<td>

**But what about all the other possibilities?**
</td>
</tr>
</table>

In the event that the `if` and `else if` statements do not find a true evaluation, `else` can handle _all other possibilities_. It's like saying "otherwise". **Note:** there can be only _one_ `else` and it needs to be at the end.


```JS
if (selection == 1) {
    // Code here
} else if (selection == 2) {
    // Code here
} else if (selection == 3) {
    // Code here
} else {
    alert("Invalid selection/input.");
}
```

This completes the `if-statement` package, creating a powerful tool!

---

### Examples

1. You need a given value to be even and positive _or_ below zero:
```JS
if ((value > 0) && (value % 2 == 0)) {
    return Math.sqrt(value);
} else if (value < 0) {
    return "Cannot take the square-root of a negative";
} else {
    return `${value} is neither even nor positive`;
}
```

2. You have a guessing game and the user needs to guess between 1 and 6:
```JS
// Is the input valid?
if (user_guess >= 1 && user_guess <= 6) {
    // The input is valid, check their guess
    if (user_guess == hidden_number) {
        alert("Correct! Congratulations!");
    } else {
        alert("Sorry, guess again.");
    }
} else {
    alert("Error. The guess has to be from 1-6.");
}
```

Do you understand the example above? Remember - `else if` is _optional_. 

---

### A Note About `prompt()`

> Ever wonder what happens if the user clicks "Cancel" on a prompt?

It actually returns `null`.

```JS
let menu_selection = prompt("Select 1 for Play...");

if (menu_selection == null) {
    // Deal with the user having clicked "Cancel"
}
```

---

### Practice Time!

#### Part 1




#### Part 2