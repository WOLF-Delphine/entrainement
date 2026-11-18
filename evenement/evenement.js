function handleClick(){
    console.log("On m'a cliqué !")
}
document.querySelector("button").addEventListener("click",handleClick);      //  attrape le bouton puis installe la sonnette
   
function handleDoubleClick(){
    console.log("On m'a cliqué deux fois !");
}
document.querySelector(".double-click").addEventListener("dblclick",handleDoubleClick);