

/*function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)*/


//HomeWork
function updateDiv(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const Div = document.querySelector('#stats')
    Div.textContent = name
    
}

const Change = document.querySelector('#person-form')
Change.addEventListener('submit', updateDiv)

//
//
//
//Bonus

/*function updateColor(ev){
    ev.preventDefault()
    const f =event.target
    const name = f.color.Value
    const stats = document.querySelector('#stats')
    ArrayList.push(name)
    stats.textContent = ArrayList
}


const color = document.querySelector('#colorForm')
color.addEventListener('submit', updateColor)*/
