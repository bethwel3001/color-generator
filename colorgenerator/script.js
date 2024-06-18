
document.getElementById('box').addEventListener('click',

  function() {
    this.style.transform = 'rotate(10deg) scale(1.2)';

    setTimeout(() => {
      this.style.transform = 'rotate(0deg)';
      let randomColor = '#' +
      ('000000' + Math.floor(Math.random() *
    16777215).toString(16)).slice(-6);
    this.style.background = randomColor;
    document.getElementById('color-code').innerHTML = 
    randomColor;

  }, 200);
  });