// Aritmatika
const totalNilai = ((1 / 5) * 100) + 10 

// Biasa disebut modulus:
const sisaPembagian = 5 % 2

console.log(totalNilai)
console.log(sisaPembagian)

//Operator perbandingan
const checkNotStrict = sisaPembagian == 1 // true
const checkStrict = sisaPembagian === "1" // false
const checkUndefined = sisaPembagian !== undefined

console.log(checkNotStrict)
console.log(checkStrict)
console.log(checkUndefined)

//Operator Logika
const isHappy = checkNotStrict && checkUndefined
console.log(isHappy);




