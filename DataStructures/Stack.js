const Node = require('./Node');

class Stack {
    constructor() {
        this.top;
        this.bottom;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = this.top;
        } else  {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.length++;
    }

    peak() {
        return this.top?.value;
    }

    pop() {
        if (this.top === undefined)
            return undefined;
        this.top.next = undefined;
        this.length--;
    }
}
