import buildPage from "./buildPage.js"
import getCookie from "./getCookies.js"
import updatePage from "./updatePage.js"
import { loadData } from "./loadFile.js"

const loadPage = async () => {
  // import item data and save to global variable
    const itemData =  await loadData("data/items.json")
    window.itemData = itemData

    const itemSelectList = document.querySelector("#item-select")

    buildPage()

    // check for saved cookies, if they exist then load, otherwise set first item as default
    if (!getCookie("lastViewed")) {
      itemSelectList.childNodes[0].click()
    } else {
      window.location.hash = getCookie("lastViewed")
      
      updatePage(getCookie("lastViewed"))
    }

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
  })
}   

loadPage()