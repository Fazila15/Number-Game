#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let condition = true;
while (condition) {
    let userNumber = await inquirer.prompt({
        name: "userGuessed",
        message: "Guess a number: ",
        type: "number",
    });
    if (userNumber.userGuessed === randomNumber) {
        console.log("Congrats!!! You Guessed Right Number.");
    }
    else
        ([
            console.log(`Sorry Better Luck Next Time
    The number was: ${randomNumber}`)
        ]);
    let usrAnswer = await inquirer.prompt({
        name: "replay",
        type: "confirm",
        message: "Do you want to play again??",
        default: "true",
    });
    condition = usrAnswer.replay;
}
;
