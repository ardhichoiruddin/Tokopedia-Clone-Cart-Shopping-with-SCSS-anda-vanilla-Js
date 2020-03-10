
// Siema js

const mySiema = new Siema({
    perPage: {
        340 : 1,
        510 : 2,
        768: 3,
        1024: 4,
      },
});
  
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());
  
