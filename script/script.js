let motsPropose = ["application", "dactylo", "rapide", "valeur", 'fruit', 'magnifique', 'cool', 'pouvoir', 'content', 'ma', 'seul', 'plan'];
let phrasePropose = ["je suis content", 'tu es content', 'il est content', 'elle est content', 'nous sommes content', 'vous êtes content', 
    'ils sont content', 'elles sont content']

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
    let listeProposition = motsPropose

   let inputEcriture = document.getElementById('inputEcriture')
   let btnValidation = document.getElementById('btnValidation');
   afficherProposition(listeProposition[i])
    inputEcriture.value = ''
btnValidation.addEventListener('click', () => {

    if(inputEcriture.value === listeProposition[i]){
        score++
    }
    inputEcriture.value = ''
    i++
    afficherResultat(score, i)
   
if (listeProposition[i] === undefined) {
    afficherProposition('Le jeu est fini')

    btnValidation.disabled = true
}else {
    afficherProposition(listeProposition[i])
}
})

let inputRadio = document.querySelectorAll('input[type=radio]');
for (let index = 0; index < inputRadio.length; index++) {
    inputRadio[index].addEventListener('change', () => {
        if (inputRadio[index].value === '1') {
          listeProposition = motsPropose
        } else if (inputRadio[index].value === '2') {
            listeProposition = phrasePropose
        }
        afficherProposition(listeProposition[i])
    });
   
}


afficherResultat(score, i)
}

lancerJeu();

