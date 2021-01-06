const cache = {}

/**
 * Convert array to Enum
 * @param arr
 * @param cacheKey
 * @param key
 * @param value
 * @returns {{}|*}
 */
export default function arrToEnum(arr, cacheKey, key = 'name', value = 'value') {
    if(!Array.isArray(arr)) throw new Error('arr argument is not an array!')
    if (cacheKey && cache[cacheKey]) return cache[cacheKey]

    let enumObj = {}
    arr.forEach((item) => {
        const ikey = item[key]
        const ivalue = item[value]
        if (ikey) {
            enumObj[enumObj[ikey] = ivalue] = ikey;
        }
    })

    if(cacheKey) cache[cacheKey] = enumObj
    return enumObj
}
