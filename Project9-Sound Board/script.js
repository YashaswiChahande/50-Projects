const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();//with HTML5 we have js api for audio elements one  of the method of that api is .play() 
    })

    document.getElementById('buttons').appendChild(btn);
})


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0; //audiotags have the property currentTIme
    })
}