import buildPage from "./buildPage.js"
import { setCookie, getCookie } from "./cookieHandling.js"
import updatePage from "./updatePage.js"
import { loadData } from "./loadFile.js"
import keyToID from "./keyToID.js"

const loadPage = async () => {
    window.itemData =  await loadData("data/items.json")
    window.itemSelectList = document.querySelector("#item-select")

    buildPage()

    getCookie("lastViewed") ? updatePage(keyToID(getCookie("lastViewed"))) : itemSelectList.childNodes[0].click()
    // getCookie("itemListScroll") > 0 ? itemSelectList.scrollTop = getCookie("itemListScroll") : null

    document.addEventListener('contextmenu', (event) => {
      // event.preventDefault()
    })

    setInterval(() => {
      const itemSelect = document.querySelector("#item-select"),
      selectChildren = itemSelect.querySelectorAll("li")

      const childSize = selectChildren[0].getBoundingClientRect()

      if (childSize.width != childSize.height) {
        itemSelect.style.gridAutoRows = `${childSize.width}px`
      }
  }, 0)
}

loadPage()