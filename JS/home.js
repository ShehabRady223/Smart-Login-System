var btnOut = document.querySelector('.btn-outline-warning')
var account = document.querySelector('#account')

btnOut.addEventListener('click',()=>{
    // sessionStorage.removeItem('acc')
    history.back();
})

// console.log(sessionStorage.getItem('acc'));


account.innerHTML=`Welcome ${sessionStorage.getItem('acc')}`