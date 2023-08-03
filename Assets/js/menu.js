window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY > 0);
})

// Variable para mantener un seguimiento del elemento seleccionado actualmente
let selectedElement = null;

window.addEventListener("click", function(event) {

    // Verificamos si el elemento clickeado es una etiqueta "a"
    if(event.target.tagName === "A") {

        // Si hay un elemento seleccionado actualmente, eliminamos la clase "selected" de ese elemento
        if (selectedElement) {
            selectedElement.classList.remove("selected");
        }
        // Guardamos el nuevo elemento clickeado como el elemento seleccionado actualmente
        selectedElement = event.target;

        // Agregamos la clase "selected" al nuevo elemento clickeado
        selectedElement.classList.add("selected");
    }
});

let selected = null;

window.addEventListener("click", function(event){

    if(event.target.tagName === "LI"){
        if (selected) {
            selected.classList.remove("chosen")
        }
        selected = event.target;
        selected.classList.add("chosen");
    }
});

let girar = null;
const projectShow = document.querySelector('.portfolio__projects');

projectShow.addEventListener("click", (event) => {
    const flippedElements = document.getElementsByClassName('flipped');
    const rowImage = Array.from(flippedElements);

    const infoData = document.getElementsByClassName('data');
    const showData = Array.from(infoData);

    const revisarText = document.getElementsByClassName('text-row');
    const text = Array.from(revisarText);

    // Iteramos por los elementos del array rowImage
    for (let i = 0; i < rowImage.length; i++) {
        // Comprobamos si el elemento clickeado es igual al elemento actual del array
        if (event.target === rowImage[i]) {
            if (girar === null) {
                rowImage[i].style.transform = 'scaleX(-1)';
                showData[i].style.display = 'block';
                text[i].textContent = "Ocultar";
                girar = true;
            } else {
                rowImage[i].style.transform = 'scaleX(1)';
                showData[i].style.display = 'none';
                text[i].textContent = "Revisar";
                girar = null;
            }
            break; // Importante: Salimos del bucle para evitar cambiar otros elementos no clickeados
        }
    }
});