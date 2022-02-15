// chiedere un numero all'utente
let userNumber = parseInt(prompt('inserisci un numero'))
console.log(userNumber)
// controllo che sia un numero e in caso stampo il cubo
if (isNaN(userNumber)){
    alert('devi inserire un numero')
} else{
    let userNumberCube = userNumber**3
    console.log(userNumberCube)
}