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
const projectShow = document.querySelector('.portfolio__project-row');

projectShow.addEventListener("click", (event) => {
    const rotarRow = document.querySelector('.flipped')
    const mostrarow = document.querySelector('.data')
    const textRow =  document.querySelector('.text-row')

    if(event.target === rotarRow){
        if(girar == null){
            rotarRow.style.transform = 'scaleX(-1)';
            mostrarow.style.display = 'block';
            textRow.textContent = "Ocultar";
            girar = true;
        }else{
            rotarRow.style.transform = 'scaleX(1)';
            mostrarow.style.display = 'none';
            textRow.textContent = "Revisar";
            girar = null;
        }
    }
});




