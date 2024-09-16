// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input'
    }
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let number of numbers) {
        if (name.includes(number)) {
            return true;
        }
    }
    return false;
}
// console.log(checkDigitsInName('Raj123'))