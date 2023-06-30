const distKm = parseInt( prompt("Km da percorrere?"));
const userYearOfBirth = parseInt(prompt("in che anno sei nato?"));
const currentDate = new Date();
const userAge = currentDate.getFullYear() - parseInt(userYearOfBirth);

// console.log("l'utente ha " + userAge + " anni");

const price = parseInt((distKm * 0.21));

// console.log(price);




const priceYoung = price - (price * 0.2);
const priceYoungDecimal = priceYoung.toFixed(2)

// console.log(priceYoungDecimal);

const priceOld = price - (price * 0.4);
const priceOldDecimal = priceOld.toFixed(2)

// console.log(priceOldDecimal);

if (userAge <= 18) {
    document.getElementById("distKm").innerHTML = `${distKm}`;
    document.getElementById("userAge").innerHTML = `${userAge}`;
    document.getElementById("price").innerHTML = `${priceYoungDecimal}`;
    // console.log("Sei piccolo");
    
}else if(userAge >= 65) {
    document.getElementById("distKm").innerHTML = `${distKm}`;
    document.getElementById("userAge").innerHTML = `${userAge}`;
    document.getElementById("price").innerHTML = `${priceOldDecimal}`;
    // console.log("Sei Vecchio")
}else {
    document.getElementById("distKm").innerHTML = `${distKm}`;
    document.getElementById("userAge").innerHTML = `${userAge}`;
    document.getElementById("price").innerHTML = `${price}`;
    // console.log("Sei Maggiorenne")
}

