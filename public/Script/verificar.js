const flagElement = document.querySelector("nav")
const flagEsp = document.getElementById("flag-es");
const flagEng = document.getElementById("flag-en");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLenguage = async lenguage => {
    const requestJson = await fetch(`/${lenguage}.json`)
    const text = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = text[section][value];
    }
}

flagElement.addEventListener("click", (e) => {
    changeLenguage(e.target.parentElement.dataset.language);
})