
// Session Storage 
// **** CONTACT.HTML*****
document.getElementById('messageForm').addEventListener('submit', () => {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('messageBox').value;

    const userInput = {name, email, message};
    sessionStorage.setItem(`${name}'s Message`, JSON.stringify(userInput));
});
// ****END CONTACT.HTML******

let toggle = document.getElementById("toggle")

let links = document.getElementById("nav-links")
console.log(links);

let displayNavLinks = () => {
    links.classList.toggle("show")
}