const inputs = document.querySelectorAll('input')
const errorImg = document.querySelector('.error')
const para = document.querySelector('.input-para')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach( input => {
        const div = `<img src="images/icon-error.svg" alt="icon-error" class="error">
        <p class="input-para">${input.name} cannot be empty</p>`


        if(input.value.trim() === ''){
            input.style.border = '2px solid hsl(0, 100%, 74%)'
            input.nextSibling.remove()

            input.insertAdjacentHTML('afterend', div)
        }else{
            input.style.border = ''
            input.nextSibling.textContent = ''
        }
    })
})
