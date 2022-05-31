/**
 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Сложность задачи: 3 of 5
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */
const invoke = (object, path, func, args) => {

    const splittedPath = path.split('.')
    const target = splittedPath.reduce((acc, key) => {
        console.log('acc', acc)
        acc = acc[key] ? acc[key] : object[key]
        return acc
    }, [])

    return Array.prototype[func].apply(target, args)
};

const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]