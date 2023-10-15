const display = document.getElementsByTagName('span')[0];
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let num = 0;
incrementBtn.addEventListener('click', () => {
    num++;
    display.textContent = num;
});
decrementBtn.addEventListener('click', () => {
    num--;
    display.textContent = num;
});
resetBtn.addEventListener('click', () => {
    num = 0;
    display.textContent = num;
});





