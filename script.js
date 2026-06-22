const texto = `No sé cómo explicarlo de una forma sencilla, porque lo que siento no cabe del todo en palabras…

Pero hay personas que, sin hacer ruido, sin intentarlo siquiera, se vuelven especiales. Y tú eres exactamente eso.

Tu presencia tiene algo distinto: todo se siente más tranquilo, más bonito, más… en equilibrio. Es como si el mundo bajara un poco el ritmo cuando estás cerca, solo para poder apreciarte mejor.

Cada vez que te veo, me resulta imposible no notarlo… te ves increíblemente hermosa. No es algo pasajero ni una idea exagerada; es real. Tu forma de ser y tu forma de verte iluminan de una manera que no se puede ignorar.

Y aunque suene simple, la verdad es que no dejo de pensarte. No encuentro otra cosa que me distraiga más de ti. Es como si, sin darte cuenta, te hubieras vuelto el pensamiento más constante y bonito del día.

Hay algo en ti que destaca sin esfuerzo. Entre todas las personas, tú tienes una manera de brillar diferente… no porque lo intentes, sino porque simplemente eres tú.

Y no sé si alguna vez te lo han dicho así, pero me gustas de una forma tranquila, sincera… y muy real
💙`;

let i = 0;

/* ✍️ escribir carta */
function escribir(){
if(i < texto.length){
document.getElementById("texto").textContent += texto[i];
i++;
setTimeout(escribir, 30);
}
}

/* 🎬 inicio estilo Netflix */
window.onload = function(){

setTimeout(()=>{
document.getElementById("intro").style.opacity = "0";
document.getElementById("intro").style.transition = "2s";

setTimeout(()=>{
document.getElementById("intro").style.display = "none";
mostrarCarta();
},2000);

},2500);
};

function mostrarCarta(){
let c = document.getElementById("carta");
c.style.display = "block";

setTimeout(()=>{
c.style.opacity = "1";
c.style.transform = "translate(-50%,-50%) scale(1)";
},200);

escribir();
}

/* 🎵 música */
function playMusic(){
document.getElementById("musica").play();
}