fetch('/assets/images/data/content.txt')
    .then((response) => {

        return response.text();

    })
    .then((text) => {

        console.log(text);

    }).catch((error) => {

        console.log('Il y a une erreur');

    });

//Exercice
// let TriggerButton = document.querySelector(".button");
// TriggerButton.addEventListener("click", triggerListener);

const link = document.querySelector('.link');
link.addEventListener('click', onBtnClick)

function onBtnClick(event){
    // arrete le comportement par defaut du lien
    event.preventDefault();

    //Récupere l'élément cliqué
    const clicked_link = event.currentTarget;

    //récupere le href de l'élément cliqué
    const url = clicked_link.getAttribute('href');

    fetch(url)
    .then((response) => {

        return response.text();

    })
    .then((text) => {

        console.log(text);
        const paragraph = document.querySelector('.content');
        paragraph.innerHTML = text;

    }).catch((error) => {

        console.log('Il y a une erreur');

    });
    
}

//Json
fetch('/assets/images/data/content.json')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json.nom);
        console.log(json.list[0])
        json.list.forEach(function(item){
            console.log(item)
        })
    });


//EXERCICE : Fetch Json
const title = document.querySelector('.h1content');
const p = document.querySelector('.pcontent');

fetch('/assets/images/data/heaj.json')
    .then((response) => {

        return response.json();

    })
    .then((json) => {

        console.log(json.name)
        title.innerHTML = json.name;
        p.innerHTML = json.sections[0]


    });



















