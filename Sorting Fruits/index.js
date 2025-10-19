let fruit = ["🍏","🥭","🍏","🍏","🥭"]
let appleShelf= document.getElementById("apple-shelf")
let mangoShelf= document.getElementById("mango-shelf")

function sortFruit(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="🍏"){
            appleShelf.textContent += "🍏"
        }
        else if(fruit[i]==="🥭"){
            mangoShelf.textContent += "🥭"
        }
    }
}
sortFruit()