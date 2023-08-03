//EJ1 
const ej1 = (a , b) => {
    return a + b
}

console.log(ej1(2,5))

//EJ2

const ej2 =(arr) => {
    return arr.sort()
}

let arr = [4,5,1,8,2,4]

console.log(ej2(arr));

//EJ3

let vector = [12,5,3,9,7,6,4,2]


pares = vector.filter((num) => {
    return num % 2 === 0
})

console.log(pares);

let elementoEj3 = document.getElementById("ej3")
elementoEj3.innerHTML = pares


//EJ4
let arrej4 = [2,4,5,3,12,455,23,55]
let max = Math.max(...arrej4)
console.log(max);

