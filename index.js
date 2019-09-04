//pop = mengeluarkan ke array ke paling akhir
//push = menambah array ke paling akhir
//shift = mengeluarkan ke array ke paling depan
//unshift = menambah array ke paling akhir



let fruits = ['Apple', 'Orange', 'Pear']
console.log(fruits.pop()) // remove "Pear" and alert it
console.log(fruits) // Apple, Orange

let fruits = ['Apple', 'Orange']
fruits.push('Pear')
console.log(fruits) // Apple, Orange, Pear

let fruits = ['Apple', 'Orange', 'Pear']
console.log(fruits.shift()) // remove Apple and alert it
console.log(fruits) // Orange, Pear


let fruits = ['Orange', 'Pear']
fruits.unshift('Apple')
console.log(fruits) // Apple, Orange, Pear


let fruits = ['Apple']
fruits.push('Orange', 'Peach')
fruits.unshift('Pineapple', 'Lemon')
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits)

let fruits = ['Banana']
let newFruits = fruits // copy by reference (two variables reference the same array)
console.log(newFruits === fruits) // true
newFruits.push('Pear') // modify the array by reference
console.log(fruits) // Banana, Pear - 2 items now

//for...of
const fruits = ['Apple', 'Orange', 'Plum']

// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit)
}

// much better than this
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index]
  console.log(fruit)
}

//for...in
const array = ['Apple', 'Orange', 'Pear']

for (let key in array) {
  console.log(array[key]) // Apple, Orange, Pear
}

for (let index in array) {
  console.log(array[index]) // Apple, Orange, Pear
}

new Array()
const fruits = new Array('Apple', 'Pear', 'etc')



const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(matrix[1][1]) // 5, the central element


const matrix = [
  [[11, 12, 13], [21, 22, 23], [31, 32, 33]],
  [[41, 42, 43], [51, 52, 53], [61, 62, 63]],
  [[71, 72, 73], [81, 82, 83], [91, 92, 93]]
]

console.log(matrix[0][1][2]) // 23


//array to string//
const data = [1, 2, 3]

console.log(data) // 1,2,3
console.log(String(data) === '1,2,3') // true

