console.log("lu")
const boton = document.querySelector(".boton1");
const logo1 = document.querySelector(".logo");


logo1.classList.add("hidden");

boton.addEventListener("click", () => {
    setTimeout(() => {
        boton.style.transform = "scale(3.5)";
        boton.style.transition = "transform 0.3s ease-in-out";
        
    setTimeout(() => {
        boton.classList.add("hidden");
        logo1.classList.remove("hidden");
        
    })
        
    })
    
})


