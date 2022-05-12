let input = function (AmountofCoins, total) {
    let largestNumber;
    let amountOfCoinsIterated = 0;
    while (total > 0) {
        largestNumber = Math.max(...AmountofCoins)
        if (largestNumber > total) {
            AmountofCoins = AmountofCoins.filter(function (removeNum) {
                return removeNum !== largestNumber
            });
            if (AmountofCoins.length == 0) {
                return -1
            };
        } else {
            total -= largestNumber
            amountOfCoinsIterated++
        }
        console.log(AmountofCoins)

    };
    return amountOfCoinsIterated
}

console.log(input([1, 2, 5],11));
console.log(input([2], 3));
