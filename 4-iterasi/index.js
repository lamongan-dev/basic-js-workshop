
// for (definsi variabel awal;   syarat;   pengolahan variabel awal) {
//     // Blok Code yang dijalankan saat iterasi berjalan
// }

for (let i = 1; i <= 5; i ++) {
    console.log(i)
}

const mahasiswa = [
    {
        nama: "Rudi",
        jurusan: "IT"
    },
    {
        nama: "Hilmi",
        jurusan: "MMB"
    },
    {
        nama: "Dimas",
        jurusan: "Elektro"
    }
]

for (let i = 0; i < mahasiswa.length; i ++) {
    console.log(mahasiswa[i].nama)
}

mahasiswa.forEach(element => {
    console.log(element.nama + ' ' + element.jurusan);
});

