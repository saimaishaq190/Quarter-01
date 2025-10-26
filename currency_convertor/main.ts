

import inquirer from "inquirer";

let currencies:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR:74.57,
    PKR:280,
    JPY : 0.00065
}


let user_answer = await inquirer.prompt([{
    name:"from",
    message:"From which currency would you like to convert?",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR",]
},
{
    name:"to",
    message:"To which currency would you like to convert?",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR",]   
},
{
    name:"amount",
    message:"What is the amount you would like to convert?",
    type:"number"
}    
])

let fromAmount = currencies[user_answer.from]
let toAmount = currencies[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convert = baseAmount * toAmount
console.log(user_answer.from,amount, "is equivalent to" , user_answer.to,convert.toFixed(2));
console.log( );
