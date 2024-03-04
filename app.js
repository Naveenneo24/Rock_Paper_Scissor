function gamerules() {
    // let rulesinfo1 = document.querySelector('.rulesinfo')
    // //let cross = document.getElementById('cross');
    // rulesinfo1.style.display='block';
    gamesrules()
}


function gamesrules(){
let rulesinfo = document.querySelector('.rulesinfo')
//let cross = document.getElementById('cross');
//rulesinfo.style.display='none';
if(rulesinfo.style.display==='block'){
    rulesinfo.style.display='none';
}else{
    rulesinfo.style.display='block';
}
}
   






let score1 = 0;
let score2 =0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#message");
const userscore = document.querySelector("#score1");
const compscore = document.querySelector("#score2")






const compchoice = () => {
    const options = ["rock", "paper", "scissor"]
     //rock, paper, scissors
     const randindex = Math.floor(Math.random()*3);
     return options[randindex];
};

const drawGame = () =>{
    console.log("game was draw")
    document.querySelector('.hand').style.display= 'none';
    document.querySelector('#tie').style.display = 'flex';


}

const showWinner = (userWin, userchoice, computerchoice) => {
    if(userWin) {
        score.score1++
        
        // document.querySelector('#score-1').innerText=score1;
        console.log("You win!");
      const  msg = `You win! your ${userchoice} beats ${computerchoice}`;
        console.log(msg)
        winstiuation();
       
    }else{
        score.score2++
        // document.querySelector('#score-2').innerText=score2;
        console.log("you lose")
       const msg = `You lose! ${computerchoice} beats your ${userchoice}`;
       console.log(msg)
        lostsitutaion();
    }
    updateScoreDisplay();
    saveScore();
    console.log(saveScore.data) 
}
function winstiuation() {
    document.querySelector('.hand').style.display= 'none';
    document.querySelector('#win').style.display ='flex';  
    document.querySelector('#next').style.display='block';

    
}

function lostsitutaion() {
    document.querySelector('.hand').style.display= 'none';
    document.querySelector('#lost').style.display ='flex';
}


//local storage 

let score={
    score1:localStorage.getItem('score1')?(localStorage.getItem('score1')):0,
    score2:localStorage.getItem('score2')?(localStorage.getItem('score2')):0
   
 }


  function updateScoreDisplay(){
    document.querySelector('#score-2').innerText=score.score2;
    document.querySelector('#score-1').innerText=score.score1;
  }
  updateScoreDisplay();


  function saveScore(){
    localStorage.setItem('score1',score.score1);
    localStorage.setItem('score2',score.score2);
  }
  



  
        

            


const playGame =(userchoice) => {
    console.log("user choice = ",userchoice);
    
    const computerchoice = compchoice();
    console.log("comp choice =", computerchoice)

    if(userchoice === computerchoice) {
        //when game is TIE
        drawGame();
    } else {
        let userwin =true;
        if(userchoice === "rock"){
           
           userwin = computerchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
           userwin = computerchoice === "scissor"? false : true;
        } else {
           userwin = computerchoice === "rock"? false : true;
        }
        showWinner(userwin, userchoice, computerchoice)
    }
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
         console.log("choice was clicked")  
         playGame(userchoice);
    })
})


function playAgain(){
    document.querySelector('.hand').style.display= 'block';
    document.querySelector('#tie').style.display='none';
    document.querySelector('#win').style.display='none';
    document.querySelector('#lost').style.display='none';
    document.querySelector('#next').style.display='none';
  }

  function openNextPage(){
    window.open('index2.html');
  }

  function hurrayPlayAgain(){
    window.open('index.html');
  }