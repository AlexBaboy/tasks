/*
### Очередь с О(1) сложностью операций
Создайте очередь, в которой буду
реализованы операции на добавление
элементов в конец очереди, удаление
первого элемента и вычисление размера
очереди с сложностью алгоритма `О(1)` .
*/

class Queue {
    #storage = {}
    #last = 0
    #first = 0

    enqueue(item) {
        this.#storage[this.#last] = item
        this.#last++
    }

    dequeue() {
        if (this.size === 0) {
            return
        }
        const value = this.#storage[this.#first]
        delete this.#storage[this.#first]
        this.#first++
        return value
    }

    get size() {
        return this.#last - this.#first
    }
}

const table = new Queue()

table.enqueue(1)
table.enqueue(2)
table.enqueue(42)
table.dequeue()

console.log(table.size)
