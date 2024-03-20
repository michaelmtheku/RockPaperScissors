function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    const MESSAGE_DRAW = "Yay...draw!";
    const MESSAGE_PAPER_ROCK = "Paper wraps and beats rock!";
    const MESSAGE_ROCK_SCISSORS = "Rock smashes scissors!";
    const MESSAGE_SCISSORS_PAPER = "Scissors cut paper!";
    const art = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText= "Round " + match;
    art.appendChild(h3);
    
    switch(player){
        case "ROCK":
            switch(computer){
                case "ROCK":
                    p.innerText= MESSAGE_DRAW;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "draw";
                case "PAPER":
                    p.innerText= MESSAGE_PAPER_ROCK;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "computer";
                case "SCISSORS":
                    p.innerText= MESSAGE_ROCK_SCISSORS;
                    art.appendChild(p);
                    div.appendChild(art)
                    return "player";
            }
            break
        case "PAPER":
            switch(computer){
                case "ROCK":
                    p.innerText= MESSAGE_PAPER_ROCK;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "player";
                case "PAPER":
                    p.innerText= MESSAGE_DRAW;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "draw";
                case "SCISSORS":
                    p.innerText = MESSAGE_SCISSORS_PAPER;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "computer";
            }
            break
        case "SCISSORS":
            switch(computer){
                case "ROCK":
                    p.innerText = MESSAGE_ROCK_SCISSORS;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "computer"
                case "PAPER":
                    p.innerText = MESSAGE_SCISSORS_PAPER;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "player";
                case "SCISSORS":
                    p.innerText= MESSAGE_DRAW;
                    art.appendChild(p);
                    div.appendChild(art);
                    return "draw";
            }
            break
    }
  }

function game(playerSelection){
        const pPlay = document.createElement("p");
        const p = document.createElement("p");
        const computerSelection = getComputerChoice();

        pPlay.innerText = "Player plays " +playerSelection +"; Computer plays " + computerSelection;
        
        roundWin = playRound(playerSelection,computerSelection);
        const art = div.lastChild;
        art.appendChild(pPlay);
        
        if( roundWin == "player"){
            playerWin++;
            p.innerText = "You win round " + match +"!";
        }else if( roundWin == "computer"){
            computerWin++;
            p.innerText = "Computer wins round " + match +"!";
        }else if(roundWin == "draw"){
            p.innerText = "No winner in round " + match +"!";
        } else{
            p.innerText = "That's not a valid choice. Try again!";      
        }
        match++;
        art.appendChild(p)
        div.appendChild(art);
}

function summaryGame(playerWin, computerWin){

    const art = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const pPlayer = document.createElement("p");
    const pComputer = document.createElement("p");
    
    if(computerWin == 5 || playerWin == 5){
        h3.innerText= "Final results";
        art.appendChild(h3);

        pPlayer.innerText = "Total wins for player: " + playerWin;
        pComputer.innerText = "Total wins for computer: " + computerWin;
           
        if(playerWin > computerWin ){
            p.innerText = "You are the overall winner";
        }else if(playerWin < computerWin ){
            p.innerText = "The computer is the overal winner";
        } else{
            p.innerText = "You've drawn...No winner this time!";
        }
        
    
        playerSelection.removeEventListener("click",selection);
        btns = document.querySelectorAll('button');
        btns.forEach(btn => {
            btn.disabled = true;
        });

        restarBtn = document.createElement("button");
        restarBtn.innerText = "Restart game";
        playerSelection.appendChild(restarBtn);
        restarBtn.focus({focusVisible: true });
        restarBtn.addEventListener("click",refreshPage);
        
    }else{
        h3.innerText= "Running Score";
        art.appendChild(h3);
        pPlayer.innerText = "Score for player: " + playerWin;
        pComputer.innerText = "Score for computer: " + computerWin;

    }
    art.appendChild(pPlayer);
    art.appendChild(pComputer);
    art.appendChild(p);
    div.appendChild(art);
  
}

function selection(event){
    let player = event.target.dataset.option
    if(player != undefined){
        game(player);
        summaryGame(playerWin, computerWin);
    }
    
}

function refreshPage(){
    window.location.reload();
} 

let match = 1;
let playerWin = 0;
let computerWin = 0;
let roundWin;
const playerSelection = document.querySelector(".button-bar");
const div = document.getElementById("result");

playerSelection.addEventListener("click",selection);