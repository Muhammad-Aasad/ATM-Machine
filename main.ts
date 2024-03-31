#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234; //Pincode

let PinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
  },
]);

//  1234 === 1234
if (PinAnswer.pin === myPin) {
  console.log("Your pin is correct!!!");

  let operationsAns = await inquirer.prompt([
    {
      name: "operations",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operationsAns);

  if (operationsAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt(
    [
      {
      name: "amount",
      message: "enter your amount",
      type: "number",
      }
    ]
  );

  myBalance -= amountAns.amount;
  console.log("your remaning balance is " + myBalance )
  }
} else console.log("Incorrect pin number");
