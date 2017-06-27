
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
    const stats = document.querySelector('#stats')
    //stats.textContent = name
    //stats.innerHTML = '<p>' + name+ ',' + ' ' + age + '</p>'
    stats.innerHTML = `
    <p> 
    ${name}, age ${age}, Fav Color ${color}
    </p>
    `
    stats.style.color = color
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)

