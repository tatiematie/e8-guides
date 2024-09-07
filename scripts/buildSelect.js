import { setCookie } from "./cookieHandling.js"
import resizeSelect from "./resizeSelect.js"
import updateDisplay from "./updateDisplay.js"

const buildSelect = () => {
    // loop through the items in the data file and create a new list item in the item selection list
    Object.entries(window.itemList).forEach(([id]) => {
        createNewButton(id)
    })

    resizeSelect()
}

// make a new button for each item and put it in the item selection grid
const createNewButton = (id) => {
    window.itemSelect = document.querySelector("#item-select")

    const newListItem = document.createElement("li"),
        newButton = document.createElement("button"),
        newImg = document.createElement("img")

    newImg.src = `assets/images/items/${id}.png`
    
    newButton.title = `[ ${window.itemList[id].name} ]`
    newButton.classList.add(window.itemList[id].rarity[0].toLowerCase())
    newButton.classList.add("item")
    newButton.addEventListener("click", () => {
        setCookie("lastViewed", id, 7)

        updateDisplay(id)
    })
    newButton.appendChild(newImg)

    newListItem.appendChild(newButton)

    itemSelect.appendChild(newListItem)
}

export default buildSelect