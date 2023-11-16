const userInput = prompt('Please enter the flavor(s) you want, separated by commas')

if(userInput) {
    console.log(userInput.split(','))
}

let splitUserInput = userInput.split(',')
for(i = 0; i < splitUserInput.length; i++) {
    console.log(splitUserInput[i])
}