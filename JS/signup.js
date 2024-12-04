var nameSignup = document.getElementById('name')
var email = document.getElementById('email')
var pass = document.getElementById('password')
var btn = document.querySelector('.btn')
var wrong = document.getElementById('wrongValid')
var suc = document.getElementById('successValid')
var ex = document.getElementById('existsValid')

var accs = []

if (localStorage.getItem('accs')) {
    accs = JSON.parse(localStorage.getItem('accs'))
}

btn.addEventListener('click', function () {
    if (validation()) {
        ex.classList.remove('d-none')
        wrong.classList.add('d-none')
        suc.classList.add('d-none')
    } else {
        if (nameSignup.value != '' && email.value != '' && pass.value != '') {
            var acc = {
                name: nameSignup.value,
                email: email.value,
                pass: pass.value
            }
            accs.push(acc)
            localStorage.setItem('accs', JSON.stringify(accs))
            clear()
            suc.classList.remove('d-none')
            wrong.classList.add('d-none')
            ex.classList.add('d-none')
        }
        else {
            wrong.classList.remove('d-none')
        }
    }
})

function clear() {
    nameSignup.value = null
    email.value = null
    pass.value = null
}
function validation() {
    for (var i = 0; i < accs.length; i++) {
        if (nameSignup.value == accs[i].name && email.value == accs[i].email && pass.value == accs[i].pass)
            return true
    }
    return false
}









