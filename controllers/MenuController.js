const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){

        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Get today's date",
                    "Remind me",
                    "Exit"
                ]
            }
        ];

        this.contacts = [];
    }

    main(){
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                case "Get today's date":
                    this.getDate();
                    break;
                case "Remind me":
                    this.remindMe();
                    break;
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    clear(){
        console.log("\x1Bc");
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }

    getDate(){
        this.clear();
        var today = new Date();
        console.log(today);
        this.main();
    }

    getContactCount(){
        return this.contacts.length;
    }

    remindMe(){
        const reminder = "Learning is a life-long pursuit";
        console.log("\x1Bc");
        console.log(reminder);
        this.main();
        return(reminder);
    }

    exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

}