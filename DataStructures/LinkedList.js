const Node = require('./Node');

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(value, index) {
        if (index > this.length) {
            this.append(value);
            return;
        }
        if (index <= 0) {
            this.prepend(value);
            return;
        }

        let newNode = new Node(value);
        let node = this.getNode(index);

        newNode.next = node.next;
        node.next = newNode;
        this.length++;
    }

    remove(index) {
        if(index > this.length) {
            this.pop();
            return;
        }
        if (index <= 0) {
            this.removeFirst();
            return;
        }

        let node = this.getNode(index);
        node.next = node.next?.next;
        this.length--;
    }

    getNode(index) {
        let iterator = this.head;
        for(let i = 0; i < index - 1; i++)
            iterator = iterator.next;
        
        return iterator
    }

    pop() {
        let iterator = this.head;
        while(iterator.next !== this.tail)
            iterator = iterator.next;

        this.tail = iterator;
        this.tail.next = undefined;
        this.length--;
    }

    removeFirst() {
        this.head = this.head.next;
        this.length--;
    }

}
