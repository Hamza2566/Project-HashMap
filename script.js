class HashTable {
    constructor(size,loadFactor = 0.75) {
        this.size = size
        this.loadFactor = loadFactor
        this.array = new Array(size)
    }
    hash(key){
        let hashcode = 0
        const prime = 31
        for (let i = 0; i < key.length; i++) {
           hashcode = prime * hashcode + key.charCodeAt(i)
          hashcode =  hashcode % this.size
        }
        return hashcode
    }
    set(key,val){
        const index = this.hash(key)
       if (!index) {
        this.array[index] = [key,val]
       }
       else{
        this.array[index] = [key,val]
       }
    }
    get(key){
    const index = this.hash(key)
    if (!index){
        return null
    }
     return this.array[index][1]
    }
        has(key){
            const index = this.hash(key);
            if (index < 0 || index >= this.array.length) {
                return false;
            }
            const bucket = this.array[index];
            if (bucket && bucket.length > 0) {
                if (bucket[0] === key) {
                    return true;
                }
            }
            return false;
        }
        remove(key){
            const index = this.hash(key)
            const bucket = this.array[index]
           if (bucket){
            const pairindex = bucket[0]
            console.log(pairindex);
            if (pairindex === key) {
                bucket.splice(pairindex,1)
                return true
            }
           }
            return false
        }
        length(){
            let count = 0
            let bucket = this.array
           bucket.forEach(Element=>{
            console.log(Element);
            
            count++
           })
           console.log(count);
        }
        clear(){
            let bucket = this.array
            if (bucket){
             this.array = [this.size] 
            }
        }
        keys(){
            let bucket = this.array
            let  keys = []
            if (bucket){
                bucket.forEach(Element=>{
                 keys.push(Element[0])
                }
            )
        }
        console.log(keys);
        
        }
        val(){
            let bucket = this.array
            let  keys = []
            if (bucket){
                bucket.forEach(Element=>{
                 keys.push(Element[1])
                }
            )
        }
        console.log(keys);
        
        }
        entries(){
            let bucket = this.array
            let entries = []
            if (bucket){
                bucket.forEach(Element=>{
                    entries.push([Element[0] , Element [1]])
                })
            }
            console.log(entries);
            
        }
    }
const map = new HashTable(16)
map.set('apple', 'red')
 map.set('banana', 'yellow')
 map.set('carrot', 'orange')
 map.set('dog', 'brown')
 map.set('elephant', 'gray')
 map.set('frog', 'green')
 map.set('grape', 'purple')
 map.set('hat', 'black')
 map.set('ice cream', 'white')
 map.set('jacket', 'blue')
 map.set('kite', 'pink')
 map.set('lion', 'golden')
console.log(map.get('frog'));
console.log(map.has('kite'));
map.length()
map.keys()
map.val()
map.entries()
// map.clear()
// console.log(map.remove('hamza'))
// console.log(map.has('hamza'));










