let utvonal = [
    "Kezdőoldal",
    "Termékek",
    "Száraztápok",
    "Acana",
    "Pacifica"
]

 let elem = document.getElementById("utvonal")
 elem.innerHTML = utvonal[0] + " " + "/" + " " + utvonal[1] + " " + "/" + " " + utvonal[2] + " " + "/" + " " + utvonal[3] + " " + "/" + " " + utvonal[4]

 let elem2 = document.getElementById("tart")
 elem2.innerHTML = utvonal[0] + " " + "/" + " " + utvonal[1] + " " + "/" + " " + utvonal[2] + " " + "/" + " " + utvonal[3]

 /* let hamburger = document.querySelector(".hamburger")
 let navMenu = document.querySelector(".navigacio")
 
 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active")
     navMenu.classList.toggle("active")
 })
 
 document.querySelectorAll(".navlink").forEach(n => n.addEventListener
     ("click", () => {
         hamburger.classList.remove("active")
         navigacio.classList.remove("active")
})) */

