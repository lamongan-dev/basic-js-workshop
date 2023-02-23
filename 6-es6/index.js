// Destructure

// const user = {
//     nama: "Fahmi",
//     usia: 24,
//     alamat: "Lamongan",
//   }
  
// const nama = user.nama
// const usia = user.usia
  
// console.log(nama, usia)

// const arrUser = ['Fahmi', 'Syaifudin']
// const first = arrUser[0];
// const second = arrUser[1];

// console.log(first, second);

const user = {
    nama: "Fahmi",
    usia: 24,
    alamat: "Lamongan",
}
  
const { nama , usia } = user
console.log(nama, usia)


const arrUser = ['Fahmi', 'Syaifudin']
const [ first, second ] = arrUser;
console.log(first, second)
  