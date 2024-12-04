var email = document.getElementById('email')
var pass = document.getElementById('password')
var btn = document.querySelector('.btn')
var wrongValid = document.getElementById('wrongValid')
var wrongAcc = document.getElementById('wrongAcc')

var accs = []
accs = JSON.parse(localStorage.getItem('accs'))

btn.addEventListener('click', () => {
    if (email.value == '' || pass.value == '') {
        wrongValid.classList.remove('d-none')
        wrongAcc.classList.add('d-none')
    }
    else {
        if (validation()) {
            location.href = './home.html'
        }
        else {
            wrongValid.classList.add('d-none')
            wrongAcc.classList.remove('d-none')
        }
    }
})

function validation() {
    if(accs != null){
    for (var i = 0; i < accs.length; i++) {
        if (email.value == accs[i].email && pass.value == accs[i].pass) {
            sessionStorage.setItem('acc', accs[i].name)
            return true;
        }
    }
    return false;
    }
    else {
        wrongAcc.classList.remove('d-none')
    }
}

