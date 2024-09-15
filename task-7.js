// Problem-07: Good Name , Bad Name

function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    const lastWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    // let x = '';
    // for (let word of lastWord) {
    //     x = word;
    //     if (x.includes(name[-1])) {
    //         return 'Good Name'
    //     } else {
    //         return 'bad name';
    //     }
    // }

    if (lastWord.includes(name[-1])) {
        return 'good name';
    } else {
        return 'bad name';
    }
}

console.log(checkName('salman'))