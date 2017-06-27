

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
function updateHeading(ev){
    ev.preventDefault()
    const f = event.target
    const name = f.personName.value
    const age = f.age.value
    const stats = document.querySelector('#stats')
    //stats.textContent = name
    //stats.innerHTML = '<p>' + name+ ',' + ' ' + age + '</p>'
    stats.innerHTML = `
    <p> 
    ${name}, age ${age}
    </p>
    `
}
const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)

//
//
//
//Bonus

/*function updateColor(ev){
    ev.preventDefault()
    const f =event.target
    const name = f.color.Value
    const stats = document.querySelector('#stats p')
    ArrayList.push(name)
    stats.textContent = ArrayList
}


const color = document.querySelector('#colorForm')
color.addEventListener('submit', updateColor)*/
