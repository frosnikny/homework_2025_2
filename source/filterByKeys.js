'use strict';

/**
 * Возвращает новый объект, содержащий только указанные ключи исходного объекта.
 *
 * @param {Object} obj - исходный объект
 * @param {Array<string>} keys - ключи, которые нужно оставить
 * @returns {Object} - новый объект, отфильтрованный по ключам
 */
const filterObjectByKeys = function (obj, keys) {
    const result = {};

    if (!obj || typeof obj !== 'object' || !Array.isArray(keys)) {
        return result;
    }

    keys.forEach(key => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    });

    return result;
};
