let iphones = document.querySelectorAll('.btns')
let openBtns = document.querySelectorAll('[data-open]')
let closeBtns = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.mdbg')
let tradein = document.querySelector('.form-control')


openBtns.forEach( btn => {
  btn.onclick = () => {
      modalBg.style.display = "block"
      modal.style.display = "block"
     setTimeout(() => {
  modalBg.style.opacity = "1"
  modal.style.opacity = "1"
}, 300) 
  }
})



closeBtns.forEach( btn => {
  btn.onclick = () => {
   modalBg.style.opacity = "0"
  modal.style.opacity = "0"
    setTimeout(() => {
  modalBg.style.display = "none"
      modal.style.display = "none"
}, 300) 
  
  }
})


iphones.forEach(btns => {
    btns.onclick = () => {
        iphones.forEach(elem => elem.classList.remove('r'))
        btns.classList.add('r')

    }
});


let h3 = document.querySelector('.h3')





let img = document.querySelector('.img img')
let btns = document.querySelectorAll('button[data-color]')


btns.forEach(btn =>{
  btn.onclick = () => {
    console,log(
      btn.getAttribute('data-color')
    )
  }
})





let colors = document.querySelectorAll('[data-color]')
colors.forEach(color => {
    color.onclick = () => {
        colors.forEach(elem => elem.classList.remove('r'))
        color.classList.add('r')

    }
});
