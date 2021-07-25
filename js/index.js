const openModalBUttons = document.querySelectorAll("[data-modal-target]")
const closeModalBUttons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")


openModalBUttons.forEach(button =>{
    button.addEventListener("click",function () {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
        
    })
})

overlay.addEventListener("click",function () {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
    
})
closeModalBUttons.forEach(button =>{
    button.addEventListener("click",function () {
        const modal = button.closest(".modal")
        closeModal(modal)
        
    })
})

function openModal(modal) {
    if (modal==null) return
    modal.classList.add("active")
    overlay.classList.add("active")
        
    
    
}

function closeModal(modal) {
    if (modal==null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
        
    
    
}