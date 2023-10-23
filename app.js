//get player score
let score1 = document.getElementById('score-1')
let score0 = document.getElementById('score-0')



//Hold btn
let holdBtn = document.getElementById('btn-hold')

//curren scores
let current0 = document.getElementById("current-0")
let current1 = document.getElementById("current-1")
//dice img
let dice = document.getElementById('dice')

let rollDice = document.getElementById('btn-roll')

//NEW GAME
let btnNew = document.getElementById('btn-new')

//PLAYER NAMES
let name0 = document.getElementById('name-0')
let name1 = document.getElementById('name-1')




//initialise the value of the scores
score1.textContent = 0
score0.textContent = 0

///current score at the start of the gamr
current0.textContent = 0
current1.textContent = 0

dice.classList.add("hidden")
let activePlayer = 0
let scores = [0,0]

// scores[activePlayer]

let current = 0



const switchPlayer = function(
){
    // set currentb score or active player to 0
    current = 0;
    document.getElementById(`current-${activePlayer}`).textContent = current;

    //removing the active class from active player (toggle)
    document.getElementById("player-0-panel").classList.toggle('active')
    document.getElementById("player-1-panel").classList.toggle('active')

    ///change active player
    activePlayer = (activePlayer === 0)? 1: 0
}


rollDice.addEventListener('click', function(){
    //generate rndo numbr
  let dicenumbr =  Math.trunc( Math.random()*6)+1

  //set ir to the crrnt score value
  
  //
  //chnage dice igm to the current dice rolled
  dice.classList.remove("hidden")
  dice.src = `images/Dice-${dicenumbr}.png`;
  
  //if the numr is not 1 then add it to active current player score
  if(dicenumbr != 1){
   
    current += dicenumbr

    // dynamically set the active players current score

    document.getElementById(`current-${activePlayer}`).textContent = current;
    // current0.textContent = current
  }else{
    switchPlayer()

  }


})



holdBtn.addEventListener('click', function(){
   
    //upating global score of active player
    scores[activePlayer] += current

    ///displaying the updated to the ui
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]

    // document.getElementById('score-0').textContent = 

   //change current scor eto 0
    // current = 0/////@@@@@@@@@@@@@@@@@@@@@@@@
    // document.getElementById(`current-${activePlayer}`).textContent = current; /////@@@@@@@@@@@@@@@@@

   if(scores[activePlayer] >= 20){

       
       
       ///CHANGE TEXTN OF PLAYER TO WON
       document.getElementById(`player-${activePlayer}-panel`).classList.add("winner")
       document.getElementById(`player-${activePlayer}-panel`).classList.remove("active")

       document.getElementById(`name-${activePlayer}`).textContent = "WINNER!!!"
       
       //SET ACTIVE PLAYET TO  PLAYER 0
       activePlayer = 0

       ///DISABLE ROLL DICE BTN
       document.querySelector(".btn-roll").classList.add("hidden")
       
       //DISABLE HOLD BTN 
       holdBtn.classList.add("hidden")

       ///hie dice
       dice.classList.add('hidden')
   }else{

        switchPlayer()

   }


})




btnNew.addEventListener("click", function(){

    ///display holdbtn

    holdBtn.classList.remove("hidden")

    current0.textContent = 0
    current1.textContent = 0

    //initialise the value of the scores
    score1.textContent = 0
    score0.textContent = 0

    
    //
    name0.textContent = "Player 1"
    name1.textContent = "Player 2"
    
    ///display rollbtn
    document.querySelector(".btn-roll").classList.remove("hidden")
    
    document.getElementById('player-0-panel').classList.remove("winner")
    document.getElementById('player-1-panel').classList.remove("winner")
    
    document.getElementById(`player-0-panel`).classList.add("active")
    document.getElementById(`player-1-panel`).classList.remove("active")

    holdBtn.classList.remove("hidden")

    
    dice.classList.remove('hidden')

     activePlayer = 0
     scores = [0,0]
     current = 0

   
    
})








 