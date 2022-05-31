/*11. Количество повторяющихся элементов в массиве
Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.*/

function countIdentic(arr) {
    const arrObj = {};

    arr.forEach((element) => {
        arrObj[element] = (arrObj[element] || 0) + 1;
    });

    let countRepeated = 0;
    Object.keys(arrObj).forEach((value) => {
        if (arrObj[value] > 1) {
            countRepeated++;
        }
    });
    return countRepeated;
}

//console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
console.log(countIdentic([3, 7, 4, 4, 4, 5, 5, 5, 8])); // 4
//countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3