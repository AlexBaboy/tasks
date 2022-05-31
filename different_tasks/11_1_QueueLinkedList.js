class LinkedList {
    #length = 0
    #head
    #tail

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#length === 0) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail = node
        }

        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) {
            return
        }

        const value = this.#head.value
        this.#head = this.#head.next
        this.#length--
        return value
    }

    size() {
        return this.#length
    }
}

class Queue extends LinkedList {
    constructor() {
        super()
        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
    }

    get size() {
        // todo: возвращает размер списка
        return super.size()
    }
}

const que = new Queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.dequeue()

console.log(que.size)
