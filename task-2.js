// Problem 02 : Notification Generator

function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
        return 'Invalid Email';
    }

    let emailParts = email.split('@');
    const userName = emailParts[0];
    const domainName = emailParts[1];
    return userName + ' sent you an email from ' + domainName;
}

// console.log(sendNotification('nadim.naem5@outlook.com'));