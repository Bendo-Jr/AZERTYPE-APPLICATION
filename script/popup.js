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

// arrêttez comportement par défaut 

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
     event.preventDefault();
     console.log("Il n’y a pas eu de rechargement de page");
     let baliseNom = document.getElementById('nom');
     let nom = baliseNom.value
     let baliseEmail = document.getElementById('email')
     let email = baliseEmail.value
     console.log(nom, email)

})

