/*Сумма элементов двух массивов
Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.*/

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

//ваш код

function getSumTwoArrays(arr1, arr2) {
    return arr1.map((value, index) => value + (arr2[index] || 0));
}

console.log(getSumTwoArrays(arr1, arr2));

//document.writeln(arr3); // [5,7,9,4,5]