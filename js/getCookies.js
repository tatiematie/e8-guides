// function for reading cookies
const getCookies = (data) => {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=')
        if (cookieName.trim() === data) {
            return decodeURIComponent(cookieValue)
        }
    }
    return null
};

export default getCookies