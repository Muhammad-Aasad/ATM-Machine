#!/usr/bin/env node
import inquirer from "inquirer";
(async () => {
    let myBalance = 10000; // Dollar
    let myPin = 1234; // Pincode
    let PinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter Your Pin",
            type: "number",
        },
    ]);
    if (PinAnswer.pin === myPin) {
        let atmQuestions = await inquirer.prompt([
            {
                name: "accountType",
                message: "Select your account type",
                type: "list",
                choices: ["Current Account", "Saving Account"],
            },
            {
                name: "transactionMethod",
                message: "Please select an option",
                type: "list",
                choices: ["Cash Withdrawal", "Check Balance", "Fast Cash"],
            },
        ]);
        if (atmQuestions.transactionMethod === "Cash Withdrawal") {
            let cashWithdrawAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw",
                    type: "number",
                },
            ]);
            if (myBalance >= cashWithdrawAmount.amount) {
                myBalance -= cashWithdrawAmount.amount;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
        else if (atmQuestions.transactionMethod === "Fast Cash") {
            let fastCashAmount = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Select the amount you want to withdraw",
                    type: "list",
                    choices: ["1000", "3000", "5000"],
                },
            ]);
            if (myBalance >= parseInt(fastCashAmount.fastCash)) {
                myBalance -= parseInt(fastCashAmount.fastCash);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
        else {
            console.log(`Your total balance is: ${myBalance}`);
        }
    }
    else {
        console.log("Invalid PIN");
    }
})();
