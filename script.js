const cards = document.querySelectorAll('.card');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterBtns = document.querySelectorAll('.buttons button');

let current = 0;

const images = Array.from(cards).map(card => card.querySelector('img'));

images.forEach((img,index)=>{

  img.addEventListener('click',(e)=>{
    e.preventDefault();
    current = index;
    showImage();
    lightbox.style.display='flex';
  });

});

function showImage(){
  lightboxImg.src = images[current].src;
}

nextBtn.addEventListener('click',()=>{
  current = (current + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click',()=>{
  current = (current - 1 + images.length) % images.length;
  showImage();
});

closeBtn.addEventListener('click',()=>{
  lightbox.style.display='none';
});

lightbox.addEventListener('click',(e)=>{
  if(e.target === lightbox){
    lightbox.style.display='none';
  }
});

filterBtns.forEach(button=>{

  button.addEventListener('click',()=>{

    document.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const name = button.dataset.name;

    cards.forEach(card=>{

      if(name === 'all'){
        card.style.display='block';
      }
      else if(card.classList.contains(name)){
        card.style.display='block';
      }
      else{
        card.style.display='none';
      }

    });
  });
});