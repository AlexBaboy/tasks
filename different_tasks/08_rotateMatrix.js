/*
### Перевернуть матрицу 3х3

Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

```
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]  
[7, 8, 9]    [9, 6, 3]   
```

**Input**: Number[][]

**Output**: Number[][]

```jsx
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  // todo
}

console.log(rotate(matrix))
```
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    // todo
    const rotated = source[0].map(_ => [])

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            rotated[j][source.length - 1 - i] = source[i][j]
        }
    }
    return rotated
}

function rotate180(sourse) {
    return rotate(rotate(sourse))
}

function rotate270(sourse) {
    return rotate(rotate180(sourse))
}

function rotate360(sourse) {
    return rotate(rotate270(sourse))
}

function print(array) {
    array.forEach(i => console.log(i));
}

print(rotate(matrix))
console.log('==================')
print(rotate180(matrix))
console.log('==================')
print(rotate270(matrix))
console.log('==================')
print(rotate360(matrix))