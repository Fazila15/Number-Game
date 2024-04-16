import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
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
