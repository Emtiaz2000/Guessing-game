const answer = document.querySelector('#answer');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');

submit.addEventListener('click', () => {
    //console.log(typeof player1Num)
    let winingNum = Math.floor(Math.random() * 6);
    let player1Num = Number(player1.value);
    let player2Num = Number(player2.value);
    if (player1Num === '' && player2Num === '') {
        alert('Please fill the input box');
    } else {
        if (player1Num === winingNum && player2Num === winingNum) {
            answer.textContent = `THE NUMBER IS ${winingNum}  Tie `
            player1.value = '';
            player2.value = '';
        } else if (player1Num === winingNum) {
            what('Player1', winingNum);
        } else if (player2Num === winingNum) {
            what('Player2', winingNum);
        } else {
            answer.textContent = `THE NUMBER IS ${winingNum} Try again! `;
            player1.value = '';
            player2.value = '';
        }
    }

})

function what(name, winingNum) {

    answer.textContent = `THE NUMBER IS ${winingNum}  ${name} win! `
    player1.value = '';
    player2.value = '';
}
reset.addEventListener('click', () => {
    player1.value = '';
    player2.value = '';
    answer.textContent = '';
})
