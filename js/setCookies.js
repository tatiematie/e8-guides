// set cookies on user interaction
const setCookies = (key) => {
    const cookieExpiration = new Date()
        cookieExpiration.setDate(cookieExpiration.getDate() + 14)
    const expires = cookieExpiration.toUTCString()

    document.cookie = `lastViewed=${key}; expires=${expires}; SameSite=Strict`
}

export default setCookies