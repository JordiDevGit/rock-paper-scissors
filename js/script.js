        function getComputerChoice(){
            let random = Math.random();

            if (random > 0 && random <= 0.3){
                return "rock";
            }else if(random > 0.3 && random <= 0.6){
                return "paper";
            }else{
                return "scissors";
            }
        }

        function getHumanChoice(){
            let choice = selection;
            const rock = "rock";
            const paper = "paper";
            const scissors  = "scissors";

            if(choice.toLowerCase().localeCompare(rock) !== 0 &&
             choice.toLowerCase().localeCompare(paper) !== 0 &&
             choice.toLowerCase().localeCompare(scissors) !== 0){
                return "Wrong choice!"
            }else{
                return choice.toLowerCase();
            };
            
        }

        function playRound(humanSelection, computerSelection){
            let winner = "";

            if ((humanSelection === "rock" && computerSelection === "paper") 
            || (humanSelection === "paper" && computerSelection === "scissors")
            || (humanSelection === "scissors" && computerSelection === "rock") ){
                winner = "computer";
            } else if (humanSelection === computerSelection){
                return "It's a draw, repeat the round.";
            }else{
                winner = "human";
            }
            return winner;
        }

        function playGame(){
            let human, computer = 0;
            let who = "";
            let humanSelection, computerSelection;

            for(let i = 0; i < 5; i++){
                humanSelection = getHumanChoice();
                computerSelection = getComputerChoice();
                who = playRound(humanSelection, computerSelection);
                console.log(who);
                if (who.localeCompare("computer") === 0){
                    computer++;
                }else if (who.localeCompare("human") === 0){
                    human++;
                }
            }
            if(computer > human){
                return "Computer wins!";
            }else if (human > computer){
                return "Human wins!";
            }else{
                return "No one wins the game";
            }
        }



const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
let selection = "";
let won = "";
let playerScore = 0;
let computerScore = 0;

let score = document.createElement("h3");
score.textContent =`Player: ${playerScore} - Computer: ${computerScore}`;

result.appendChild(score);

buttons.forEach(button => {
    button.addEventListener("click", e => {
    
        selection = button.textContent;
        won = playRound(getHumanChoice(), getComputerChoice());
        console.log("Winner: " + won);

        if(won === "human"){
            playerScore++;
        }else if (won === "computer"){
            computerScore++;
        }
            
        score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    });
});

