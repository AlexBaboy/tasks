/*
### Сбалансированные скобки
Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.
**Input**: String
**Output**: Boolean
*/

function isBalanced(string) {
    // todo
    const start = '{[('
    const end = '}])'

    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    const queue = []

    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if (start.includes(char)) {
            queue.push(char)
        } else if (end.includes(char)) {
            const last = queue.pop()
            if (map[char] !== last) {
                return false
            }
        }
    }
    return !queue.length
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false