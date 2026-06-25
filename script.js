function updateProducts() {

let category =
document.getElementById("category").value;

let product =
document.getElementById("product");

product.innerHTML = "";

let options = [];

if(category === "bouquets"){

options = [
"Ribbon Bouquet",
"Glitter Ribbon Bouquet",
"Teddy Bouquet",
"Chocolate Bouquet"
];

}

else if(category === "explosion"){

options = [
"Classic Explosion Box",
"Butterfly Explosion Box",
"Memory Explosion Box",
"Hanging Letter Box",
"Infinity Box",
"Photo + Ribbon Flower Box"
];

}

else if(category === "custom"){

options = [
"Heart Lamp",
"Thread Art",
"Playing Card  Photo Gift",
"Hanging Ribbon Gift",
"Photo Based Gifts",
];

}

else if(category === "digital"){

options = [
"Birthday Digital Wish",
"Anniversary Digital Wish",
"Video Digital Wish",
"Friendship Digital Wish",
"Love Digital Wish",
];

}

options.forEach(function(item){

let option =
document.createElement("option");

option.text = item;

option.value = item;

product.add(option);

});

}
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},500);

},1800);

});

