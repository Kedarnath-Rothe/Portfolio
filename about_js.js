// Dark-Light mode

var icon = document.getElementById('sun-moon');

icon.classList.add('sun');

icon.addEventListener('click', ()=>{
  document.body.classList.toggle('light')

  if(document.body.classList.contains('light')){
    icon.src="images/moon.png"
    icon.classList.remove('sun');
    icon.classList.add('margine');
  }
  else{
    icon.src="images/sun.png"
    icon.classList.add('sun');
    icon.classList.remove('margine');
  }
})