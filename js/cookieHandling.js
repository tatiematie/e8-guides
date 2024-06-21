// retrieve cookie data
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

// set cookie new/existing cookie name, value, and expiration date
const setCookie = (cookie, value, expires) => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + expires); // Add days to current date
    const expirationDate = expiration.toUTCString();

    document.cookie = `${cookie}=${value}; expires=${expirationDate}; path=/`;
};


export { setCookie, getCookie }
