/*Получить последние элементы массива
Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getLast(array, n) {
    return array.slice(-n);
}

console.log(getLast(array, 3));

/*document.writeln(getLast(array));     // 9
document.writeln(getLast(array, 4));  // 6,7,8,9
document.writeln(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9 
Показать решение*/