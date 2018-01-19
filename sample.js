class Sample {
    constructor() {
        this.count = 0
    }
    computeStuff(count) {
        // This is a for loop 
        for (var i = 0; i < count; i += 1) {
            this.count += 1
        }

        // Some object
        var object = {
            key1: 'string 1',
            key2: 'string 2',
            key3: 'string 3'
        }
        var array = [1, 2, 3, 4, 5]
        var shorterArray = array.slice(0, 2)
        var stuff = this.doMoreStuff(object.key1, true)

        return stuff
    }
    computeOtherStuff(value, shouldDoStuff) {
        if (shouldDoStuff) {
            return value
        }
        return ''
    }
}