/*Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и 
заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть 
массив [кАжДыЙ оХоТнИк].*/

//const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
function changeRegister(str) {
    // Ваш код

    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].charAt(0).toUpperCase() === str[i].charAt(0)) {
            result.push(str[i].toLowerCase());
        } else {
            result.push(str[i].toUpperCase());
        }
    }
    return result.join("");
}

console.log(changeRegister("фывА"));