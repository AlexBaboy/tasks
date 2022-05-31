/*Високосным годом является каждый четвертый год и века начинаются только на высокостные года, отличие високосного года от обычного
 заключается в появлении 366-го дня. Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и 
 возвращает массив високосных лет в заданном диапазоне.*/

function chooseYears(start, end) {
    // Ваш код

    const result = [];
    for (let year = start; year <= end; year++) {
        if (isLeapYear(year)) {
            result.push(year);
        }
    }
    return result;
}

function isLeapYear(year) {
    const isLeap =
        (new Date(year, 11, 31) - new Date(year, 0, 0)) / 86400000 === 366;
    return isLeap;
}

//document.writeln(chooseYears(2000,2018)); // [2000,2004,2008,2012,2016]
console.log(chooseYears(2000, 2022));