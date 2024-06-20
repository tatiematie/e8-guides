const loadData = async (filepath) => {
    return (await fetch(filepath)).json()
}

const loadPage = async (filepath) => {
    return (await fetch(filepath)
        .then((res) => res.text())
        .then((page) => {
            document.getElementById("current-page").innerHTML = page
    }))
}

export { loadData, loadPage }