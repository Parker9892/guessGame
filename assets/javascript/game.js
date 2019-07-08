
   let winsText = document.querySelector('#winsText')
   let lossesText = document.querySelector('#lossesText')
   let guessesWrongText = document.querySelector('#guessesWrongText')
   let guessesText = document.querySelector('#remainingGuessesText')

  let wins = 0
  let losses = 0
  let guessesRemaining = 9
  let userInput = []

  function restart() {
      guessesRemaining = 9
      userInput = []
      
  }

document.onkeydown = function(event){
   let userGuess = event.key
   let arr = ['a','f','d','c','g','h','v','y','n']
   let computerGuess = arr[Math.floor(Math.random() * arr.length)];
   console.log(computerGuess)


   
   if(userGuess == computerGuess){
       wins++
   }
   else if(userGuess != computerGuess ){
       guessesRemaining--
       userInput.push(userGuess)

       if(guessesRemaining === 0){
           losses++
           restart()
       }
   }


 


   winsText.textContent =  `Total Wins ${wins}`        
   lossesText.textContent = `Total Losses ${losses}`
   guessesText.textContent = `Guesses Remaining ${guessesRemaining}`
   guessesWrongText.textContent = `User Input ${userInput}`


   
}
