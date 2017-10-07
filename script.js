const keys = document.querySelectorAll('.key');
  function removeTransition(e){
    if (e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('playing');
  }
  function soundOnClick(){
    const dataKey = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${dataKey}"
    ]`);
    audio.currentTime = 0; // if user presses key repeatedly rewind the sound
    audio.play();
    this.classList.add('playing');
  }
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"
    ]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"
    ]`);
    if (!audio) return; // if user presses key with no sound exit the function
    audio.currentTime = 0; // if user presses key repeatedly rewind the sound
    audio.play();
    key.classList.add('playing');
  }
  window.addEventListener('keydown',playSound);
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
  keys.forEach(key => key.addEventListener('click',soundOnClick));