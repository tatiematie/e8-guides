// loads json data to store as a variable for future use
const loadData = async (filepath) => {
    return (await fetch(filepath)).json()
}

export default loadData