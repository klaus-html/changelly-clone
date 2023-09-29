function myFunction (){
    document.querySelector('.drop-content').classList.toggle('show');
    document.querySelector('.drop-content-2').classList.remove('show-2')
}

function mySecondFunction() {
    document.querySelector('.drop-content-2').classList.toggle('show-2');
    document.querySelector('.drop-content').classList.remove('show')
}

window.onclick = function(e) {
    if (!e.target.matches('.btn')) {
    var myDropdown = document.querySelector(".drop-content"),
        myDropdown2 = document.querySelector('.drop-content-2')
      if(myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      } if(myDropdown2.classList.contains('show-2')) {
        myDropdown2.classList.remove('show-2');
    }
    } 
  }

  let x = document.querySelector('.buy');
  function myExchange() {
    document.querySelector('.exchange-4').classList.toggle('exc');
    document.querySelector('.buy').classList.add('buy-2');
    x.style.display = 'none';
  }