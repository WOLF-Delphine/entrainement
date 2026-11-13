const guestList =["Angela","Jack","Pam","James","Lara","Jason"];
let firstName = prompt("Quel est votre prénom ?");

let onTheList = guestList.includes(firstName);
console.log(onTheList, typeof onTheList);

if(onTheList){
alert("Bienvenue !")
}
else{
    alert("Désolé, peut-être la prochaine fois !")
}

