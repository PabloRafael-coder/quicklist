const form = document.getElementById("form");
const input = document.getElementById("title")
const ul = document.getElementById("section__ul")
const button = document.getElementById("button-delete")
const sectionAlert = document.getElementById("sectionAlert")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    createNewElement();
    input.value = '';
})

function createNewElement() {
    const createLi = document.createElement("li")
    createLi.classList.add("section__item")

    const createInput = document.createElement("input")
    createInput.setAttribute("type", "checkbox");
    createInput.classList.add("section__checked-input")

    const createElementP = document.createElement("p");
    createElementP.classList.add("section__text")

    const newButton = document.createElement("button");
    newButton.classList.add("section__delete-button")

    createElementP.textContent = input.value

    createLi.append(createInput, createElementP, newButton)
    ul.appendChild(createLi)

    newButton.addEventListener("click", () => {
        ul.removeChild(createLi)

        deletedItemAlert()
    })
}

function deletedItemAlert() {
    sectionAlert.classList.add("item-deleted")

    setTimeout(() => {
        sectionAlert.classList.remove("item-deleted")
    }, 2000);
}


