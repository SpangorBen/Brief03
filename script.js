// NAVBAR

const header = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
    header.classList.toggle("fixed", window.scrollY > 0);
});

// FAQ

const qst = document.querySelectorAll(".qst");

qst.forEach((qst)=> {
    qst.addEventListener('click',()=>{
        const answr = qst.nextElementSibling;
        if (answr.style.display =='flex'){
            answr.style.display= 'none';
        }
        else{
            answr.style.display= 'flex';
        }
    })
})

// HIDE

const elems=[".left", ".right", ".titre"];

    for(let i = 0; i < elems.length; i++)
    {
        let elem = document.querySelectorAll(elems[i]);
        elem.forEach((elem)=> {
            window.addEventListener('scroll', ()=>{
                const elemTop = elem.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

            if (elemTop < windowHeight){
                elem.classList.add('visible');
            }
            else{
                elem.classList.remove('visible');
            }
            })
        })
    }

// Login

const btnIn = document.getElementById("in1");
const btnUp = document.getElementById("up");

const signIn = document.querySelector(".sign-in");
let signUp = document.querySelector(".sign-up");

if(btnUp){

    btnUp.addEventListener('click', ()=>{
        if (signUp.style.display == 'none'){
        signUp.style.display = 'flex';
    }
    else{
        signUp.style.display = 'none';
    }
})
}

if(btnIn){

    btnIn.addEventListener('click', ()=>{
        if (signUp.style.display == 'none'){
        signUp.style.display = 'flex';
    }
    else{
        signUp.style.display = 'none';
    }
})
}


// Burger Menu
const burger = document.querySelector(".burger");
const navUl = document.querySelector(".nav-ul");

if(burger)
{
    burger.addEventListener('click', ()=>{
        burger.classList.toggle("active");
        navUl.classList.toggle("active");
    })
}


// Regex

// const formIn = document.getElementById("in");

// formIn.addEventListener("click", checkEmail);
// formIn.addEventListener("click", checkPassword);

// function checkEmail() {
//     let email = document.getElementById("email");
//     let emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-z]{2,}$/;

//     if (emailRegex.test(email.value)) {
//         alert("Nice");
//         // email.classList.add("success");
//         // email.nextElementSibling.style.display = "none";
//     }else{
//         alert("NOO");
//         // email.classList.add("error");
//         // email.nextElementSibling.style.display = "block";
//     }
// }

// function checkPassword(){
//     let password = document.getElementById("password");
//     let passRegex = /^[a-zA-Z0-9]{8,}/;

//     if (passRegex.test(password.value)) {
//         alert("Nice");
//         // email.classList.add("success");
//         // email.nextElementSibling.style.display = "none";
//     }else{
//         alert("NOO");
//         // email.classList.add("error");
//         // email.nextElementSibling.style.display = "block";
//     }
// }

const regex = {
    name: /^[a-z\d ]{5,12}$/i,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
    // email: /^([a-z\d.-]+)@([a-z-]+).([a-z]{1,3})(.[a-z]{1,3})?$/,
    // email: /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-z]{2,}$/,
    // password: /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%*?&#]).{8,}$/,
    // password: /^[a-zA-Z0-9]{8,}/,
    password: /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,}$/,
    telephone: /^(06)[\d]{8}$/,
}

let inputs = document.querySelectorAll('input');

function validate(input, regex) {
    if(regex.test(input.value)){
        input.className = 'valid';
        // input.nextElementSibling.style.display = "none";
    } else {
        input.className = 'invalid';
        // input.nextElementSibling.style.display = "block";
    }
}

inputs.forEach(input => input.addEventListener(
  'focusout', function(event) {
    validate(event.target, regex[event.target.attributes.name.value])
  }
));