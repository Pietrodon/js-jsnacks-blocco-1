// creazione arrey vuoto
const arreyVuoto = []
// richiesta di 6 numeri da parte dell'utente
let userNumber
for (i=0;i<6;i++){
    let userNumber = parseInt (prompt('inserisci un numero'))
    console.log(userNumber)

    if (userNumber % 2 != 0){
       arreyVuoto.push(userNumber)
    }
    
}
console.log(arreyVuoto)
