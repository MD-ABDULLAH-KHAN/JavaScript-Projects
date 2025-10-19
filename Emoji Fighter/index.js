let fighters = ["🐵","🐒","🐶","🐕","🐩","🐺","🐱","🐈","🦁","🐯","🐅","🐎","🦄","🐮","🐂","🐃","🐼","🦃","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🕊️","🐸","🐊","🐳","🐋","🐬","🐌","🕷️"];
let stageElement = document.getElementById("stage")
let fightButton = document.getElementById("fight-button")
function getRandom(){
    let randomEmoji = Math.floor(Math.random()*fighters.length)
    return fighters[randomEmoji]
}
fightButton.addEventListener("click",function () {
    let emojiOne = getRandom()
    let emojiTwo = getRandom()
    stageElement.textContent = emojiOne + "VS " + emojiTwo
    console.log("Clicked")
})