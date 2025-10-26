"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const inquirer_1 = __importDefault(require("inquirer"));
const res = await inquirer_1.default.prompt({
    type: "number",
    name: "userInput",
    message: "Enter amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "second must within 60";
        }
        else
            return true;
    }
});
let input = res.userInput;
function startTime(va1) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + va1);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = (0, date_fns_1.differenceInSeconds)(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('Time has expired');
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} :${sec.toString().padStart(2, "0")}}`);
    }, 1000);
}
startTime(input);
