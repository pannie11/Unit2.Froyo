const userInput = prompt('Please enter the flavor(s) you want, separated by commas')

function getFlavors() {
    if (userInput) {
        console.log(userInput.split(','))
    }

    const splitUserInput = userInput.split(',')
    for (i = 0; i < splitUserInput.length; i++) {
        const flavor = splitUserInput[i]
        console.log(flavor)
    }

    const flavors = {};
    splitUserInput.forEach((input) => {
        flavors[input] = (flavors[input] || 0) + 1
    })
    return flavors
}
console.log(getFlavors())



