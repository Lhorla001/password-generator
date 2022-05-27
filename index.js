//password array
let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"

//select DOM element
let passwordEl = document.querySelectorAll(".btn")
let pwLength = document.getElementById("password-length")

let passwordLength = 10

//generate passwords for a particular length
function renderPasswords() {
    for (i = 0; i < passwordEl.length; i++) {
        passwordEl[i].classList.remove(".btn");
        
        //check if pwLength.value is more than 10 or less than 5, if it's less than 5 it will be back to 5 and if it is more than 10 it will be 10.
        if(pwLength.value > 10){
            pwLength.value = 10
        }else if(pwLength.value < 5){
            pwLength.value = 5
        }
        passwordEl[i].value = generatePassword(pwLength.value);
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

//copy passwords to clipboard
const copy = function() {
    copyToClipboard(this.innerHTML)
}
  document.getElementById('copy1').onclick = copy;
  document.getElementById('copy2').onclick = copy;
  document.getElementById('copy3').onclick = copy;
  document.getElementById('copy4').onclick = copy;


function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea content
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}

