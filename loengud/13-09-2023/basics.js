    // array/massiiv
const array = [1,2,3,4,5]

function findMyIndex(array, element){
    return array[element]
    // numbers.indexOf(2)
}

console.log(findMyIndex(array, 4))

function addNumbers(number1, number2){
    return number1 + number2
}

console.log(addNumbers(3,5))

// arrow functions
// const arrow = () => {}
// const arrow = () => (return)

const arrowFunction = (num1, num2) => {
    return num1 + num2
}

console.log(arrowFunction(2,7))

const arrowFunction2 = (num1, num2) => num1 + num2

console.log(arrowFunction2(2,7))

console.log(arrowFunction(3,5) == arrowFunction2(3,5))

// nested

function addNumbers2(num1){
    return function addNumbersNested(num2){
        return num1+num2
    }
}
// teises sulus olev number kutsutakse nested funktsiooniga välja
console.log(addNumbers2(3)(4))

const addNumbers3 = (num1) => {
    return function addNumbersNested(num2){
        return num1+num2
    }
}
console.log(addNumbers3(2)(7))

const addNumbers4 = (num1) => (num2) => num1 + num2;

console.log(addNumbers4(7)(7))

// arrow function printida "hello (nimi)" ja kasutada string literals

const greetUser = (name1) => `Hello, ${name1}!`

console.log(greetUser("Kristel"))

// map

const numberArray = [1, 3, 5, 7, 8, 10]

const map1 = numberArray.map((i) => i+5)
console.log(map1)

const uusMassiiv = numberArray.map((element, index, array) => {
    console.log({
        element, 
        newElement: element +5, 
        "index": index, 
        array})
    return element + 5
})

// filter

const filteredArray = numberArray.filter(num => num < 4)

console.log({filteredArray})

const names = ["Jukujuku", "Mai", "Jaanus", "Anni"]

const data = names.map(name => {
    return {
        name,
        age: name.length + 20,
        email: `${name.toLowerCase()}@company.com`,
        address: `${name} Street 35`,
        username: name.split("").reverse().join("")
    }
})
console.log(data)
console.log(data[0])

const newJuku = {
    ...data[0], //spread syntax - võtab vana objekti ja laseb sellele juurde lisada asju
    height: 175
}

console.log(newJuku)

const evenNewerJuku = {
    ...newJuku,
    age: 99
}

console.log(evenNewerJuku)