/**
 * arrToEnum v0.0.1 By bobby169
 * Github: https://github.com/bobby169/arrToEnum
 * MIT Licensed.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.arrToEnum = factory());
}(this, (function () { 'use strict';

var cache = {};

/**
 * Convert array to Enum
 * @param arr
 * @param cacheKey
 * @param key
 * @param value
 * @returns {{}|*}
 */
function arrToEnum(arr, cacheKey) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'name';
    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'value';

    if (cacheKey && cache[cacheKey]) return cache[cacheKey];

    var enumObj = {};
    arr.forEach(function (item) {
        var ikey = item[key];
        var ivalue = item[value];
        if (ikey) {
            enumObj[enumObj[ikey] = ivalue] = ikey;
        }
    });

    if (cacheKey) cache[cacheKey] = enumObj;
    return enumObj;
}

return arrToEnum;

})));
