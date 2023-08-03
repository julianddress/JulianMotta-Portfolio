// JAVASCRIPT PARA LA SECTION MENU AL HACER SCROLL EN LA PANTALLA

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY > 0);
})


// JAVASCRIPT PARA LA SECTION MENU - AL SELECCIONAR UNA OPCION DEL ( NAV )

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


// JAVASCRIPT PARA LA SECTION PORTFOLIO OPTIONS

let selected = null;

window.addEventListener("click", function (event) {
    const a = document.querySelector(".front");
    const b = document.querySelector(".full");
    const c = document.querySelector(".simple");

    const frontEnd = document.getElementsByClassName('fe');
    const listFront = Array.from(frontEnd);

    const backEnd = document.getElementsByClassName('fs');
    const listBack = Array.from(backEnd);

    const simplePage = document.getElementsByClassName('sp');
    const listSimple = Array.from(simplePage);

    const projects = [listFront, listBack, listSimple];
    const options = [a, b, c];

    for (let x = 0; x < options.length; x++) {
        if (event.target === options[x]) {
            if (selected) {
                selected.classList.remove("chosen");
            }
            selected = event.target;
            selected.classList.add("chosen");

            for (let y = 0; y < projects.length; y++) {
                if (x === y) {
                    projects[y].forEach(item => item.classList.remove("hide"));
                } else {
                    projects[y].forEach(item => item.classList.add("hide"));
                }
            }
            break;
        }
    }
});


// JAVASCRIPT PARA LA SECTION PORTFOLIO PROJECTS

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
