
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