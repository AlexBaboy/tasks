/*Отобразить элементы в случайном порядоке
Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.*/

/*function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

var array = [0,1,2,3,4,5,6,7,8,9];
document.writeln(shuffle(array));*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function shuffle(arr) {
    return 0.5 - Math.random();
}

const arrSortdedShuffle = arr.sort(shuffle);

console.log("arrSortdedShuffle", arrSortdedShuffle);