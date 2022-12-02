const menu = document.querySelector(".menu")
const menuTwo =  document.querySelector(".menu-closed");
const navBarTwo = document.querySelector("#navbarTwo");
const navBarLink = document.querySelectorAll(".navLinks")

console.log(navBarLink);

menu.addEventListener('click', () => {
    navBarTwo.style.right = "0";
    navBarTwo.style.boxShadow = "20px 20px 20px 250px rgba(0, 0, 0, 0.5)";
    
});

menuTwo.addEventListener('click', () => {
    navBarTwo.style.right = "-150%";
    navBarTwo.style.boxShadow = "none";
});

for(let i = 5; i <= 9; i++) {
    navBarLink[i].addEventListener('click', () => {
        navBarTwo.style.right = "-150%";
        navBarTwo.style.boxShadow = "none";
        
    })
}
