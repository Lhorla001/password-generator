//password array
let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"

//select DOM element
let passwordEl = document.querySelectorAll(".btn")
let copyEl = document.getElementById("copy");

let passwordLength = 10

//generate passwords for a particular length
function renderPasswords() {
    for (i = 0; i < passwordEl.length; i++) {
        passwordEl[i].classList.remove(".btn");
        passwordEl[i].value = generatePassword(document.getElementById("password-length").value);
        passwordEl[i].innerHTML = passwordEl[i].value
    }
}

//generate random characters
function randomCharacter() {
    return character[Math.floor( Math.random()*character.length )]
}

//generate password for a particular length and character
function generatePassword(passwordLength) {
    let password = ""
    for (l = 0; l < passwordLength; l++) {
        password += randomCharacter();
    }
    return password;
}

