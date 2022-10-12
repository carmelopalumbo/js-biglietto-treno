// js

const costoalKm = 0.21;
const anniUtente = prompt('Quanti anni hai?');
const kmRequest = prompt('Quanti km vuoi percorrere oggi?');
let calcoloSconto;
let costoFinale;

if(anniUtente < 18){
    calcoloSconto = (kmRequest * costoalKm * 20) / 100;
    costoFinale = (kmRequest * costoalKm) - calcoloSconto;
    document.getElementById('dirittosconto').innerHTML = "Sei minorenne, hai diritto al 20% di sconto!";
}else if(anniUtente >= 65){
    calcoloSconto = (kmRequest * costoalKm * 40) / 100;
    costoFinale = (kmRequest * costoalKm) - calcoloSconto;
    document.getElementById('dirittosconto').innerHTML = "Sei Over-65, hai diritto al 40% di sconto!";
}else{
    costoFinale = kmRequest * costoalKm;
    document.getElementById('dirittosconto').innerHTML = "Non hai diritto a sconti oggi.";
}

document.getElementById('costoalkm').innerHTML += costoalKm;
document.getElementById('anni').innerHTML += anniUtente;
document.getElementById('kmrichiesti').innerHTML += kmRequest;
document.getElementById('prezzofinale').innerHTML += `${costoFinale.toFixed(2)}€`;
