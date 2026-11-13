let personne=["Lucie","Hélene","Paul","Amed","Sofiane"];

function tours(personne){
    let aleatoire= Math.floor(Math.random()*personne.length);
    console.log(aleatoire);
    let prenom= personne [aleatoire];
}
tours();
console.log(`Ce soir c'est ${prenom} qui fait la vaisselle.`);