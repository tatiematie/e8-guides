const keyToID = (key) => {
    let newKey = key.replace(/ /g, '-').replace(/'/g, '').replace(/\./g, '').toLowerCase()
    return newKey
}

export default keyToID