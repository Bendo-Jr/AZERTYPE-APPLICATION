let motsPropose = ["Application", "Dactylo", "Rapide"];
let phrasePropose = ["Je suis content", 'Tu es content', 'Il est content']

function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".votreScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
    
}

function afficherProposition (proposition) {
    let zoneProposition = document.querySelector('.zoneProposition');
    zoneProposition.innerText = proposition
}

function lancerJeu() {
    let score = 0
    let i = 0

   let inputEcriture = document.getElementById('inputEcriture')
   let btnValidation = document.getElementById('btnValidation');
   afficherProposition(motsPropose[i])
    inputEcriture.value = ''
btnValidation.addEventListener('click', () => {
    if(inputEcriture.value === motsPropose[i]){
        score++
    }
    inputEcriture.value = ''
    i++
    afficherResultat(score, i)
   
if (motsPropose[i] === undefined) {
    afficherProposition('Le jeu est fini')

    btnValidation.disabled = true
}else {
    afficherProposition(motsPropose[i])
}
})
afficherResultat(score, i)
}

lancerJeu();

