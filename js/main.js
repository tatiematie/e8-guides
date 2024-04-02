const loadData = async (filepath) => {
    return (await fetch(filepath)).json()
}

const loadPage = async () => {
    console.log(true)
}

loadPage()