window.addEventListener('keydown', function(e) {

    // keydown == キーボードを押した時
    // アルファベットのキーコードが表示される
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
});


// window.addEventListener('keydown', function(e) {
//     if(e.keyCode == 13) {
//         // this.console.log(123);

//     }

// });


