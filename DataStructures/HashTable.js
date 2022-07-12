class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
      }

    set(key, value) {
      let address = this.hashFunction(key);
      if (!this.data[address]) {
          this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
    
    get(key) {
        const address = this.hashFunction(key);
        const currentBucket = this.data[address];
        for (let i = 0; i < currentBucket?.length; i++) {
            if (currentBucket[i][0] === key)
              return currentBucket[i][1];
        }
    }

    delete(key) {
        const address = this.hashFunction(key);
        const currentBucket = this.data[address];
        currentBucket.forEach((hashElement, index) => {
            if (hashElement[0] === key)
                currentBucket.splice(index, 1);
        });
    }
    
    getKeys() {
        return this.data.map(bucket => bucket.map(hash => hash[0])).flat(Infinity);
    }

    getValues() {
        return this.data.map(bucket => bucket.map(hash => hash[1])).flat(Infinity);
    }

}
