// select all bouton and then intert into  array sprid operator
const touches = [...document.querySelectorAll('.bouton')];
// get data key and loop withe map function
const listeKeycode = touches.map(touche => touche.dataset.key);
// show result into scren
const ecran = document.querySelector('.ecran');
// any click
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    // check if there any data storged into value
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '1':
                ecran.textContent = "";
                break;
            case '=':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                // 
                const indexKeycode = listeKeycode.indexOf(valeur);
                // console.log(indexKeycode);
                const touche = touches[indexKeycode];
                // console.log(touche);
                ecran.textContent += touche.innerHTML;
                // ecran.textContent = ecran.textContent + touche.innerHTML;
        }
    }
}