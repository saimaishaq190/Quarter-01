
import inquirer from "inquirer";

let myBalance = 20000;
let myPin =4488;

const pinAnswer =await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter your pin",
    },
]);
if(pinAnswer.pin === myPin) {
    console.log("your pin is correct!!!");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "cash option","check balance"],


        },
]);
if(operationAnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter your amount",

        },
 ]);
 myBalance -=amountAns.amount;
 if(amountAns.amount> myBalance){
    console.log("Insufficient Balance");

 }else { 
    console.log(`your remaining balancing is ${myBalance}`);
}
} else if (operationAnswer.operation === "check balance") {
    console.log (`your current Balance is ${myBalance}`);

} else if (operationAnswer.operation === "cash option") {
    let cashoptions = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "select the payment",
            choices: [10000,20000,40000,60000],
},
    ]);
    myBalance -=cashoptions.options;
    console.log(`your remaining balance is ${myBalance}`);
}
} else {
    console.log("wrong pin");
}
