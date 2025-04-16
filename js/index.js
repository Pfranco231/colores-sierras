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

onplaces1.addEventListener("click",()=>{
    console.log("Ejecutando la paz")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placeslapaz.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
})

onplaces2.addEventListener("click",()=>{
    console.log("Ejecutando loma bola")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placeslomabola.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
})

onplaces3.addEventListener("click",()=>{
    console.log("Ejecutando merlo")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesmerlo.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces4.addEventListener("click",()=>{
    console.log("Ejecutando san javier")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placessjavier.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces5.addEventListener("click",()=>{
    console.log("Ejecutando Rosas")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesrosas.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces6.addEventListener("click",()=>{
    console.log("Ejecutando pozos")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placespozos.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces7.addEventListener("click",()=>{
    console.log("Ejecutando nono")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesnono.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces8.addEventListener("click",()=>{
    console.log("Ejecutando las rabonas")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesrabonas.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces9.addEventListener("click",()=>{
    console.log("Ejecutando mina clavero")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesclavero.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

onplaces10.addEventListener("click",()=>{
    console.log("Ejecutando brochero")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.gap = '15px';



    // Ejecucion de div y Cards
    
    const cards = placesbrochero.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        divCard.style.borderRadius = '15px';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = '#';
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        return divCard;
    })

    divContainer.append(...cards)
    main.appendChild(divContainer)
    
    
})

