var element=document.querySelector('#slider');
var sildeshow = bamboo(element,'fade',{
     // autoplay
     autoPlay: true,

     // auto resize image
     autoFitImg: true,
 
     // use JS animation
     jsAnime: true,
 
     // reverse animation
     reverse: true,
 
     // horizontal or vertical
     vertical: false,
 
     // timeout in milliseconds
     timeout: 2000,
 
     // animation speed
     speed: 2000,
 
     // hide pagination bullets
     hideDot: false,
 
     // hide navigation arrows
     hideArrow: false,
 
     // CSS selectors of controls
     prev: document.querySelector('.prev'),
     next: document.querySelector('.next'),
     dots: document.querySelector('.dots') 
});
