const profile = {
    nama: "Fahmi",
    umur: 24,
    alamat: "Lamongan",
    sedangSedih: false,
    hobby: ['makan'],
    tampilkan(){
        console.log(`${this.nama} berumur ${this.umur} alamat ${this.alamat}`)
    }
}

profile.tampilkan()