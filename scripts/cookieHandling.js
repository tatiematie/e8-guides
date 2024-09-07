// retrieve cookie data
// used on page load to get the last seen page and load it for convenience
const getCookie = (name) => {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=')
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue)
        }
    }
    return null
}

// create new cookie data
// used when a new page is visited to store the current page so it can be reloaded when the user comes back, cookies are stored for 7 days before expiring
const setCookie = (cookie, value, expires) => {
    const expiration = new Date()
    expiration.setDate(expiration.getDate() + expires)
    const expirationDate = expiration.toUTCString()

    document.cookie = `${cookie}=${value}; expires=${expirationDate}; path=/`
}


export { setCookie, getCookie }
