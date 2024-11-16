
let text=document.getElementById("text");
let total=document.getElementById("Totalc");
let remaining=document.getElementById("Remainingc");

text.addEventListener("keyup",function(){
    console.log("key is pressed")
    updateCounter();

});
function updateCounter(){
    total.innerText=text.value.length;
    remaining.innerText=total.getAttribute("maxlength")-text.value.length;
}
updateCounter();


