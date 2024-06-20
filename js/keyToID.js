// function to convert item names to url readable ids
const keyToID = (key) => {
    let newKey = key.replace(/ /g, '-').replace(/'/g, '').replace(/\./g, '').toLowerCase()
    return newKey
}

export default keyToID