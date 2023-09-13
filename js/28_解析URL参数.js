const url1 = "https://www.google.com/search?a=123&b=adbxo213&c=UTF-8"
const url2 = new URL('https://www.google.com/search?a=123&b=adbxo213&c=UTF-8')


const urlToObject = (urlParams) => {
    const urlParamsObject = {}
    const urlParamsArray = urlParams.split('?')[1].split('&')
    urlParamsArray.forEach((param) => {
        const [key, value] = param.split('=')
        urlParamsObject[key] = isNaN(value) ? value : parseInt(value)
    })
    return urlParamsObject
}
console.log(urlToObject(url1));