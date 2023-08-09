let cats = ["Milo", "Otis", "Garfield"]

function beforeEach(){
    cats.length = 0
    cats.push('Milo', 'Otis', 'Garfield');
    return cats
}
// console.log(beforeEach())

function destructivelyAppendCat(name){
    cats.push(name)
    return cats

}
console.log(destructivelyAppendCat("Ralph"))

function destructivelyPrependCat(name){
    beforeEach()
    cats.unshift(name)
    return cats
}
console.log(destructivelyPrependCat("Bob"))

function destructivelyRemoveLastCat(){
    beforeEach()
    cats.pop()
    return cats
}
console.log(destructivelyRemoveLastCat())

function destructivelyRemoveFirstCat(){
    beforeEach()
    cats.shift()
    return cats
}
console.log(destructivelyRemoveFirstCat())

function prependCat(name){
    beforeEach()
    const newCats = [name, ...cats]
    return newCats
}
console.log(prependCat("Arnold"))

function removeLastCat(){
    beforeEach()
    const  slicedCats =  cats.slice(0, 2)
    return slicedCats
}
console.log(removeLastCat())
console.log(cats)

function  removeFirstCat(){
    beforeEach()
    const removeFirst = cats.slice (1)
    return removeFirst
}
console.log(removeFirstCat())

function appendCat(name){
    beforeEach()
    const appendBroom = [... cats, name]
    return appendBroom

}
console.log(appendCat("Broom"))

function practiceSplice(){
    beforeEach()
    cats.splice(0, 2,["Tom", "Jane", "Mum"] )
    return cats
}
console.log(practiceSplice())
