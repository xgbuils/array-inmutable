function ArrayInmutable (array) {
    return createArrayInmutable(array.concat([]), array.length)
}

function createArrayInmutable (array, length) {
    const obj = Object.create(ArrayInmutable.prototype)
    obj.array = array
    obj.length = length
    return obj
}

Object.defineProperties(ArrayInmutable.prototype, {
    push: {
        value (val) {
            const length = this.length
            let array = this.array
            if (array.length > length) {
                array = array.slice(0, length)
            }
            array[length] = val
            return new createArrayInmutable(array, length + 1)
        }
    },
    every: {
        value (p) {
            const length = this.length
            const array = this.array
            for (let i = 0; i < length; ++i) {
                if (!p(array[i])) {
                    return false
                }
            }
            return true
        }
    },
    reduce: {
        value (f, acc) {
            const length = this.length
            const array = this.array
            for (let i = 0; i < length; ++i) {
                acc = f(acc, array[i])
            }
            return acc
        }
    }
})

module.exports = ArrayInmutable
