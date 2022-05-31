/*Получить первые элементы массива
Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirst(array, n) {
    return array.slice(0, n);
}

console.log(getFirst(array, 5));

/*document.writeln(getFirst(array));    // 1
document.writeln(getFirst(array, 4)); // 1,2,3,4
document.writeln(getFirst(array,-3)); // 1,2,3,4,5,6 */