var list = document.getElementsByTagName("li");
list.className = "list-item";

document.body.setAttribute("style", "font-family: Arial, sans-serif");

document.getElementById("nickname").innerHTML = "Miha";
document.getElementById("favorites").innerHTML = "Cafea";
document.getElementById("hometown").innerHTML = "Ceahlau";


var image = document.createElement("img");
image.setAttribute("src", "https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$");

document.body.appendChild(image);