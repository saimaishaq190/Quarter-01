#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todos = [];
console.log(chalk_1.default.bold.blackBright.yellow("\n \t WELCOME  TO  MY  TODO  LIST \n \t"));
let condition = true;
while (condition) {
    let operation = await inquirer_1.default.prompt([
        {
            name: "operator",
            type: "list",
            message: chalk_1.default.bgBlue("Which operation do you want to perform?"),
            choices: ["AddTodo", "ReadTodo", "DeleteTodo", "Exit"]
        },
    ]);
    if (operation.operator === "AddTodo") {
        let add = await inquirer_1.default.prompt([
            {
                name: "additem",
                type: "input",
                message: chalk_1.default.redBright("What do you want to add in your todos?"),
            },
        ]);
        if (!add.additem) {
            console.log(chalk_1.default.greenBright("Please add something to your list!"));
        }
        else {
            todos.push(add.additem);
            console.log(todos);
        }
    }
    else if (operation.operator === "ReadTodo") {
        todos.forEach((item) => console.log(item));
    }
    else if (operation.operator === "DeleteTodo") {
        let deletetodo = await inquirer_1.default.prompt([
            {
                name: "Deleteitem",
                type: "list",
                message: chalk_1.default.blueBright("What do you want to delete in your Todo?"),
                choices: todos,
            },
        ]);
        todos = todos.filter((item) => item !== deletetodo.Deleteitem);
        console.log(chalk_1.default.green("Item deleted successfully!"));
    }
    else if (operation.operator === "Exit") {
        console.log(chalk_1.default.bold.blackBright.yellow("\t\nThanks for visiting my TODO List\t\n"));
        break;
    }
    else {
        console.log(chalk_1.default.redBright("Please select a valid operation!"));
    }
}
;
