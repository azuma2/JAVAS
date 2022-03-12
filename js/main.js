window.addEventListener( 'resize', function() {
// リサイズ時に行う処理
  
  
  const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
});
  
}, false );