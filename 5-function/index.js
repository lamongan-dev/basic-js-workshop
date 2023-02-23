// function bernama

function greeting(){
    console.log('Hallo')
}

greeting();

// Annonymous function

const halo = function(){
    console.log('Hallo')
}

halo();

// Annonymous function dalam object

const computer = {
    turnOn(){
        console.log('Computer dinyalakan')
    }
}

computer.turnOn()

// Function argument

function isGenap(x){
    if (x%2 == 0) {
        console.log(`Bilangan ${x} merupakan bilangan genap`)
    }else{
        console.log(`Bilangan ${x} merupakan bilangan ganjil`)
    }
}

isGenap(6)

// function dengan return 

const convertNilai = function(nilai){
    if (nilai > 80) {
        return 'A'
    }else if (nilai > 70 && nilai <= 80 ) {
        return 'AB'
    }else if (nilai > 60 && nilai <= 70) {
        return 'B'
    }else{
        return 'C'
    }
}

const nilaiHuruf = convertNilai(65)
console.log(nilaiHuruf);
