const gato = document.getElementById("gato");

const emojis = ["🐱", "😺", "😸", "😹", "🐈", "💎", "🐟"];

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

async function girar() {
    gato.src = "../imagenes/tragagatos/Chino2.png";
    maquina.src = "../imagenes/tragagatos/TragaGatos2.png";


    setTimeout(() => {
        gato.src = "../imagenes/tragagatos/Chino1.png";
        maquina.src = "../imagenes/tragagatos/TragaGatos.png";
    }, 300);

    resultado.textContent = "";

    const e1 = await animar(r1, 1000);
    const e2 = await animar(r2, 1500);
    const e3 = await animar(r3, 2000);

    if (
        r1.textContent === r2.textContent &&
        r2.textContent === r3.textContent
    ) {
        resultado.textContent = "¡Ganaste!";
    } else {
        resultado.textContent = "Perdiste";
    }

}

function animar(span, tiempo) {
    return new Promise((resolve) => {
        const intervalo = setInterval(() => {
            span.textContent = randomEmoji();
        }, 80);

        setTimeout(() => {
            clearInterval(intervalo);
            resolve(span.textContent);
        }, tiempo);
    });
}