let hamburger = document.querySelector(".hamburger")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
   
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener
    ("click", () => {
        hamburger.classList.remove("active")
        
}))

document.getElementById("mybtn").onclick = function() {myFunction()}

function myFunction() {
    document.getElementById("mydropdown").classList.toggle("show");
}

let utvonal = [
    "Kezdőoldal",
    "Termékek",
    "Száraztápok",
    "Acana",
    "Pacifica"
]

document.getElementById("tart1").innerHTML = utvonal[0] + " " + "/" + " " + utvonal[1] + " " + "/" + " " + utvonal[2]





