/* ### Какая строка встречается чаще всего
Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
**Input**: String[]
**Output**: String*/

function highestFrequency(array) {
    // todo
    const map = {}
    let maxFr = 0
    let maxFrStr = array[0]

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }

        if (map[current] > maxFr) {
            maxFr = map[current]
            maxFrStr = current
        }
    }
    return maxFrStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi