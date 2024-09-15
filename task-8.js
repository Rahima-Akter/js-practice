// Problem 04 : Virus in my Array

function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    const onlyNum = [];
    for(const num of array){
        if(typeof num === 'number' && !isNaN(num)){
            onlyNum.push(num);
        }
    }
    return onlyNum;
}


console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))