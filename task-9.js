// Problem 09 : Make A Great Password

function password(obj) {
    if (obj.length < 3 || obj.birthYear.toString().length < 4) {
        return 'invalid';
    }

    const birthYear = obj.birthYear;
    const name = obj.name;
    const siteName = obj.siteName;

    const capitalized = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

    const generatedPassword = capitalized + '#' + obj.name + '@' + obj.birthYear;

    return generatedPassword;
}

console.log(password({ name: "toky", birthYear: 2000, siteName: "google" }))
