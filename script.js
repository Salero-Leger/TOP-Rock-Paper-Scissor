let userChoice;
let computerChoice = generateComputerchoice();
let keepAsking = true;

while(keepAsking){
    alert("Welcome to Rock, Paper or Scissor GAME!!!!");
    userChoice = prompt('Enter the word "Paper","Rock" or "Scissor, To start playing"')
    userChoice = userChoice.toLowerCase();
    if((userChoice === "paper" || userChoice === "rock") || userChoice === "scissor"){
        rockPaperScissor(userChoice, computerChoice);
        keepAsking = askToPlayAgain();
        
    }else{
        keepAsking = true;
        alert("It looks your enter a wrong input, try again :(")
    }
}


    function generateComputerchoice(){
        let computerNumberChoice;
        let computerChoice;
        computerNumberChoice = Math.floor(Math.random() * 3);
        
        switch(computerNumberChoice){
            case 0:
                computerChoice = "rock"
                break;
            case 1:
                computerChoice = "paper"
                break;
            case 2:
                computerChoice = "scissor"
                break
        }
        return computerChoice;
    }

    function rockPaperScissor(userChoice,computerChoice){
        if(userChoice === computerChoice){
            alert("OMG We have a tie")
        }else if((userChoice === "rock" && computerChoice === "scissor") 
            || (userChoice === "paper" && computerChoice === "rock")
            || (userChoice === "scissor" && computerChoice === "paper")){
            alert("You won")
        }else if((userChoice === "rock" && computerChoice === "paper") 
            || (userChoice === "paper" && computerChoice === "scissor")
            || (userChoice === "scissor" && computerChoice === "rock")){
            alert("You lost")
        }

    }

    function askToPlayAgain(){
        let keepPlaying = (prompt("Do you want to play again?  Yes:No?").toLowerCase() === "yes") ? true : false;
        return keepPlaying;
    }

//PseudoCode - I made some change in my code:
//Group #1 - getting input
    //Initialize variable name userChoice 
    //Initialize variable name isValid 
    //Start a loop until isValid it's not equal true
    //Display a Greeting for my user preseting the game Rock, paper or Scissor 
    //Ask user for prompting his choice with "Enter the word "Paper","Rock","Scissor": 
    //Assign to userChoice the value received from user's prompt.
    //convert userChoice to all lowerCases 


//Group #2 - Process a valid data
    //if typeof of userChoise is string:
        //Then:
        //if userChoise is equal string "paper" and equal "rock" and equal "scissor"
            //Then isValid is true and run rockPaperScissor(userChoise);
        //Else
            //Then isValid is false
    //else 
        //Then isValid is false

//Group #3 - Creating Rock Paper Scissor Logic
//Create rockPaperScissor() with userChoice parameter
//Inside rockPaperScissor()
    //initialize a variable name computerNumberChoice
    //initialize a variable name computerChoice
    //Generate a random number 0 to 3
    //assign to computerNumberChoice
    //Create a switch case evaluating computerNumberChoice
    //Case 0:
            //Assign computerChoice the string "rock"
    //Case 1:
            //Assign computerChoice the string "paper"
    //Case 2:
            //Assign computerChoice the string "scissor"
    //no default case because we expected only those numbers
    //Evaluate if userChoice is equal to  computerChoise value
    //Then display "OMG We have a tie "
    //else if userChoice is equal string "rock" and computerChoise is equal string "scissor" 
        //Then display "You won"
    //else if userChoice is equal string "rock" and computerChoise is equal string "paper" 
        //Then display "You Lost"
    //else if userChoice is equal string "paper" and computerChoise is equal string "rock" 
        //Then display "You Won"
    //else if userChoice is equal string "paper" and computerChoise is equal string "scissor" 
        //Then display "You lost"
    //else if userChoise is equal computerChoisestring "scissor" and computerChoise is equal string "paper"
        //The display "You win"
    //else if userChoice is equal string "scissor" and computerChoise is equal string "rock" 
        //Then display "You lost"




    