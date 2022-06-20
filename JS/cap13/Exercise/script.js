// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

let xCount = 0
let yCount = 0
let arrayO = []

function orderArray(arr) {

    arr.sort(function(a, b) {
        return a - b;
    })
    
    arr.forEach(function(num, i) {
        if (arr[i] === arr[i + 1]) {
            xCount++
        } else {
            arrayO[yCount] = arr.slice(i - xCount, i + 1)
            xCount = 0
            yCount++
        }  
    })
} 

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]

let array = [1, '2', '3', 2]
let arrayFinal = []
let x = 0

function orderArrayType(arr) {
    let arrayS = arr.filter(function(num, i) {
        return (typeof arr[i] === 'string')
    })
    let arrayN = arr.filter(function(num, i) {
        return (typeof arr[i] === 'number')
    })

    if (arrayN.length > 0) {
        arrayFinal[x] = arrayN.slice(0, arrayN.length)
        x++
    }

    if (arrayS.length > 0) {
        arrayFinal[x] = arrayS.slice(0, arrayS.length)
        x++
    }
    
}

orderArrayType(array)
arrayFinal


//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]

let answer = [1,2,3,4,5,6,7,8,9,10]
let target = 14
let arrayN = []
let array = []

function targetExist(arr, tar) {
    arr.forEach(function(num, i) {
        //debugger
        let findN = arr.find(elem => elem === (tar - num))
        if (findN && findN != num && (!arrayN.find(elem => elem === num))) {
            arrayN.push(num)
            arrayN.push(findN)
            array = [num, findN]
            console.log(array)
            return array
        }
    })
}

targetExist(answer, target)


//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats
// so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function hexToRgb(hex) {
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    return hex
}
hexToRgb("#0033ff")

function rgbToHex(r, g, b) {
    let rgb = (r << 16) | (g << 8) | (b << 0)
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
rgbToHex(0, 51, 255)