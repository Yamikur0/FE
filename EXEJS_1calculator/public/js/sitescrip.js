const divClick = document.querySelectorAll('.cal-btn');
divClick.forEach(element => {
    element.addEventListener('click', (e) => {
        let a = e.currentTarget.innerHTML;
        if (a == 'Enter') {
            result.innerHTML = eval(operation.innerHTML);
        } else if (a == 'C') {
            operation.innerHTML = "";
            result.innerHTML = 0;
        } else if (a == '+' || a == '-' || a == '*' || a == '/'){
            
        } else {
            operation.innerHTML += a;
        }
        
    });
});
