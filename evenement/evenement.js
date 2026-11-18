function handleClick(){
    console.log("On m'a cliqué !")
}
document.querySelector("button").addEventListener("click",handleClick);      //  attrape le bouton puis installe la sonnette
   
function handleDoubleClick(){
    console.log("On m'a cliqué deux fois !");
}
document.querySelector(".double-click").addEventListener("dblclick",handleDoubleClick);

//addEventListener sert à écouter un événement (une action) afin d'y répondre.
//Dans la premiére partie de la parenthése on inscrit le nom de l'action à mener, 
// dans la deuxième partie on inscrit le nom de la fonction à lancer.

//Attention: Action entre guillemets, la fonction sans guillemets