const updateDisplay = (id) => {
    updateTitle(window.itemList[id].name)
    console.log(window.itemList[id].name)

    updateFavico(id)

    populateDisplay(id)
}

// update favico to be reflect the current item in view
const updateFavico = (id) => {
    const favico = document.head.querySelector("link[rel='icon']")
        favico.href = `assets/images/items/${id}.png`
}

// update the page title
const updateTitle = (itemName) => {
    const title = document.querySelector("title")
        title.innerText = `E8 Item Guides: ${itemName}`
}

// update the display panel with the item's information from the data file
const populateDisplay = (id) => {
    const itemThumbnail = document.querySelector("#item-info .thumbnail img"),
        itemName = document.querySelector("#item-info .title .name"),
        itemRarity = document.querySelector("#item-info .title .rarity")

    const displayContent = document.querySelector("#item-info .content")

    const item = window.itemList[id]

    itemThumbnail.src = `assets/images/items/${id}.png`

    itemName.innerHTML = item.name
    itemRarity.innerHTML = `${item.rarity[0]} ${item.rarity.length > 1 ? item.rarity[item.rarity.length - 1] : "Item"}`

    displayContent.innerHTML = ''
    if (item.info) {
        Object.entries(item.info).forEach(([title, content]) => {
            const newSection = document.createElement("div"),
                sectionTitle = document.createElement("h3")

            sectionTitle.innerHTML = `${title}:`

            newSection.classList.add("section")
            newSection.appendChild(sectionTitle)

            let synergyList
            if (title === "Synergy") {
                synergyList = document.createElement("ul")
                synergyList.classList.add("content", "synergy")
                
                newSection.appendChild(synergyList)
            }

            Object.entries(content).forEach(([key, child]) => {
                if (child.type === "text" || child.type === "items") {
                    child.values.forEach(value => {
                        if (child.type === "text") {
                            const newLine = document.createElement("p")
                                newLine.innerHTML = value
                            
                            newSection.appendChild(newLine)
                        }

                        if (child.type === "items") {
                            if (synergyList) {
                                const newItem = document.createElement("li"),
                                    newImg = document.createElement("img")

                                newImg.src = `assets/images/items/${value}.png`
                                
                                newItem.classList.add("item")
                                newItem.classList.add(window.itemList[value].rarity[0].toLowerCase())
                                newItem.appendChild(newImg)
                                
                                synergyList.appendChild(newItem)
                            }
                        }
                    })
                }
            })

            displayContent.appendChild(newSection)
        })
    }
}



export default updateDisplay