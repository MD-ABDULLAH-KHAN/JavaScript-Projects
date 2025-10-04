let countEl=document.getElementById("count-value")
console.log(countEl);
let count=0;
function increment(){
    count++;
    countEl.innerText=count;
}
function decrement(){
    count--;
    countEl.innerText=count;
}
function reset(){
    count=0;
    countEl.innerText=count;
}
