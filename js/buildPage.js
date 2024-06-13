import setCookies from "./setCookies.js"
import keyToID from "./keyToID.js"
import updatePage from "./updatePage.js"

const itemSelectList = document.querySelector("#item-select")

// page builder
const buildPage = () => {
    Object.entries(itemData).forEach(([key, values]) => {
        newItemSelector(key, values)
    })
}

// list item builder
const newItemSelector = (key, values) => {
    // create elements
    const newListItem = document.createElement("li"),
        newButton = document.createElement("button"),
        newImg = document.createElement("img")

    // set up list elements
    newImg.src = `assets/images/items/${keyToID(key)}.png`
    newButton.appendChild(newImg)

    newButton.type = "button"
    newButton.classList.add(values.rarity.toLowerCase())
    newButton.classList.add("item")
    newButton.title = key
    newListItem.appendChild(newButton)

    // adding click listener
    newListItem.addEventListener("click", (event) => {
        setCookies(key, keyToID(key))
        updatePage()
    })

    // add button to list
    itemSelectList.appendChild(newListItem)
}

export default buildPage