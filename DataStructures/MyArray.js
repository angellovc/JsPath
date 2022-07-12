class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        let deleted = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deleted;
    }

    remove(index) {
        let deleted = this.data[index];
        this.shiftIndex(index);
        return deleted
    }
    
    unshift() {
        let newArray = {};
        arguments 
        for (let i = 0; i < arguments.length; i++) {
            newArray[i] = arguments[i];
        }
        for (let i = 0; i < this.length; i++) {
            newArray[i + arguments.length] = this.data[i];
        }
        this.data = newArray;
        return this.data;
    }

    shiftIndex(index) {
        if (index >= this.length - 1) {
            delete this.data[index];
            this.length--;
            return;
        }
        this.data[index] = this.data[index + 1];
        this.shiftIndex(index + 1);
    }
    
}
