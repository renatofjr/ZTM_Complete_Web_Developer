const array = [1,2,3,4,5]
array.flat()
// (5) [1, 2, 3, 4, 5]

const array2 = [1,[2,3],[4,5]]
array2.flat()
// (5) [1, 2, 3, 4, 5]

const array3 = [1,2,[3,4,[5]]]
array3.flat()
// (5) [1, 2, 3, 4, Array(1)]
array3.flat(2)
// (5) [1, 2, 3, 4, 5]

const jurassicPark = [[1,2],3,4,[5,6],[[[[7]]],8],[9,10]]
jurassicPark.flat(50)
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()
// (3) ['bob', 'sally', 'cindy']

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 7)
// (6) ['1,27', 10, 11, '5,67', '7,87', '9,107']

const userEmail = '      eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail      '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())
// eddytheeagle@gmail.com
// jonnydangerous@gmail

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
const obj = Object.fromEntries(userProfiles)
Object.entries(obj)
// 0: (2) ['commanderTom', 23]
// 1: (2) ['derekZlander', 40]
// 2: (2) ['hansel', 18]

try {
    bob + 'hi'
} catch {
    console.log('you messed up')
}