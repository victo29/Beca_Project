const fomr = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");


fomr.addEventListener('submit', (event)=>{
    event.preventDefault();

    checkForm()

    
})

function paginaInicial(){
    window.location.href = "home.html"

}

function checkInputUsername(){
    const usernameValue = username.value;
    if (usernameValue === ""){
        errorInput(username, "Nome do usuário obrigatório")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }

    
}

function checkForm(){

    checkInputUsername();
    checkInputEmail();
    
    const formItems = fomr.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item)=>{
        return item.className === "form-content"
    });
    if(isValid){
        paginaInicial()
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    if (emailValue === ""){
        errorInput(email, "Email do usuário obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }

    
}

function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";

}