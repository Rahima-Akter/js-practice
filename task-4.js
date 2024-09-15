// Problem 04 : Calculate Admission Final Score

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input'
    }

    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let name = obj.name;
    let isFFamily = obj.isFFamily;

    let fScore = 0;

    if (typeof testScore === 'number' && testScore <= 50) {
        fScore += testScore;
    }

    if (typeof schoolGrade === 'number' && schoolGrade <= 30) {
        fScore += schoolGrade;
    }

    if (isFFamily === true) {
        fScore += 20;
    }

    if (typeof obj.name !== 'string') {
        return false;
    }
    
    if (fScore >= 80) {
        return true;
    } 
    else{
        return false;
    }
}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
//     isFFamily : true }))