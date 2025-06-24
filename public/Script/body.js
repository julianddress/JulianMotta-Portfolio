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


// DOM EN LA SECTION PORTFOLIO

const infoData = document.getElementsByClassName('data');
const showData = Array.from(infoData);

const flippedElements = document.getElementsByClassName('flipped');
const rowImage = Array.from(flippedElements);

const revisarText = document.getElementsByClassName('text-row');
const text = Array.from(revisarText);

const a = document.querySelector(".front");
const b = document.querySelector(".full");
const c = document.querySelector(".simple");

const frontEnd = document.getElementsByClassName('fe');
const listFront = Array.from(frontEnd);

const backEnd = document.getElementsByClassName('fs');
const listBack = Array.from(backEnd);

const simplePage = document.getElementsByClassName('sp');
const listSimple = Array.from(simplePage);

let girar = null;
let selected = null;


// JAVASCRIPT PARA LA SECTION PORTFOLIO OPTIONS

window.addEventListener("click", function (event) {

    const projects = [listFront, listBack, listSimple];
    const options = [a, b, c];

    // RECORREMOS LAS OPCIONES PARA VER CUAL CLICKEAMOS
    for (let x = 0; x < options.length; x++) {
        if (event.target === options[x]) {
            rowImage.forEach(item => item.style.transform = 'scaleX(1)');
            showData.forEach(item => item.style.display = 'none');
            text.forEach(item => item.textContent = "Revisar");
            if (selected) {
                selected.classList.remove("chosen");
            }
            selected = event.target;
            selected.classList.add("chosen");

            // RECORREMOS LOS PROYECTOS PARA AÑADIR O ELIMINAR LA CLASE HIDE
            for (let y = 0; y < projects.length; y++) {

                // COMPARAMOS DOS ARRAYS
                if (x === y) {
                    projects[y].forEach(item => item.classList.remove("hide"));
                } else {
                    projects[y].forEach(item => item.classList.add("hide"));
                }
            }

            break; // SALIMOS DEL BUCLE PARA NO ITERAR EN TODAS LAS OPCIONES (SOLO EN LA CLICKEADA)
        }
    }
});


// JAVASCRIPT PARA LA SECTION PORTFOLIO PROJECTS

window.addEventListener("click", (event) => {

    // Iteramos por los elementos del array rowImage
    for (let i = 0; i < rowImage.length; i++) {

        // Comprobamos si el elemento clickeado es igual a algun elemento del array
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


// JAVASCRIPT PARA EL MENU - RESPONSIVE

const menuResponsive = document.querySelector(".menu__bar-img")
const menuList = document.querySelector(".menu__options")

menuResponsive.addEventListener("click", () =>{
    menuList.classList.toggle('menu-mobile')
});


// JAVASCRIPT PARA APLICAR TRANSICIONES A LOS SECTION


/* Variable para acceder las secciones con la clase "hidden" */
const seccionesOcultas = document.querySelectorAll('.hidden');


/* El Observer*/
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('mostrar', entry.isIntersecting);
            // if(entry.isIntersecting) observer.unobserve(entry.target);        
        });
    },
    {threshold: 0.75}
);

//PREVENT DEFAULT DE BOTON
const botonEnviar = document.querySelectorAll("[btn-enviar]");

botonEnviar.forEach(boton => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        // Tu código aquí
    });
});

seccionesOcultas.forEach((seccion)=>observer.observe(seccion));