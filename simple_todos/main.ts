#! /usr/bin/env node


import inquirer from "inquirer";

import chalk from "chalk";

let todos: string[] = [];

console.log(chalk.bold.blackBright.yellow("\n \t WELCOME  TO  MY  TODO  LIST \n \t"));

let condition = true;

while (condition) {
  let operation = await inquirer.prompt([

    {
      name: "operator",
      type: "list",
      message: chalk.bgBlue("Which operation do you want to perform?"),
      choices: ["AddTodo", "ReadTodo", "DeleteTodo", "Exit"]
    },
  ]);

  if (operation.operator === "AddTodo") {

    let add = await inquirer.prompt([

      {
        name: "additem",
        type: "input",
        message: chalk.redBright("What do you want to add in your todos?"),
      },

    ]);

    if (!add.additem) {
      console.log(chalk.greenBright("Please add something to your list!"));
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
    let deletetodo = await inquirer.prompt([

      {
        name: "Deleteitem",
        type: "list",
        message: chalk.blueBright("What do you want to delete in your Todo?"),
        choices: todos,
      },

    ]);
    todos = todos.filter((item) => item !== deletetodo.Deleteitem); 
    console.log(chalk.green("Item deleted successfully!"));
  }
   else if (operation.operator === "Exit") {
    console.log(
      chalk.bold.blackBright.yellow("\t\nThanks for visiting my TODO List\t\n")
    );
    break;
  }
   else {
    console.log(chalk.redBright("Please select a valid operation!"));
  }
};
