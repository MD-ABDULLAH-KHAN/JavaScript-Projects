let characters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',"'",'"',',','.','<','>','/','?','`','~','\\',' '
];

let firstBox = document.getElementById("box-1");
let secondBox = document.getElementById("box-2");

function generateNumber() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword(userPrompt) {
  let firstPassword = "";  
  let secondPassword = ""; 

  for (let i = 0; i < userPrompt; i++) {
    firstPassword += characters[generateNumber()];
    secondPassword += characters[generateNumber()];
  }

  firstBox.textContent = firstPassword;
  secondBox.textContent = secondPassword;
}

function renderPassword() {
  let userPrompt = parseInt(prompt("Please Enter the length of the Password :"));
  if (!isNaN(userPrompt) && userPrompt > 0) {
    generatePassword(userPrompt);
  } else {
    alert("Please enter a valid number!");
  }
}
