$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//Buoc1
const username = document.querySelector('#username');
const userpassword = document.querySelector('#userpassword');
const useremail = document.querySelector('#useremail');
const flogin = document.querySelector('#flogin');
const code = document.querySelector('#code');
const inputCode = document.querySelector('#input-code')
//Buoc2
flogin.addEventListener('submit', e => {
    if (!validatorTest(username.value)) {
        setError(username);
        e.preventDefault();
    }
    else {
        setSuccess(username);
    }
    if (!validatorPass(userpassword.value)) {
        setError(userpassword);
        e.preventDefault();
    }
    else {
        setSuccess(userpassword);
    }
    if (!validatorEmail(useremail.value)) {
        setError(useremail);
        e.preventDefault();
    }
    else {
        setSuccess(useremail);
    }
    
});

//Buoc3
function setError(ele) {
    const prele = ele.closest('.form-group');
    prele.classList.add('error');
}

function setSuccess(ele) {
    ele.closest('.form-group').classList.remove('error');
}

//Buoc4
function validatorTest(input) {
    // if (input.length === 0) {
    //     return false;
    // }
    // return true;
    const regex = /^\w{6,}$/;
    return regex.test(input);
}
function validatorPass(input) {
    const regex = /^(?=.*\d)(?=.*[A-Z])[\s\S]{5,}$/;
    return regex.test(input);
}
function validatorEmail(input) {
    const regex = /^\w+(\.?\w+)*@[a-z0-9]+(.\?[a-z0-9]+)*(\.[a-z]{2,6})+$/;
    return regex.test(input);
}
//Captcha

window.addEventListener('load', () => {
    code.textContent = createRandomCode();
});
function createRandomCode() {
    let l = "";
    for (let index = 0; index < 4; index++) {
        let r = Math.floor(Math.random() * 10);
        l += r + "";
    }         
    return l;       
}
function checkInputCode(inputCode){
    if (inputCode == l) {
        return true;
    }
    return false;
}

