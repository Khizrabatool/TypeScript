//import { log } from "console";
import inquirer from "inquirer";
//import { resourceLimits } from "worker_threads";
import { resourceLimits } from "worker_threads";
const answer : {
    numberOne: number,
    numberTwo: number,
    operator: string

}= await inquirer.prompt ([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly eneter your first no:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly eneter your second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*","+","-","/"],
        message: "Select Operator: "
    },
])

const {numberOne, numberTwo, operator}= answer;
if (numberOne && numberTwo && operator) {
    let result: number=0;
    if (operator == "+") {
        result=numberOne + numberTwo
    } 
    else if (operator == '-') 
        {
        result=numberOne - numberTwo
        }
        if (operator =='/') 
        {
                result=numberOne / numberTwo
        } 
        if (operator =='*') 
        {
                result=numberOne*numberTwo
        }
    console.log('Your result is', result)
    }
    
    else {
        console.log("Kindly enter valid input")
}
