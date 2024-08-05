console.log('Hello World')

const secret = "My favourite colour is #000080!";

function authenticateUser(){
    let attempts = 0;
    while(attempts < 3){
        let userInput = prompt('ENTER');
        if (password === userInput) {
            return true;
        } else{
            attempts++
            console.log(`Attempt ${attempts} failed. Tries left: ${3 - attempts}`);
        }
    }
    return false;
}

let isLoggedIn = authenticateUser();


// const password = "willy";
// const secret = "My favourite colour is #000080!";

// function authenticateUser() {
//   let attempts = 0;
//   while (attempts < 3) {
//     let userInput = prompt('Enter if thy dare');
//     if (password === userInput) {
//       return true;
//     } else {
//       attempts++;
//       console.log(`Attempt ${attempts} failed. Tries left: ${3 - attempts}`);
//     }
//   }
//   return false;
// }

// let isLoggedIn = authenticateUser();

// if (isLoggedIn) {
//   alert(secret);
// } else {
//   console.log("Access denied. Too many failed attempts.");
// }
