import inquirer from "inquirer";
import { differenceInSeconds } from 'date-fns';
import chalk from "chalk";
let userInput = await inquirer.prompt({
    type: 'number',
    name: 'userInput',
    message: chalk.bold('Enter time in Seconds: '),
    validate: (userInput) => {
        if (isNaN(userInput)) {
            return 'Please enter a valid number.';
        }
        else if (userInput > 60) {
            return 'Value must be less than or equal to 60';
        }
        else {
            return true;
        }
    },
});
function timer(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val + 2);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('**** Timer is end ****');
            process.exit();
        }
        const minute = Math.floor((timeDiff / (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(chalk.green(`${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`));
    }, 1000);
}
timer(userInput.userInput);
