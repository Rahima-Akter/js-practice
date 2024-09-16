// Problem 010 : Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number')
        return 'Invalid Input';

    let earnTotal = 0;
    for (let num of arr) {
        if (num >= 3000) {
            num = num * 0.2;
        }
        earnTotal = earnTotal + num;
    }

    let mSavings = earnTotal - livingCost;
    console.log('Mothly Savings is: ', mSavings)
    if (mSavings > 0) {
        return mSavings;
    } else {
        return 'Not enough money for monthly savings - EARN MORE!';
    }
}

console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));