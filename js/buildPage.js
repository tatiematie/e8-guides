import keyToID from "./keyToID.js"
import updatePage from "./updatePage.js"

// import data to build page on load
const buildPage = () => {
    Object.entries(itemData).forEach(([key, values]) => {
        newItemSelector(key, values)
    })
}

// create/append item select list
const newItemSelector = (key, values) => {
    const newListItem = document.createElement("li"),
        newButton = document.createElement("button"),
        newImg = document.createElement("img"),
        newBGImg = document.createElement("img")

    newBGImg.src = `assets/images/treatments/${values.rarity.toLowerCase()}.png`
    newBGImg.classList.add("background")
    newButton.appendChild(newBGImg)

    newImg.src = `assets/images/items/${keyToID(key)}.png`
    newImg.classList.add("itemImg")
    newButton.appendChild(newImg)

    newButton.type = "button"
    newButton.classList.add("item")
    newButton.title = key
    // newButton.id = keyToID(key)
    newListItem.appendChild(newButton)

    // add click listener
    newListItem.addEventListener("click", event => {
        updatePage(key)
    })

    itemSelectList.appendChild(newListItem)
}

export default buildPage