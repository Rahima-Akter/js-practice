// Problem 05: Predict Avarage Waiting Time
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    const y = serialNumber - 1;
    const x = y - waitingTimes.length;

    let sum = 0;
    for (const num of waitingTimes) {
        sum += num;
    }
    const avg = sum / waitingTimes.length;
    return Math.round(avg) * x;

}

// console.log(waitingTime([7, 8, 3, 4, 5], "9"))