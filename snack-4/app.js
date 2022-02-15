// creazione array con nomi invitati alla festa
const nomiInvitati = [
    "marco",
    "pietro",
    "luciano",
    "luca",
    "mario"
];
console.log(nomiInvitati)
// inserimento del nome da parte dell'utente
let userName = prompt('inserisci il tuo nome')

// controllo se il nome è tra gli invitati
let risulato = false
for(i=0;i<nomiInvitati.length;i++){
    if (userName === nomiInvitati[i]){
        risulato = true
    } 
}
    if(risulato){
        alert('benvenuto alla festa')
    } else{
        alert('il tuo nome non è tra gli invitati ')
    }


