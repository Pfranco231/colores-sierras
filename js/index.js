import placeslapaz from "../json/lapaz.js"
import placesbrochero from "../json/brochero.js"
import placesrabonas from "../json/lasrabonas.js"
import placeslomabola from "../json/lomabola.js"
import placesmerlo from "../json/merlo.js"
import placesclavero from "../json/minaclavero.js"
import placesnono from "../json/nono.js"
import placespozos from "../json/pozos.js"
import placesrosas from "../json/rosas.js"
import placessjavier from "../json/sanjavier.js"


let main = document.getElementById('main')
let onplaces1 = document.getElementById('onplaces1')
let onplaces2 = document.getElementById('onplaces2')
let onplaces3 = document.getElementById('onplaces3')
let onplaces4 = document.getElementById('onplaces4')
let onplaces5 = document.getElementById('onplaces5')
let onplaces6 = document.getElementById('onplaces6')
let onplaces7 = document.getElementById('onplaces7')
let onplaces8 = document.getElementById('onplaces8')
let onplaces9 = document.getElementById('onplaces9')
let onplaces10 = document.getElementById('onplaces10')


function laPaz() {
    console.log("Ejecutando la paz")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placeslapaz.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '470px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardDesp = document.createElement('p')
        cardDesp.className = 'card-text';
        cardDesp.innerText = item.desp;
        divContent.appendChild(cardDesp)

        const cardA = document.createElement('a')
        cardA.classList += 'btn';
        cardA.classList += 'btn-primary';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
}

function lomaBola() {
    console.log("Ejecutando loma bola")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function merlo() {
    console.log("Ejecutando merlo")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function sanJavier() {
    console.log("Ejecutando san javier")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function rosas() {
    console.log("Ejecutando Rosas")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function pozos() {
    console.log("Ejecutando pozos")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function nono() {
    console.log("Ejecutando nono")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function lasRabonas() {
    console.log("Ejecutando las rabonas")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function minaClavero() {
    console.log("Ejecutando mina clavero")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

function brochero() {
    console.log("Ejecutando brochero")
    main.innerHTML = " "
    console.log(placeslapaz)
    
}

onplaces1.addEventListener("click",()=>{
    laPaz();
})

onplaces2.addEventListener("click",()=>{
    lomaBola();
})

onplaces3.addEventListener("click",()=>{
    merlo();
})

onplaces4.addEventListener("click",()=>{
    sanJavier();
})

onplaces5.addEventListener("click",()=>{
    rosas();
})

onplaces6.addEventListener("click",()=>{
    pozos();
})

onplaces7.addEventListener("click",()=>{
    nono();
})

onplaces8.addEventListener("click",()=>{
    lasRabonas();
})

onplaces9.addEventListener("click",()=>{
    minaClavero();
})

onplaces10.addEventListener("click",()=>{
    brochero();
})

