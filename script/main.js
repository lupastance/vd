const button = document.getElementById("button-no");
const buttonYes = document.getElementById("button-yes");
const rain = document.getElementById("rain");
const title = document.getElementById("title");
const bakaSpan = document.getElementById("baka");
const sonido = document.getElementById("sonido");
const sonidoKiss = document.getElementById("sonido-kiss");
const plus = document.getElementById("plus");
const buttons = document.querySelector('.buttons');

let plusCounter = 0;

button.addEventListener("mouseover", (event) => {
    button.classList.add('no');
    const maxWidth = window.innerWidth - button.clientWidth;
    const maxHeight = window.innerHeight - button.clientHeight;

    let newX, newY;
    do {
        newX = Math.random() * maxWidth;
        newY = Math.random() * maxHeight;
    } while (Math.abs(newX - event.clientX) < 100 && Math.abs(newY - event.clientY) < 100);

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    baka();
});


buttonYes.addEventListener("click", () => {
    button.classList.add('destroy');
    buttons.style.gridTemplateColumns = '1fr';
    rain.src = 'assets/cat-yes.gif';
    title.innerHTML = 'Have a nice day<br>Hug Soul<br>💚🩵';
    sonidoKiss.currentTime = 0; // Reinicia el sonido si ya se ha reproducido
    sonidoKiss.play();
    
    if(plusCounter > 0){
        const plus = document.createElement('span');

        plus.classList.add('plus');
        plus.innerText = '+1';

        rain.after(plus);
        
        setTimeout(() => {
            plus.remove();
        }, 2000);
    }

    plusCounter++;
})

function baka() {
    sonido.currentTime = 0; // Reinicia el sonido si ya se ha reproducido
    sonido.play();
    bakaSpan.style.display = "inline-block"; // Lo mostramos
    setTimeout(() => {
        bakaSpan.style.display = "none"; // Se oculta después de 0.5s
    }, 600);
}