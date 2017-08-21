const test = require('tape')
const tapSpec = require('tap-spec')

const ArrayInmutable = require('./')

const toArray = function (inmutableArray) {
    return inmutableArray.array.slice(0, inmutableArray.length)
}

const emptyArray = []
const array = Object.freeze([1, 2, 3, 4, 5])
const value = 4

test('push', function (t) {
    t.test('empty array', function (st) {
        const result = ArrayInmutable(emptyArray)
            .push(value)
        st.deepEqual(toArray(result), [value],
            'must return a singleton array value')
        st.end()
    })
    t.test('non-empty array', function (st) {
        const result = ArrayInmutable(array)
            .push(value)
        st.deepEqual(toArray(result), array.concat(value),
            'must add a new value')
        st.end()
    })
    t.test('empty array inmutability', function (st) {
        const inmutable = ArrayInmutable(emptyArray)
        inmutable.push(value)
        st.deepEqual(toArray(inmutable), [],
            'must not mutate the array')
        st.end()
    })
    t.test('non-empty array inmutability', function (st) {
        const inmutable = ArrayInmutable(array)
        inmutable.push(value)
        st.deepEqual(toArray(inmutable), array,
            'must not mutate the array')
        st.end()
    })
    t.test('intermediate values', function (st) {
        const intermediate = ArrayInmutable([1])
        const first = intermediate.push(5)
        const second = intermediate.push(3)
        st.deepEqual(toArray(first), [1, 5],
            'must return the correct array')
        st.deepEqual(toArray(second), [1, 3],
            'must return the correct array')
        st.deepEqual(toArray(intermediate), [1],
            'intermediate array must not be mutated')
        st.end()
    })
})

test('every', function (t) {
    t.test('empty array', function (st) {
        const result = ArrayInmutable(emptyArray)
            .every(() => false)
        st.equal(result, true,
            'must return true')
        st.end()
    })
    t.test('non-empty array', function (st) {
        const result = ArrayInmutable([5, 9, 7, 8])
            .every(e => e > 3)
        st.deepEqual(result, true,
            'must return true if the predicate returns true for each element')
        st.end()
    })
    t.test('non-empty array', function (st) {
        const result = ArrayInmutable([5, 1, 7, 8])
            .every(e => e > 3)
        st.deepEqual(result, false,
            'must return false if the predicate returns false for some element')
        st.end()
    })
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
