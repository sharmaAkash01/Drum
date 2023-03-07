window.addEventListener('keydown',(evt)=>{
    const audio=document.querySelector(`audio[data-key="${evt.keyCode}"]`)
    const key= document.querySelector(`.key[data-key="${evt.keyCode}"]`)
    if(!audio)return;
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing')
})

function removeTransition(ev){
    if(ev.propertyName !== 'transform')return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(el=>el.addEventListener('transitionend',removeTransition))