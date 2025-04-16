window.addEventListener('load', () => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
  });

function menuOpen() {
  let menu = document.getElementById('menu')

  if(menu.style.display == 'flex') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'flex'
  }
}