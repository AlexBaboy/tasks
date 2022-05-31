/**
 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Сложность задачи: 2 of 5
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    const objToReturn = object;

    args.forEach((element) => {
        delete objToReturn[element];
    });

    return objToReturn;
};

const data = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(without(data, "b", "d", "e")); // { a: 1 }