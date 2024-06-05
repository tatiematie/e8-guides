// page builder
const buildPage = () => {
    Object.entries(itemData).forEach(([key, values]) => {
        newItemSelector(key, values)
    })
}

// list item builder
const newItemSelector = (key, values) => {
    const itemSelectList = document.querySelector("#item-select")

    const newListItem = document.createElement("li"),
        newInput = document.createElement("input"),
        newLabel = document.createElement("label"),
        newImg = document.createElement("img")

    // simplify item names
    let itemKey = key.replace(/ /g, '-').replace(/'/g, '').replace(/\./g, '-').toLowerCase()

    newInput.id = itemKey
    newInput.name = "itemSelect"
    newInput.type = "radio"
    newInput.addEventListener("click", () => clickHandler(itemKey))
    newListItem.appendChild(newInput)

    newImg.src = `../assets/images/items/${itemKey}.png`

    newLabel.setAttribute("for", itemKey)
    newLabel.classList.add(values.rarity.toLowerCase())
    newLabel.classList.add("item")
    newLabel.appendChild(newImg)
    newListItem.appendChild(newLabel)
   
    itemSelectList.appendChild(newListItem)
}

// item selection click listener
const clickHandler = (key) => {
    window.location.hash = key
}

export default buildPage