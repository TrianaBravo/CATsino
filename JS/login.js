const pata = document.getElementById("pata");

// Posición de la pata
let x = window.innerWidth / 2;
let y = window.innerHeight + 100; // arranca escondida bajo la pantalla

// Posición del mouse
let mouseX = 0;
let mouseY = 0;

// Qué tanto puede "asomarse" la pata desde el borde inferior
const alturaMaxima = window.innerHeight - 350; // punto más alto al que puede subir
const alturaReposo = window.innerHeight + 60;  // posición de descanso, casi escondida

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animar() {

    // el eje X sigue al mouse libremente por todo el ancho
    x += (mouseX - x) * 0.08;

    // el eje Y intenta ir directo a donde está el mouse,
    // pero sin pasar de alturaMaxima (su límite de alcance)
    // ni bajar más que alturaReposo (su posición de descanso)
    let objetivoY = mouseY;
    if (objetivoY < alturaMaxima) objetivoY = alturaMaxima;
    if (objetivoY > alturaReposo) objetivoY = alturaReposo;

    y += (objetivoY - y) * 0.08;

    const offsetX = 75;   // mitad del ancho de la imagen
    const offsetY = 120;  // ajusta según dónde esté la punta

    pata.style.left = (x - 300) + "px";
    pata.style.top = (y - 50) + "px";

    requestAnimationFrame(animar);
}


animar();

function Entrar() {

    pata.style.display = "none";

    window.location.href = "lobby.html";

}