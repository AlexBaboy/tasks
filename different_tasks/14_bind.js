/*
* Реализуйте функцию `bind`.
**Input**: Object, arguments
**Output**: Function
* */

Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
        return this.call(context, ...args.concat(rest))
    }
}

function log(...props) {
    console.log(this.name, this.age, ...props)
}

const obj = {
    name: 'Alex',
    age: 35
}

const bound = log.myBind(obj, 30)
bound(28)
