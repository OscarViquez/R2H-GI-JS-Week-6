const targetFunction = (arrayParameter, targetNumber) => {
    if(arrayParameter.includes(targetNumber)) {
        return `Output is: ${arrayParameter.indexOf(targetNumber)}`
    } else {
        return `Output is: ${-1}`
    }
}

console.log(targetFunction([4,5,6,7,0,1,2], 0))
console.log(targetFunction([4,5,6,7,0,1,2], 3))

