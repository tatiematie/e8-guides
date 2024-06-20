import keyToID from "./keyToID.js"
import { loadPage } from "./loadFile.js"
import setCookies from "./setCookies.js"

// update page on page interactions
const updatePage = (key) => {
    // update cookies
    setCookies(key)

    // update url
    window.location.hash = keyToID(key)

    // update favico and title
    updateFavico(key)
    document.title = `ROR2 E8 Guides: ${key}`

    // load selected post on display panel
    loadPage(`./assets/pages/${keyToID(key)}.html`)
}

// update favico for page update
const updateFavico = (item) => {
    const favico = document.head.querySelector("#favico"),
        newFavico = document.createElement("link")

    newFavico.id = "favico"
    newFavico.rel = "icon"
    newFavico.type = "image/x-icon"
    newFavico.href = `assets/images/items/${keyToID(item)}.png`

    favico ? document.head.removeChild(favico) : null

    document.head.appendChild(newFavico)
}

export default updatePage