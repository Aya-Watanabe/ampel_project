//NAV 

const navbtn = document.getElementById("nav-button");
const navItems = document.getElementById("nav-items");
const humberger = document.getElementById("hamburger-icon");

navbtn.addEventListener("click",() => {
   navItems.classList.toggle("visible");
})


//COCNTACT FORM VALIDATION

const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const inquiry = document.getElementById("inquiry");

name.addEventListener('blur', (e) => {
  e.preventDefault();
  checkNameInputs();
});

phone.addEventListener('blur', (e) => {
  e.preventDefault();
  checkPhoneInputs();
});

email.addEventListener('blur', (e) => {
  e.preventDefault();
  checkEmailInputs();
});

inquiry.addEventListener('blur', (e) => {
  e.preventDefault();
  checkInquiryInputs();
});

function checkNameInputs(){
  const nameValue = name.value.trim();

  if(nameValue === ''){
    setErrorFor(name, "お名前は必須となっております。");
  }
  else{
    setSuccessFor(name);
  }
};

function checkPhoneInputs(){
  const phoneValue = phone.value.trim();

  if(phoneValue === ''){
    setErrorFor(phone, "お電話番号は必須となっております。");
  }
  else{
    setSuccessFor(phone);
  }
};

function checkEmailInputs(){
  const emailValue = email.value.trim();

  if(emailValue === ''){
    setErrorFor(email, "メールアドレスは必須となっております。");
  }else if(!isEmail(emailValue)){
    setErrorFor(email, "有効なメールアドレスではありません。");
  }
  else{
    setSuccessFor(email);
  }
};

function checkInquiryInputs(){
  const inquiryValue = inquiry.value.trim();

  if(inquiryValue === ''){
    setErrorFor(inquiry, "質問事項をご記入ください。");
  }
  else{
    setSuccessFor(inquiry);
  }
};

//setErrorFor FUNCTION
function setErrorFor (input, message) {
  const formItem = input.parentElement; 
  const small = formItem.querySelector('small'); //getting small tag of input
 
  small.innerHTML = message; //change error message
  formItem.className = "form-item error";  //add error class
 
 };
 
 //setSuccessFor FUNCTION
 function setSuccessFor (input) {
   const formItem = input.parentElement; 
  
   formItem.className = "form-item success";  //add error class
  
  };
 
  //isEmail FUNCTION
  function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

