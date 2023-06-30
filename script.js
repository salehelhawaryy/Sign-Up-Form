const sub = document.querySelector('.btn');
sub.addEventListener('click', () => {
    const input1 = document.getElementById('pass');
    const input2 = document.getElementById('passww');

if(input1.value != input2.value){
    const obj = document.querySelector('.imp');
    obj.style.color='red';
}

})
