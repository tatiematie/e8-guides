import buildPage from "./buildPage.js"
import getCookie from "./getCookies.js"
import keyToID from "./keyToID.js"
import updatePage from "./updatePage.js"

// json loader
const loadFile = async (filetype, filepath) => {
    if (filetype == "json") {
        return (await fetch(filepath)).json()
    } 
}

// load item list and save as global variable
const itemData =  await loadFile("json", "../data/items.json")
window.itemData = itemData

const loadPage = async () => {
    const itemSelectList = document.querySelector("#item-select")

    // page builder pre-load
    buildPage()

    // get cookies and set last viewed item as current or set default as viewed
    if (getCookie("lastViewed") === null) {
        itemSelectList.firstChild.click()
    } else {
        updatePage()
    }

    window.addEventListener("hashchange", () => {
        if (!Object.keys(itemData).includes(window.location.hash.substring(1))) {
            window.location.hash = keyToID(getCookie("lastViewed"))
        }
    })
}   

loadPage()