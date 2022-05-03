const productImages = document.getElementsByClassName('product-image');
const productImagesArray = Array.from(productImages)


productImagesArray.forEach(function (image) {
  image.addEventListener('mouseover', showBtns);
  image.addEventListener('mouseout', hideBtns);
  function showBtns() {
    image.children[1].classList.remove('btn-hidden');
    image.children[2].classList.remove('btn-hidden');
  }
  function hideBtns() {
    image.children[1].classList.add('btn-hidden');
    image.children[2].classList.add('btn-hidden');
  }
})
// window scroll event
const navBar = document.getElementById('navbar');
const linksArray = Array.from(document.getElementsByClassName('nav-link'));
window.onscroll = function () { navBarWhite() }

function navBarWhite() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navBar.className = 'navbar navbar-white';
    linksArray.forEach((link) => {
      link.className = 'nav-link txt-black'
    })
  } else {
    navBar.className = 'navbar';
    linksArray.forEach((link) => {
      link.className = 'nav-link'
    })
  }
}
