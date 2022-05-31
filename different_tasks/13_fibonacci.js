/*
* Напишите функцию, которая будет генерировать последовательность
* Фиббоначи длины `n`, которую передали как аргумент.
**Input**: Number
**Output**: Number[]
* */

/* function fibonacci(n) {
    // todo

    // variant 1
    /*const seq = [1,1]

    if (n < 2) {
        return seq.slice(0, n)
    }

    while (seq.length < n) {
        const last = seq[seq.length - 1]
        const prev = seq[seq.length - 2]
        seq.push(last + prev)
    }

    return seq*/
//}

const fibonacci = (function() {
    const seq = [1,1]

    return function(n) {
        console.log('called with', n)
        if(seq.length >= n) {
            console.log('no compute')
            return seq.slice(0, n);
        }

        while (seq.length < n) {
            const last = seq[seq.length - 1]
            const prev = seq[seq.length - 2]
            seq.push(last + prev)
            console.log('pushed:', seq[seq.length - 1])
        }
    }
})()

console.log(fibonacci(10)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(12)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(11)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
