import getCookies from "./getCookies.js"
import keyToID from "./keyToID.js"


const updatePage = () => {
    // update url to change the displayed post
    window.location.hash = keyToID(getCookies("lastViewed"))

    // change page title
    document.title = `ROR2 E8 Guides: ${getCookies("lastViewed")}`

    // change page favico
    // <link id="favico" rel="icon" type="image/x-icon" href="">
    const favico = document.head.querySelector("#favico"),
        newFavico = document.createElement("link")

    newFavico.id = "favico"
    newFavico.rel = "icon"
    newFavico.type = "image/x-icon"
    newFavico.href = `assets/images/items/${keyToID(getCookies("lastViewed"))}.png`

    favico ? document.head.removeChild(favico) : null
    document.head.appendChild(newFavico)
}

export default updatePage