// Problem-01 : Tax Calculator

function calculateTax(income, expenses){
    if (income<expenses){
        return 'Invalid Input';
    }
    if(income > expenses){
        let total = income - expenses;
        let tax = total * 0.2 ;
        return tax;
    }
}
// console.log(calculateTax(3400, 11753))