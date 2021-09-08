const form = document.getElementById('lotto_entry')

const name = document.getElementById('name')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name required')
    }
    
    if (address.value === '' || address.value == null) {
        messages.push('Address required')
    }
    
    if (phone.value === '' || phone.value == null) {
        messages.push('Phone required')
    }
    
    if (num1.value == num2.value || num1.value == num3.value || num1.value == num4.value || num2.value == num3.value || num2.value == num4.value || num3.value == num4.value) {
        messages.push('Pick 4 different numbers')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})