const Node = require('./Node');

class Queue {
    constructor() {
        this.last;
        this.first;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.last;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0)
            return;

        if (this.length === 1) {
            this.first = undefined;
            this.last = undefined;
            this.length--;
            return;
        }


        let iterator = this.last;
        while(iterator.next !== this.first)
            iterator = iterator.next;
        
        iterator.next = undefined;
        this.first = iterator;
        this.length--;
    }

    peek() {
        return this.first?.value;
    }

}