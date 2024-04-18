const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0; 

const bannerSlides = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dot");


// Flèches 
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");


// Création des events listeners des flèches
 // Ajout de la fonction de défilement : étape 4

left.addEventListener("click", moveLeft);
function moveLeft () {
	console.log("Vous avez cliqué sur la flèche gauche");
	showSlide();
	if (index <= 0) {
		index = slides.length -1;
	} 
	else {
		index --;
	}
}

right.addEventListener("click", moveRight);
function moveRight () {
	console.log("Vous avez cliqué sur la flèche droite");
	showSlide ();
	if (index >= slides.length - 1) {
		index = 0;
	} 
	else {
		index ++;
	}
}

//Ajout des images et du text
function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;

for (var i = 0; i < dots.length; i++) {
	if (i === index) {
	  dots[i].classList.add('dot_selected');
	} else {
	  dots[i].classList.remove('dot_selected');
	}
  }
}