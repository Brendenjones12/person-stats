
//Class Stuff
/*function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)*/


//
//
//


//HomeWork
function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const age = f.age.value
    const color = f.color.value
    const stats = document.querySelector('#stats p')
    //stats.textContent = name
    //stats.innerHTML = '<p>' + name+ ',' + ' ' + age + '</p>'
    
    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = `Color: ${color}`
    list.appendChild(colorItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)


    stats.appendChild(list)

    
    // stats.innerHTML = `
    // <p> 
    // ${name}, age ${age}, Fav Color ${color}
    // </p>
    
    stats.style.color = color
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)

