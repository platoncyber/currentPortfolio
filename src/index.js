var options = {
    chart: {
          type: 'donut'
    },
    series: [10, 10, 7, 1],
    labels: ['CSS3', 'HTML5', 'INDEX.JS', 'REACT.JS'],
  
  }



var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();












const bot = document.querySelector('#bot');
const close_form = document.querySelector('#close-form');
let rightBtn = document.querySelector('#slider-right');
let leftBtn = document.querySelector('#slider-left');
let sliderContent = document.querySelector('#slider_content');

let sliderHaeading = document.querySelector('#slider-heading');
let sliderImg = document.querySelector('#slider-img');
let sliderTitle = document.querySelector('#slider-title');
let sliderRepo = document.querySelector('#slider-repo');
let sliderLink = document.querySelector('#slider-link');


let isVisible = false


function openForm(){
  let form = document.querySelector('.bot_form');
  if(isVisible){
    form.style.display = 'none';
    isVisible = false;
  }else{
    form.style.display = 'flex';
    isVisible = true;
  }
}


bot.addEventListener('click', openForm);



const data = [
  { name: 'Dragon combat',
  title:'Прототип Хамстер комбат таем и получаем коины',
  link:'https://platoncyber.github.io/dragoncombat/',
  repo:'https://github.com/platoncyber/dragoncombat.git',
  img:'./img/dragon.png'
  },
   {  name: 'coffee machine',
      title:'Прототип кофе машины',
      link:'https://github.com/platoncyber/LiveSearch.git',
      repo:'',
      img:'./img/i.webp'
     },
      { name: 'live search',
        title:'Прототип live search системы',
        link:'',
        repo:'',
        img:'./img/lupa.png'
      }

];


var typed = new Typed('#element', {
  strings: ['создавать сайты', 'создавать web игры','создавать репозитории'],
  typeSpeed: 50,
  loop:true,

});

let currentSlide = Math.floor(data.length / 2);
 
function handleLeft(){
     if(currentSlide > 0){
            currentSlide--;
            loadSliderData(data[currentSlide]);
     }else{
            currentSlide = data.length - 1;
            loadSliderData(data[currentSlide]);
     }
}
function handleRight(){
     if(currentSlide < data.length - 1){
            currentSlide++;
            loadSliderData(data[currentSlide]);
     }else{
            currentSlide = 0;
            loadSliderData(data[currentSlide]);
     }
}


rightBtn.addEventListener('click', handleRight);
leftBtn.addEventListener('click', handleLeft);




function loadSliderData(obj){
  const{ img, name, title, link, pero} = obj;
  sliderImg.src = img;
  sliderHaeading.innerHTML = name;
  sliderTitle.innerHTML = title;
  sliderLink.href = link;
  sliderRepo.href = pero;
}



