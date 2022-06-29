const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imgContainer = document.getElementById('img-container');
const buttonNext = document.getElementById('next-button');
const buttonPrev = document.getElementById('previous-button');

//inizializzo a 0 l'elemento attivo del carosello
let activeElement = 0;

//forEach che popola l'html di elementi 
images.forEach((element) =>{
    const newDiv = createDiv();
    modifyHTML(newDiv, element); 
    imgContainer.append(newDiv);
});

//prendo tutti i figli dell'img container
const divList = document.getElementById('img-container').children;
//imposto la classe active al primo elemento dell'array
divList[activeElement].classList.add('active');

console.log(divList);


//crea un div
function createDiv (){
    const div = document.createElement('div');
    return div;
};

//modifica innerHtml del div con un template e lo popola con i valori dell'array di items
function modifyHTML (div , imgElement){
    div.innerHTML = `<img src="${imgElement.url}" alt="image" class="img-fluid">
    <h1 class="position-absolute text-white ms_text_shadow">${imgElement.title}</h1>
    <h5 class="position-absolute text-white ms_text_shadow">${imgElement.description}</h5>`;
};

//permette al carosello di scorrere all'immagine successiva
function goNext(){
    divList[activeElement].classList.remove('active');
    activeElement++; 
    divList[activeElement].classList.add('active');
}; 

//permette al carosello di scorrere all'immagine precedente
function goPrev(){
    divList[activeElement].classList.remove('active');
    activeElement--; 
    divList[activeElement].classList.add('active');
}; 

//eventi al click dei bottoni per scorrere avanti e indietro
buttonNext.addEventListener('click', goNext);
buttonPrev.addEventListener('click', goPrev);