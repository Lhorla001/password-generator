//defining characters for password in an array
const upperChar = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerChar = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numberChar = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbolChar = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]
let passwords = []

//fetching values of paragraph from html
let Password1 = document.getElementById("password-1")
let Password2 = document.getElementById("password-2")
let Password3 = document.getElementById("password-3")
let Password4 = document.getElementById("password-4")


function generatePassword() {
    passwords = []
    for (let i=0; i<4; i++) { 
        let output1 = Math.floor(Math.random()*upperChar.length) 
        passwords.push(upperChar[output1]) 
    }
    for (let i=0; i<4; i++) { 
        let output2 = Math.floor(Math.random()*lowerChar.length) 
        passwords.push(lowerChar[output2]) 
    }
    for (let i=0; i<4; i++) { 
        let output3 = Math.floor(Math.random()*numberChar.length) 
        passwords.push(numberChar[output3]) 
    }
    for (let i=0; i<4; i++) { 
        let output4 = Math.floor(Math.random()*symbolChar.length) 
        passwords.push(symbolChar[output4]) 
    }
    


    for (let i=0; i<passwords.length; i++)  { 
        let output5 = Math.floor(Math.random()*passwords.length) 
        let result = passwords[output5]
        if (i===0) { 
           Password1.textContent = ""
       }
       Password1.textContent += result
    }
    for (let i=0; i<passwords.length; i++)  { 
        let output5 = Math.floor(Math.random()*passwords.length) 
        let result = passwords[output5]
        if (i===0) { 
           Password2.textContent = ""
       }
       Password2.textContent += result
    }
    for (let i=0; i<passwords.length; i++)  { 
        let output5 = Math.floor(Math.random()*passwords.length) 
        let result = passwords[output5]
        if (i===0) { 
           Password3.textContent = ""
       }
       Password3.textContent += result
    }
    for (let i=0; i<passwords.length; i++)  { 
        let output5 = Math.floor(Math.random()*passwords.length) 
        let result = passwords[output5]
        if (i===0) { 
            Password4.textContent = ""
        }
        Password4.textContent += result
    }
}

/* Display generated passwords */



