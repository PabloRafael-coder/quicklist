// Pegando os elementos do html
const form = document.getElementById("form");
const input = document.getElementById("title")
const p = document.querySelector(".section__text")
const ul = document.getElementById("section__ul")
const button = document.querySelector(".section__delete-button")


// Manipulando o botão da aplicação
form.addEventListener("submit", (e) => {
    e.preventDefault();

    createNewElement();
})

function createNewElement() {

    const newLi = document.createElement("li")
    newLi.classList = "section__item"

    const newInput = document.createElement("input")
    newInput.setAttribute("type", "checkbox");
    newInput.classList = "section__checked-input";

    const newP = document.createElement("p");
    newP.classList = "section__text"

    if (newP.textContent === '') {
        newP.textContent = input.value
    } else {
        newP.textContent
    }

    const newButton = document.createElement("button");
    newButton.classList = "section__delete-button"

    newLi.append(newInput)
    newLi.append(newP)
    newLi.append(newButton)
    ul.appendChild(newLi)
}