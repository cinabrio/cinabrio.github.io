console.log(screen.width)



let = pantalla = screen.width



const enlaces = Array.from(document.getElementsByTagName("i"))
const botonesReferencia = Array.from(document.getElementsByClassName("ref")) 



if(pantalla <= 500){
    enlaces.forEach(e =>{
        e.addEventListener("click", (e)=>{
            const padre = e.target.parentNode;
            const hijo = padre.children[1]
            
            for (let index = 0; index < enlaces.length; index++) {
                enlaces[index].classList.remove("contacto")
                const element = enlaces[index].parentNode.children[1];
                element.classList.replace("contacto-visible","contacto")
                console.log(element)
                
            }
            hijo.classList.toggle("contacto-visible")
            e.target.classList.toggle("contacto")
        })
    })
}


botonesReferencia.forEach(e=>{
    e.addEventListener("click", (e)=>{
        
        const padre = e.target.parentNode;
        padre.children[2].classList.toggle("ref-visible")
        if(e.target.textContent === "cerrar"){
            e.target.textContent = "Referencia"    
        }else{
            e.target.textContent = "cerrar"
        }
         
    })
})