// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(function(response){
//         return response.json()
//     }).then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

async function getUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const user = await response.json()
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

getUser();