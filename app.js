function navSlide() {
  const burger = document.querySelector(".burger");
  const slide = document.querySelector(".img-slider");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
      slide.classList.toggle("toggle2");
  });
  
}
navSlide();

// Function for validating email
function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }return (false)
}


// Validation

const error = document.getElementById('error')

document.getElementById("reset").addEventListener("click", function(){
  alert("form resetted")
})


document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault()
  const name = this.name.value.trim()
  const email = this.email.value.trim()
  const password = this.password.value
  const confirmpassword = this.confirmpassword.value
  const gender = this.gender.value
  const planchoice = this.planchoice.value
  const agree = this.agreement.checked

  let errorMsg = "";

  if (name.length < 5){
    errorMsg += "Name must be as least 5 character long!<br />"
  }


  let isValid = true;
  // validasi nama
  for (let i = 0; i < name.length; i++){
    let char = name.charAt(i).toLowerCase()
    isValid = isValid && ((char >= 'a' && char <= 'z') || char ==' ')
  }
  if(!isValid){
    errorMsg += "Name must be in alphabet<br />"
  }
// validasi email
  if (!ValidateEmail(email)){
    errorMsg += "Invalid Email!<br />"
  }

// validasi password
if (password.length <= 7){
    errorMsg += "Password must contain more than 7 characters!<br />"
  }

  let hasCaps = false;
  let hasNum = false;
  let noSpace = true;
for (let i = 0; i < password.length; i++){
    let charp = password.charAt(i)
    if (charp >= 'A' && charp <= 'Z'){
        hasCaps = true;
    }
    if (charp >= '0' && charp <= '9'){
        hasNum = true;
    }
    if (charp == ' '){
        noSpace = false;
    }
  }
  if(!hasCaps || !hasNum){
      errorMsg+= "Password must contain 1 Capital letter and 1 Number <br />"
  }
  if (!noSpace){
      errorMsg+= "Password may not contain spaces <br />"
  }

if (confirmpassword != password){
    errorMsg+= "Password confirmation is diffferent to password <br />"
}


// validasi gender
if (gender.length == 0){
    errorMsg += "Please select one of the genders<br />"
  }
// validasi choice
  if (planchoice.length == 0){
    errorMsg += "Please choose one of the plans<br />"
  }
// validasi agreement
  if (!agree){
    errorMsg += "Agreement must be checked<br />"
  }

  error.innerHTML = errorMsg


  if (errorMsg.length == 0){
    alert(`
      name      : ${name}\n
      email     : ${email}\n
      gender    : ${gender}\n
      plan      : ${planchoice}\n
    `
    )
    const additional = prompt("Please input if you have any additional message")
    alert("Your plan choice has been saved, please check your email for confirmation")
  }else{
    alert("Some of the information you entered may be invalid")
  }
})