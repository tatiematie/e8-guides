import keyToID from "./keyToID.js"
import { loadPage } from "./loadFile.js"
import { setCookie } from "./cookieHandling.js"

// update page on page interactions
const updatePage = (id) => {
    // update cookies
    setCookie("lastViewed", id, 14)

    // update url
    window.location.hash = keyToID(id)

    // update favico and title
    updateFavico(id)
    document.title = `ROR2 E8 Guides: ${id}`

    // load selected post on display panel
    loadPage(`./assets/pages/${keyToID(id)}.html`)
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