
/*

const colors = ["green", "yellow", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// events part

btn.addEventListener("click", function(){
    
    // get a random number between 0 and 4 
    const randomNumber = getRandomNumber();  //  ici nous avons choisi 2 c est moi mm ki a choisit mais nous voulons le hasard

    
    document.body.style.backgroundColor = colors[randomNumber]; // ici on applik le changement de couleur mais ce n est qu une seule couleur pour cela on a utilise le css
    color.textContent = colors[randomNumber]; // la nomenclature de la couleur confere span elle est presente ds le ARRAY
}); 


// creeons une fonction qui pourra choisir de maniere hasardeuse
// on utilisera cette fonction pour choisir de maniere hasardeuse
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
}
*/



const colors = ["blue", "yellow", "gray", "red", "orange", "lightblue", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("mouseover", function(){

const randomNumber = getrandomColor();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});


function getrandomColor(){
    return Math.floor(Math.random() * colors.length );
}




