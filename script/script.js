function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.getElementById("spanScore")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

function lancerJeu() {
    let score = 0
    

    let inputEcriture = document.getElementById('inputEcriture');
inputEcriture.addEventListener('keydown', (event) => {
   event.target.value
})

inputEcriture.value = ''
let btnValidation = document.getElementById('btnValidation');
btnValidation.addEventListener('click', () => {
    console.log(inputEcriture.value)
    inputEcriture.value = ''
})
}

lancerJeu();

document.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
    btnValidation.click();
    console.log('clique')
}
})