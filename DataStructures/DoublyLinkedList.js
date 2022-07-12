const Node = require('./Node');

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail= this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
    }

    removeFirst() {
        if (this.length === 1)
            return;
        this.head = this.head.next;
        this.length--;
    }

    pop() {

        if (this.length === 1) {
            return;
        }

        let iterator = this.head;
        while(iterator.next !== this.tail) {
            iterator = iterator.next;
        }
        
        iterator.next = undefined;
        this.tail = iterator;
        this.length--;
    }

    remove(index) {
        if(index >= this.length - 1) {
            this.pop();
            return;
        }
        if (index <= 0) {
            this.removeFirst();
            return;
        }

        let node = this.getNode(index - 1);
        node.next = node.next.next;
            node.next.previous = node;
        this.length--;
    }

    insert(value, index) {
        if (index >= this.length) {
            this.append(value);
            return;
        }
        if (index <= 0) {
            this.prepend(value);
            return;
        }

        let newNode = new Node(value);
        let node = this.getNode(index - 1);

        node.next.previous = newNode;
        newNode.next = node.next;
        newNode.previous = node;
        node.next = newNode;

        this.length++;
    }

    getNode(index) {
        let iterator = this.head;
        for(let i = 0; i < index; i++)
            iterator = iterator.next;
        
        return iterator
    }
}
