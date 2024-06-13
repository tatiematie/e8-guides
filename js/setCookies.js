const setCookies = (key, keyName) => {
    const cookieExpiration = new Date()
        cookieExpiration.setDate(cookieExpiration.getDate() + 28)
    const expires = cookieExpiration.toUTCString()

    document.cookie = `lastViewed=${key}; expires=${expires}; SameSite=Strict`
}

export default setCookies