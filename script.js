function login(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if ((user === 'Fares' || user === 'Mohamed_Hany' || user === 'Eskafy' || user === 'Shabaka' || user === 'Mostafa' || user === 'Mohamed_tareq'  ) && pass == '123') {
        alert("Login Successful");
        window.location.href= 'index.html'
    } else {
        alert("Wrong Entry !");
    }
}



function signup() {
    var user1 = document.getElementById("username2").value;
    var mail2 = document.getElementById("mail").value;
    var pass3 = document.getElementById("pass").value;

    if (user1 === '' || mail2 === '' || pass3 === '' ) {
        alert('Please fill in all the fields');
        return;
      }
    
    // Implement your signup logic here, such as storing user credentials in a database
    
    // For demonstration purposes, let's assume signup is successful
    alert("Signup Successful");
    
    window.location.href= 'index.html'
}




const logregBox = document.querySelector('.login-register-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});






const paragraph = document.getElementById('paragraph1');

    paragraph.addEventListener('mouseover', function() {
      paragraph.style.backgroundColor = 'red';
    });