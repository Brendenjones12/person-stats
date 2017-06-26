function updateHeading(ev){
   ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = name
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)

function updateDiv(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('#stats')
    heading.textContent = name
}
const Div = document.querySelector('#person-form')
Div.addEventListener('submit', updateDiv)