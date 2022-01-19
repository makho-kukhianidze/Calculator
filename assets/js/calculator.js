// Variable block - Start.
let inputScreen = document.querySelector('.screen');
let btn = document.querySelectorAll('.btn'); 
let reset = document.querySelector('.btn-clear'); 
let equal  = document.querySelector('.btn-equal');
// Variable block - End.

// addEventListener block - Start.
// calculator's number - Start.
btn.forEach(function (t) {
  t.addEventListener('click', function (e) {
    let calcNumber = e.target.dataset.num;
    inputScreen.value += calcNumber;
  })
});
// calculator's number - End.

// calculator's equal - Start.
equal.addEventListener('click', function () {
  if (inputScreen.value === '') {
    inputScreen.value = '????';
  } else {
    let answer = eval(inputScreen.value);
    inputScreen.value = answer;
  }
})
// calculator's equal - End.

// calculator's reset - Start.
reset.addEventListener('click', function () {
  inputScreen.value = '';
});
// calculator's reset - End.
// addEventListener block - End.