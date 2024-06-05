import buildPage from "./buildPage.js"

// json loader
const loadData = async (filepath) => {
    return (await fetch(filepath)).json()
}

// load item list and save as global variable
const itemData =  await loadData("../data/items.json")
window.itemData = itemData

const loadPage = async () => {
    // remove window hash
    history.replaceState(null, '', window.location.pathname + window.location.search);

    // temp selection builder
    buildPage()
}

// run page loader
loadPage()