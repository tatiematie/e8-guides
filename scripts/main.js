import buildSelect from "./buildSelect.js"
import { getCookie, setCookie } from "./cookieHandling.js"
import loadData from "./loadData.js"
import resizeSelect from "./resizeSelect.js"
import updateDisplay from "./updateDisplay.js"

const loadPage = async () => {
	// define global variable to store the list of items and their data
	window.itemList = await loadData("data/itemData.json"),
		window.itemIDs = Object.keys(window.itemList)

	// set up the page according according to how the user's last viewed item, if available
	if (!getCookie("lastViewed")) {
		setCookie("lastViewed", window.itemIDs[0], 7)
	}

	// build/initialize the item selection list
	buildSelect()

	// update tab and page with data from cookies
	updateDisplay(getCookie("lastViewed"))

	// update the item selection list to fit items properly in the list for responsive/mobile viewing
	window.addEventListener("resize", () => {
		resizeSelect()
	})
}

// initialize the page
loadPage()
