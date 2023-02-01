const wordBank = ['monkey','pig' ,'house']

let choosenWord = ''
let lettersInWord = []
let numBlanks = 0
let blanksAndSuccesses = []
let wrongLetters = []
let rightGuessCounter = 0
let doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let time = 50
let life = 9



const button = document.getElementById('start-game')
const carOne = document.getElementById('car1')
const carTwo = document.getElementById('car2')
const carThree = document.getElementById('car3')
const carFour = document.getElementById('car4')
const carFive = document.getElementById('car5')
const carSix = document.getElementById('car6')

const lifeOne = document.getElementById('life1')
const lifeTwo = document.getElementById('life2')
const lifeThree = document.getElementById('life3')
const lifeFour = document.getElementById('life4')
const lifeFive = document.getElementById('life5')
const lifeSix = document.getElementById('life6')
const lifeSeven = document.getElementById('life7')
const lifeEight = document.getElementById('life8')
const lifeNine = document.getElementById('life9')

// blanksAndSuccesses = document.getElementById('wordToGuess')
// wrongLetters = document.getElementById('wrongGuesses')

// const popupWindow = document.getElementById('popup-window')


function startGame() {
    button.disabled = true
    choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    lettersInWord = choosenWord.split('')
    numBlanks = lettersInWord.length

    doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    letterGuessed = 0
	rightGuessCounter = 0
	wrongLetters = []
	blanksAndSuccesses = []
    time = 50
    life = 9

    
    for(let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_ ')
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ')
    }
    
    setInterval(function() {
        document.getElementById('time').innerHTML = time
        console.log(time)
        time--
        if(time === 39) {
            carTwo.innerHTML = ('🏎️')
            carOne.innerHTML = ('_')
            console.log(carTwo)
        } 
        else if(time === 29) {
            carThree.innerHTML = ('🏎️')
            carTwo.innerHTML = ('_')
        }
        else if(time === 19) {
            carFour.innerHTML = ('🏎️')
            carThree.innerHTML = ('_')
        }
        else if(time === 9) {
            carFive.innerHTML = ('🏎️')
            carFour.innerHTML = ('_')
        }
         else if(time === -1) {
            carSix.innerHTML = ('🔥')
            carFive.innerHTML = ('_')
           
        }
        else if(time === -2) {
            alert("You're dead!")
            button.disabled = false
            window.location.reload()
        }
       
    }, 300)

}








function compareLetters(userKey) {
    if(choosenWord.indexOf(userKey) > -1)
    {
        for(let i = 0; i < numBlanks; i++)
        {
            if(lettersInWord[i] === userKey) {
                
                rightGuessCounter++
                blanksAndSuccesses[i] = userKey
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ')
            }
        }
    }
    

    else
    {     
       
        wrongLetters.push(userKey) 
        life--
        document.getElementById('wrongGuesses').innerHTML = wrongLetters
        console.log('Wrong Letters = ' + wrongLetters);
    }
}



function winLose() {
   
    if(numBlanks === rightGuessCounter) {
        alert('You win!')
        window.location.reload()
    } 
      
    if (life === 8 && wrongLetters !== lettersInWord) {
        lifeTwo.innerHTML = '🏎️'
        lifeOne.innerHTML = '_'      
    }
    if (life === 7 && wrongLetters !== lettersInWord) {
        lifeThree.innerHTML = '🏎️'
        lifeTwo.innerHTML = '_'      
    }
    if (life === 6 && wrongLetters !== lettersInWord) {
        lifeFour.innerHTML = '🏎️'  
        lifeThree.innerHTML = '_'    
    }
    if (life === 5 && wrongLetters !== lettersInWord) {
        lifeFive.innerHTML = '🏎️'    
        lifeFour.innerHTML = '_'  
    }
    if (life === 4 && wrongLetters !== lettersInWord) {
        lifeSix.innerHTML = '🏎️'    
        lifeFive.innerHTML = '_'  
    }
    if (life === 3 && wrongLetters !== lettersInWord) {
        lifeSeven.innerHTML = '🏎️'    
        lifeSix.innerHTML = '_'  
    }
    if (life === 2 && wrongLetters !== lettersInWord) {
        lifeEight.innerHTML = '🏎️'    
        lifeSeven.innerHTML = '_'  
    }
    if (life === 1 && wrongLetters !== lettersInWord) {
        lifeNine.innerHTML = '🔥'   
        lifeEight.innerHTML = '_'   
        alert('YOU DEAD MATE')
        window.location.reload()
    }
    
}



document.onkeydown = function(event) {
    test = true
    let letterGuessed = event.key

    for(let i = 0; i < doubleWord.length; i++)
    {	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1)
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword)

			compareLetters(letterGuessed)
            winLose()
		}
	}		
} 




button.addEventListener('click', startGame)