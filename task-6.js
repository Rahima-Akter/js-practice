// Problem-06 : Help The Zoo Manager


function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Invalid Number';
    }

    const ticketPrice = 120;
    const stuffCost = 500 + (8 * 50);

    if (ticketSale > 0) {
        const earnTotal = ticketPrice * ticketSale;
        const netTotal = earnTotal - stuffCost;
        return netTotal;
    }
}

console.log(calculateMoney(40))