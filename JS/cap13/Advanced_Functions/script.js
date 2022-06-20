const first = () => {
    const greet = "Hi"
    const second = () => {
        const name = "bobby"
        alert(greet)
    }
    return second
}

const newFunc = first()
newFunc()

//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5)

//Compose
const compose = (f, g) => (a) => f(7)

const sum = (num) => num + 1

compose(sum, sum)(5)

//Avoiding Side Effects, functional purity

var a = 1
function b() {
    a = 2
}