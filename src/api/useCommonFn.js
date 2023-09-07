export const useCommonFn = () => {
    const getCookie = name => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    };

    // Usage
    const myCookieValue = getCookie('token');
    if (myCookieValue !== null) {

        console.log('Cookie true:');
    } else {
        console.log('Cookie not found');
    }
    return {
        myCookieValue
    }

}