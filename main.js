

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')


const setError = (input,message)=>{
    const parentElement = input.parentElement;
    parentElement.classList = 'form-control error'
    const small = parentElement.querySelector('small')
    const successIcon = parentElement.querySelectorAll('i')[0]
    const errorIcon = parentElement.querySelectorAll('i')[1]
    small.innerText = message;
    successIcon.style.visibility = 'hidden'
    errorIcon.style.visibility = 'visible'
}

const setSuccess = (input)=>{
    const parentElement = input.parentElement;
    parentElement.classList = 'form-control success'
    const small = parentElement.querySelector('small')
    const successIcon = parentElement.querySelectorAll('i')[0]
    const errorIcon = parentElement.querySelectorAll('i')[1]
    small.innerText = '';
    successIcon.style.visibility = 'visible'
    errorIcon.style.visibility = 'hidden'
}

const checkInputs =(elements)=>{
    elements.forEach((element)=>{
        if(element.value === ''){
            setError(element,'Input Is Required')
        }
        else{
            setSuccess(element)
        }
    })

  }

const checkEmail = (email)=>{
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email.value)){
        setSuccess(email)
    }
    else{
        setError(email,'Invalid Email')
    }
}


const checkLength=(password,min,max)=>{
    if(password.value.length < min){
        setError(password,`Password must be at least ${min} characters`);
    }
        else if(password.value.length >20){
            setError(password,`Password maximum is ${max}`)
        }
        else{
            setSuccess(password)
        }
}

const checkPassSame=(password,password2)=>{
    if(password.value !== password2.value){
        setError(password2,'Password Do Not Match')
    }
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs([username,email,password,password2]);
    checkEmail(email);
    checkLength(password,6,10)
    checkLength(password2,6,10)
    checkPassSame(password,password2)
})