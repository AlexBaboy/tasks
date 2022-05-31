/**
 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Сложность задачи: 2 of 5
 * @param {Object<string | number>} firstObj - объект с примитивами
 * @param {Object<string | number>} secondObj - объект с примитивами
 * @returns {boolean}
 */

const isEqual = (firstObject, secondObject) => {
    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    console.log(firstKeys);
    console.log(secondKeys);

    return !firstKeys.filter((key) => firstObject[key] !== secondObject[key])
        .length;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false