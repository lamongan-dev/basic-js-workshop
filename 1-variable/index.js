let merk = "Honda";
let tahun = "2022";

console.log('mobil ini bermerk: ' + merk + ' keluaran tahun ' + tahun);

// mutasi / perubahan nilai
var nama = "Adit";
let umur = 21;
const gender = "Laki laki"; 

nama = "Putri";
umur = 18;
// gender = "Perempuan"; // error
console.log('nama: ' + nama + ' umur ' + umur + ' jenis kelamin ' + gender);


//Lingkup variable
let buah = "Mangga"
function aksesVariableLuar() {
    console.log(buah);
}

aksesVariableLuar();

function ubahVariableLuar(){
    buah = "Anggur";
    console.log(buah);
}

ubahVariableLuar();

let hewan = "Sapi";
function cekScope(){
    let hewan = "Kambing";
    console.log(hewan);
}

cekScope();
console.log(hewan);

