const updateDisplay = (id) => {
    updateTitle(window.itemList[id].name)

    updateFavico(id)

    populateDisplay(id)
}

// update favico with current item in view
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
                if (child.type == "text" || child.type == "items") {
                    child.values.forEach(value => {
                        if (child.type == "text") {
                            const newLine = document.createElement("p")
                                newLine.innerHTML = value

                            newSection.appendChild(newLine)
                        } else {
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
                } else if (child.type == "calculator") {
                    const newCalculator = document.createElement("div"),
                        newOutputWrapper = document.createElement("div"),
                        newOutput = document.createElement("input")
                    
                    newOutput.id = "output"
                    newOutput.readOnly = true
                    newOutput.value = child.defaultValue
                    newOutput.tabIndex = -1

                    newOutputWrapper.appendChild(newOutput)

                    newCalculator.id = "calculator"
                    if (child.fields.length > 1) {
                        newCalculator.classList.add("triple")
                    }

                    child.fields.forEach(field => {
                        const newFieldWrapper = document.createElement("div"),
                        newField = document.createElement("input")

                        newField.id = field
                        newField.type = "tel"

                        let  newThumbnail = document.createElement("img")
                        
                        switch (field) {
                            case ("input"):
                                newThumbnail.src = `assets/images/items/${id}.png`
                                newField.value = 1
                                newFieldWrapper.appendChild(newThumbnail)
                                break

                            case ("clovers"):
                                newThumbnail.src = `assets/images/items/57-leaf-clover.png`
                                newField.value = 0
                                newFieldWrapper.appendChild(newThumbnail)
                                break
                        }

                        newField.addEventListener("click", (e) => {
                            e.target.select()
                        })

                        newField.addEventListener("input", (e) => {
                            const outputField = document.querySelector("#output")

                            let baseValue = child.base,
                                itemCount = parseInt(document.querySelector("#input").value) || 0

                            e.target.value = e.target.value.replace(/[^\d]/g, '')
                            
                            e.target.value.length < 1 ? e.target.value = 0 : null
                            e.target.value.startsWith(0) && e.target.value.length > 1 ? e.target.value = e.target.value.substring(1) : null

                            if (child.mode == "hyperbolic") {
                                if (child.output == "chance") {
                                    if (child.fields.includes("clovers")) {
                                        const cloverCount = parseInt(document.querySelector("#clovers").value)
                                        outputField.value = `${(Math.min(((1 - Math.pow((1 - (baseValue * itemCount)), (cloverCount + 1))) * 100), 100)).toFixed(2)}%`
                                    } else {
                                        outputField.value = `${(Math.min((((baseValue * itemCount) / ((baseValue * itemCount) + 1)) * 100), 100)).toFixed(2)}%`
                                    }
                                }
                            } else if (child.mode == "linear") {
                                // TODO
                            }

                            outputField.value.startsWith("-") ? outputField.value = "100.00%" : null
                        })

                        newFieldWrapper.appendChild(newField)

                        newCalculator.appendChild(newFieldWrapper)
                    })

                    newCalculator.appendChild(newOutputWrapper)

                    newSection.appendChild(newCalculator)
                }
            })

            displayContent.appendChild(newSection)
        })
    }
}



export default updateDisplay