"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 20000;
let myPin = 4488;
const pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("your pin is correct!!!");
    let operationAnswer = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "cash option", "check balance"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`your remaining balancing is ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your current Balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "cash option") {
        let cashoptions = await inquirer_1.default.prompt([
            {
                name: "option",
                type: "list",
                message: "select the payment",
                choices: [10000, 20000, 40000, 60000],
            },
        ]);
        myBalance -= cashoptions.options;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("wrong pin");
}
