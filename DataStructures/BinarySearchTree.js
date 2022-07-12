const Node = require('./Node');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let parentNode = this.getParentFor(value, this.root);
        if (value < parentNode.value)
            parentNode.left = newNode;
        else
            parentNode.right = newNode;
    }   
    
    getParentFor(value, node) {
        if (value < node.value && node.left !== null)
            return this.getParentFor(value, node.left)
        if (value > node.value && node.right !== null)
            return this.getParentFor(value, node.right)

        return node;
    }

    search(value, node = this.root) {
        if (node === null)
            return false;

        if (node.value === value)
            return true;

        const left = this.search(value, node.left)
        const right = this.search(value, node.right)
        return left || right;
    }

    printTree(node = this.root) {
        if (node === null)
            return
        this.printTree(node.left);
        console.log(node.value);
        this.printTree(node.right);
    }
}
