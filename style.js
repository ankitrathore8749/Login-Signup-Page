const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});
  
document.addEventListener('DOMContentLoaded', function () {
  
  const loginForm = document.querySelector('form.login');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    
    console.log("Login Form Submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Login Successful!\nEmail: ${email}`);
  });

  const signupForm = document.querySelector('form.signup');
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = signupForm.querySelector('input[type="text"]').value;
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Form Submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Signup Successful!\nEmail: ${email}`);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const loginRadio = document.getElementById('login');
  const signupRadio = document.getElementById('signup');
  const carouselImage = document.getElementById('carouselImage');

  function updateImage() {
    if (loginRadio.checked) {
      carouselImage.src = 'assets/Images/login.gif'; 
    } else if (signupRadio.checked) {
      carouselImage.src = 'assets/Images/sign-up.gif'; 
    }
  }
  
  loginRadio.addEventListener('change', updateImage);
  signupRadio.addEventListener('change', updateImage);

  updateImage();
});



