let btnPartager = document.getElementById('btnPartager');

btnPartager.addEventListener('click', () => {
    let backroundpopup = document.querySelector('.backround-popup');
    backroundpopup.style.display = "flex"
})

let btnQuiter = document.querySelector('.btnQuiter');
btnQuiter.addEventListener('click', () => {
    let nom = document.getElementById('nom')
    let email = document.getElementById('email')
    let backroundpopup = document.querySelector('.backround-popup');
    backroundpopup.style.display = "none"
    nom.value = ''
    email.value = ''
})

// teste 

let nomUtilisateur = document.getElementById('nom')
nomUtilisateur.addEventListener('change', () => {
    console.log(nom.value)
})
