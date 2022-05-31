/*
### Простой поиск
Напишите функцию, которая принимает отсортированный массив с 
числами и число. Необходимо вернуть индекс числа, если оно есть в 
массиве. Иначе вернуть `-1`.
**Input**: Number[], Number
**Output**: Number
 */

// Time: 0(n)
function search(array, target) {
    // todo

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

// Time: o(log(n))
function searchOptimized(array, target) {
    // todo
    let start = 0
    let end = array.length - 1

    if (target < array[start] | target > array[end])
        return -1

    while (true) {
        if (target === array[start]) {
            return start
        }

        if (target === array[end]) {
            return end
        }

        if (end - start <= 1) {
            return -1
        }

        const middle = Math.floor((start + end) / 2)

        if (target > array[middle]) {
            start = middle + 1
        } else if (target < array[middle]) {
            end = middle - 1
        } else {
            return middle
        }
    }

}
// console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
//console.log(search([1, 3, 6, 13, 17], 12)) // -> -1
console.log(searchOptimized([1, 3, 6, 13, 17], 12)) // -> -1