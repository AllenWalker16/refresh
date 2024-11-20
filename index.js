// const cards = document.querySelectorAll(".img");
// cards.forEach((image) => {
//     image.addEventListener("click",() => {
//         image.classList.add("active")
//     })
    
// });
// function removeActiveClasses(){
//    cards.forEach((image) => {
//        image.classList.remove("active")
//    } ) 
// }

//using the onclick function.

let content = document.getElementsByClassName("img");
content.onclick = function (){
    if (content.className == "open"){
        //shrink box
        content.className = "";
    }
    else{
        content.className = "closed";
    }
    
}
let active = document.getElementsByClassName("img");
content.onclick = function(){
    console.log("i was clicked");
}