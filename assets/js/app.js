window.addEventListener('keydown', function(e) {

    // keydown == キーボードを押した時
    // アルファベットのキーコードが表示される
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //audioの再生位置を指定 ==> 連続で再生可能になった
    audio.play();
    key.classList.add('playing');


});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));