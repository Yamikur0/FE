//lay du lieu
const flogin = document.querySelector('#flogin');
const username = document.querySelector('#username');
const id = document.querySelector('#id');
const captcha = document.querySelector('#captcha');
const random = document.querySelector('.random');
//bat su kien nhan nut
flogin.addEventListener('submit', (e) => {
    //check staff name
    if (!validateStaffName(username.value)) {
        setError(username);
        e.preventDefault();
    } else {
        setSuccess(username);
    }
    //check staff id
    if (!validateID(id.value)) {
        setError(id);
        e.preventDefault();
    } else {
        setSuccess(id);
    }
    //check captcha
    if (!validateCaptcha(captcha.value)) {
        setError(captcha);
        e.preventDefault();
    } else {
        setSuccess(captcha);
    }
});

// 
function setError(ele) {
    ele.closest('.form-group').classList.add('error');
};

function setSuccess(ele) {
    ele.closest('.form-group').classList.remove('error');
}
//Kiem tra ten staff
function validateStaffName(inputValue) {
    const regex = /^([A-Za-z0-9]+-?){8,}$/;
    return regex.test(inputValue);
}
//Kiem ra staff id
function validateID(inputValue) {
    const regex = /^\d{4}[a-zA-Z]{2}\d{3}$/;
    return regex.test(inputValue);
}
// random so va noi chuoi
let num;
let str = "";
for (let index = 0; index < 4; index++) {
    num = getRandomInt(0, 9);
    str += num + "";

}
//hien thi so random
random.textContent = str;

//kiem tra captcha nguoi dung nhap
function validateCaptcha(inputValue) {
    if (inputValue == str) {
        return true;
    }
    return false;
}
//random so
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}