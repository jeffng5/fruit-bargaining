import fruits from './foods.js'


function choice(fruits) {
let num = Math.floor(Math.random() * 10)
    let item = fruits[num]
    console.log(num)
    return item
}


function remove(fruits, item) {
if (fruits.includes(item) === true) {
    return item
} else {
    return undefined
} 

}

export {choice, remove};