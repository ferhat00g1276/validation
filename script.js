let login = document.getElementById("login")
let loginText;
let password = document.getElementById("password")
let passwordText;
let submitButton = document.getElementById("submitButton")
login.addEventListener("input",()=>{
    loginText= login.value
})
password.addEventListener("input",()=>{
    passwordText= password.value
})
submitButton.addEventListener("click",()=>{
    if(loginText.length<8 ){
        alert("login must be at least 8 characters")
    }else if(passwordText<8){
        alert("password must be at least 8 characters")
    }else{
        alert("login and password are valid")
    }
})