/**
  * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
  * Пустые значения: '', null, NaN, undefined, [], {}
  * Ожидаемый результат: ({}) => true,
      ({ a: { b: undefined } }) => true,
      ({ a: { b: [] } }) => true
  * Сложность задачи: 3 of 5
  * @param {Object} object - любой объект
  * @returns {boolean}
*/

const isEmptyDeep = (object) => {

    if (!object) return true

    const keys = Object.keys(object)
    if (!keys.length) return true

    let result;
    for (let i = 0; i < keys.length; i += 1) {
        const value = object[keys[i]];

        if (
            (typeof value === 'boolean' && value) ||
            (typeof value === 'number' && !Number.isNaN(value)) ||
            (typeof value === 'string' && value !== '')) {
            result = false;
            break;
        }
        if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
            result = isEmptyDeep(value);
            break;
        }

        result = true;
    }

    return result
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
const data3 = { a: { b: 1 }, b: { a: 11, b: 22, c: null }, c: { a: null } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
console.log(isEmptyDeep(data3)); // false