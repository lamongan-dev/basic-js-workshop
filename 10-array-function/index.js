const kota = [
    {
        nama: "Surabaya",
        umr: 4500000
    },
    {
        nama: 'Lamongan',
        umr: 2700000
    },
    {
        nama: 'Gresik',
        umr: 4500000
    },
    {
        nama: 'Pasuruan',
        umr: 4500000
    },
    {
        nama: 'Malang',
        umr: 3200000
    }
]

// const kotaSaja = kota.map(function(value){
//     return value.nama
// })

const kotaSaja = kota.map((value) => {
    return value.nama
})


const lamongan = kota.filter((value) => {
    return value.nama === 'Lamongan'
})

const rataRata = kota.reduce((value, element) => {
    return value + element.umr
}, 0) / kota.length

const umrTerkecil = kota.reduce((value, element, index) => {
    if (index == 0) {
        return element.umr
    }
    return value < element.umr ? value : element.umr
}, 0)

console.log(kotaSaja)
console.log(lamongan)
console.log(rataRata)
console.log(umrTerkecil)


