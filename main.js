
form.addEventListener('submit', (e) =>{

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let edad = document.getElementById('edad')
let email = document.getElementById('email')
let terms = document.getElementById('terms')
const form = document.getElementById('form')
const error = document.getElementById('error')
let messages = []

    nombre.value === '' || nombre.value === null ? messages.push('Name is required'): error.innerHTML = messages.join(', ')

    apellido.value === '' || apellido.value === null ? messages.push('Apellido is required'): error.innerHTML = messages.join(', ')

    edad.value === '' || edad.value === null ? messages.push('Edad is required'): error.innerHTML = messages.join(', ')

    email.value === '' || email.value === null ? messages.push('E-mail is required'): error.innerHTML = messages.join(', ')

    terms.checked === false ? messages.push('Debes aceptar los términos y condiciones'): error.innerHTML = messages.join(', ')

    if (messages.length > 0) {
        e.preventDefault()

        error.innerHTML = messages.join(', ')
    }

    const final = document.getElementsByClassName('resultado')

    const html = messages.map(item => {
       
        final.innerHTML = item.value
        dato.appendChild(resultado)
    })
   
})



