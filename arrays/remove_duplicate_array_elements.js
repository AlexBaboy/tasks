/*5. Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из 
массива arr (игнорируйте чувствительность к регистру).*/

var arr = [
    "php",
    "php",
    "css",
    "css",
    "script",
    "script",
    "html",
    "html",
    "java",
];

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates(arr));