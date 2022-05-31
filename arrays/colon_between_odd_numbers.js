/*3. Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает 
число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится 
число 55639217, то на выход должно быть 5:563:921:7.*/

//const num = prompt('Введите число', 55);

function colonOdd(num) {
    const result = [num[0]];
    for (let i = 1; i < num.length; i++) {
        if (Number(num[i - 1] % 2 !== 0) && Number(num[i] % 2 !== 0)) {
            result.push(":", num[i]);
        } else {
            result.push(num[i]);
        }
    }
    return result.join("");
}

console.log(colonOdd("555111222333")); // 5:5