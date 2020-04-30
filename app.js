let key = document.getElementsByClassName('all');
console.log(key)
let audio = document.getElementsByTagName('audio');
console.log(audio[1])

window.addEventListener('keydown', keyDown);

function keyDown(e) {
    console.log(e.keyCode)
    if (e.keyCode == 65) {
        audio[0].play();
        key[0].classList.add('newClass');
        key[0].style.background = "red";
        key[0].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 66) {
        audio[1].play();
        key[1].classList.add('newClass2')
        key[1].style.background = "#4E5FA5"
        key[1].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 67) {
        audio[2].play();
        key[2].classList.add('newClass')
        key[2].style.background = "red"
        key[2].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 68) {
        audio[3].play();
        key[3].classList.add('newClass2')
        key[3].style.background = "#4E5FA5"
        key[3].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 69) {
        audio[4].play();
        key[4].classList.add('newClass2')
        key[4].style.background = "red"
        key[4].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 70) {
        audio[5].play();
        key[5].classList.add('newClass')
        key[5].style.background = "#4E5FA5"
        key[5].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 71) {
        audio[6].play();
        key[6].classList.add('newClass2')
        key[6].style.background = "red"
        key[6].style.transition = "all 0.7s ease";
    } else if (e.keyCode == 72) {
        audio[7].play();
        key[7].classList.add('newClass')
        key[7].style.background = "#4E5FA5"
        key[7].style.transition = "all 0.7s ease";

    }
}

document.addEventListener('keyup', () => {
    key[0].classList.remove('newClass');
    key[0].style.background = "";
    key[1].classList.remove('newClass2');
    key[1].style.background = "";
    key[2].classList.remove('newClass');
    key[2].style.background = "";
    key[3].classList.remove('newClass2');
    key[3].style.background = "";
    key[4].classList.remove('newClass2');
    key[4].style.background = "";
    key[5].classList.remove('newClass');
    key[5].style.background = "";
    key[6].classList.remove('newClass2');
    key[6].style.background = "";
    key[7].classList.remove('newClass');
    key[7].style.background = "";
})



// document.addEventListener('keydown', (event) => {
//     let play = event.keyCode;
//     document.querySelector(`audio[data-key = "${play}"]`).play();
//     document.querySelector('div[data-key ="' + play + '"]').classList.add('playing');
//     document.addEventListener('transitionend', () => {
//         document.querySelector('div[data-key ="' + play + '"]').classList.remove('playing');
//     });
// });