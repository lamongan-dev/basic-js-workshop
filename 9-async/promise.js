const state = true
const myPromise = new Promise((resolve, reject) => {
    if (state) {
      setTimeout(() => {
        resolve("Sukses");
      }, 1000);  
    }else{
      reject('Error karena false')
    }
});

myPromise.then(function(result){
  console.log(result)
}).catch(function(error){
  console.log(error)
})
  