//https://revealjs.com/presentation-size/
//https://revealjs.com/code/ >>> pintar

Reveal.initialize({ 
  mouseWheel: true, controls: true,  progress: true,
  transition: 'slide', // default / none / slide / concave / convex / zoom
  transitionSpeed: 'fast', // default / fast / slow
  backgroundTransition: 'fade', // default / none / fade / slide / convex / concave/ zoom
  respondToHashChanges: true, autoAnimateEasing: 'ease-out',autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false, hash: true, disableLayout: false});


// MENU FIXED
if (window.matchMedia("(max-width: 1024px)").matches) {
  window.addEventListener('DOMContentLoaded', (event) => { document.querySelector("#fixedheadmobile").style.display = "block"; });
  //alert("jellou");   
  //Reveal.initialize({width: 400, margin: 0.04,});
  Reveal.initialize({width: 400});

  for (var button of document.querySelectorAll('.navbar-item')) { button.onclick = function() {  document.getElementById("chequeate").checked = false;}};


} else {
  window.addEventListener('DOMContentLoaded', (event) => { document.querySelector("#fixedhead").style.display = "block"; });
}

function everytime(fondo, menunro) {
  for (var item of document.querySelectorAll('.is-on')) {  item.classList.remove('is-on');}
  if (fondo=="black") { document.querySelector("body").classList.add("is-black");} else { document.querySelector("body").classList.remove("is-black");}
  anime({ targets: '.semicirculo-rosa', opacity: 0});  
  if (menunro) {  document.querySelector("#menu .column:nth-child("+menunro+") a").classList.add("is-on"); }
}

//VIÑETA 00
Reveal.on( 'make-it-pop', () => {
  console.log('Hecho con <3 y ✨ por Maru & Majo.');
  everytime();

  anime({ targets: '.animate', delay:300, opacity: [0, 1], translateY: [100, 0], duration: anime.stagger(500), easing: "easeInOutSine", direction: 'normal', loop: false });
  anime({ targets: '.semicirculo-rosa', opacity: [0, 0.5], scale:[100, 1], duration: 2000, easing: "easeOutQuad"});
  for (var port of document.querySelectorAll('#portfolio2021 .r-amarillo')) {  port.classList.add("resaltar");}

});


//VIÑETA 01 - Rediseñamos // MENU 01
Reveal.on( 'rediseno750', () => {
  anime({ targets: '.semicirculo-rosa', opacity: [0], duration: 800, easing: "easeInOutSine"});
  anime({ targets: '#rediseno750 h1', opacity: [0, 1], translateY: [-40, 0],duration: 1000, delay:300, easing: "easeInOutSine"});  
  anime({ targets: '#web750-01', opacity: [0, 1], translateX: [-80, 0], duration: 800, delay:500, easing: "easeInOutSine"});  
  anime({ targets: '#web750-02', opacity: [0, 1], translateX: [80, 0], duration: 800, delay:700, easing: "easeInOutSine"});  
  anime({ targets: '#rediseno750 .button', opacity: [0, 1], duration: 200, delay:900, easing: "easeInOutSine"});

  everytime("blanco", "1");
  //document.querySelector("#menu .column:first-child a").classList.add("is-on"); 

});

//VIÑETA 02 - User Experiencie
Reveal.on( 'ux', () => {
  anime({ targets: '#ux01', delay:300, opacity: [0, 1], translateY: [40, 0], duration: 500, easing: 'cubicBezier(.5, .05, .1, .3)' });
  anime({ targets: '#ux02', delay:900, opacity: [0, 1], translateY: [40, 0], duration: 500, easing: 'cubicBezier(.5, .05, .1, .3)' });
  anime({ targets: '#ux03', delay:1200, opacity: [0, 1], translateY: [40, 0], duration: 500, easing: 'cubicBezier(.5, .05, .1, .3)' });
  everytime("blanco", "1");
});

//VIÑETA 03
Reveal.on( 'gettingbetter', () => {
  anime({ targets: '#better01', delay:300, translateY: [200, 0], opacity: [0, 1], duration: 500, easing: 'easeInOutSine' });
  anime({ targets: '#better02', delay:600, translateY: [400, 0], opacity: [0, 1], duration: 500, easing: 'easeInOutSine' });
  anime({ targets: '.semicirculo-rosa', opacity: [0] });  
  everytime("blanco", "1");
});

//VIÑETA 04
Reveal.on( 'resultados750', () => {
  document.querySelector("#resultados750 .r-amarillo").remove.add("resaltar");
  document.querySelector("#resultados750 .r-amarillo").classList.add("resaltar"); 
  anime({ targets: '#resultados750 .animate', delay:200, opacity: [0, 1], translateY: [11, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine', loop: false });
  everytime("blanco", "1");
});


// //VIÑETA 05
// Reveal.on( 'resultados750-01', () => {
//   //document.querySelector("#resultados750-01 .r-amarillo").classList.add("resaltar"); 
//   anime({ targets: '#resultados750-01 h1', opacity: [0.2, 1], duration: function() { return anime.random(100,500); }, easing: 'linear' });
//   anime({ targets: '#resultados750-01 img', delay:200, opacity: [0, 1], translateX: [160, 0], duration:500, easing: 'linear' });
//   anime({ targets: '#resultados750-01 p, #resultados750-01 button', delay:300, opacity: [0, 1], duration:300, easing: 'easeInOutSine' });
//   everytime("blanco", "1");
// });

// //VIÑETA 06
// Reveal.on( 'resultados750-02', () => {
//   //document.querySelector("#resultados750-02 .r-amarillo").classList.add("resaltar"); 
//   anime({ targets: '#resultados750-02 h1', opacity: [0.2, 1], duration: function() { return anime.random(100,500); }, easing: 'linear' });
//   anime({ targets: '#resultados750-02 img', delay:200, opacity: [0, 1], translateX: [160, 0], duration:500, easing: 'linear' });
//   anime({ targets: '#resultados750-02 p, #resultados750-02 button', delay:300, opacity: [0, 1], duration:300, easing: 'easeInOutSine' });
//   everytime("blanco", "1");
// });


// VIÑETA - Elecciones // MENU 02
Reveal.on( 'cobertura-elecciones', () => {
  anime({ targets: '.animate', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("blanco", "2");
});

// VIÑETA - replicamos
Reveal.on( 'replicamos', () => {
  anime({ targets: '#replicamos .animate', delay:200, opacity: [0, 1], translateY: [10, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine', loop: false });

  // anime({ targets: '#replicamos .f1', delay:200, opacity: [0, 1], translateY: [10, 0], duration: 300, easing: 'easeInOutSine' });
  // anime({ targets: '#replicamos .f2', delay:400, opacity: [0, 1], translateY: [10, 0], duration: 300, easing: 'easeInOutSine' });
  // anime({ targets: '#replicamos .f3', delay:600, opacity: [0, 1], translateY: [10, 0], duration: 300, easing: 'easeInOutSine' });

  everytime("blanco", "2");
});


//VIÑETA 07
Reveal.on( 'resultados-elecciones', () => {
  anime({ targets: '#resulte01', opacity: [0, 1], duration: function() { return anime.random(100,500); }, easing: 'linear' });
  anime({ targets: '#resulte02', delay:200, opacity: [0, 1], translateY: [60, 0], duration:500, easing: 'linear' });
  anime({ targets: '#resulte03', delay:400, opacity: [0, 1], translateY: [60, 0], duration:500, easing: 'easeInOutSine' });
  for (var result of document.querySelectorAll('#resultados-elecciones .r-amarillo')) {  result.classList.add("resaltar");}

  everytime("blanco", "2");
});


// VIÑETA  08 - Interactivos // MENU 03
Reveal.on( 'especiales-interactivos', () => {
  anime({ targets: '#especiales-interactivos .animate', delay:200, opacity: [0, 1], translateY: [10, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine', loop: false });

  // anime({ targets: 'h1.animate', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  // anime({ targets: 'img.animate', delay:400, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("blanco", "3");

});

// VIÑETA  09 - Gol
Reveal.on( 'gol-del-siglo', () => {
  document.querySelector("body").classList.add("is-black");
  anime({ targets: 'animate', delay:1000, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("black", "3");
});


// VIÑETA  10 - mucharadio
Reveal.on( 'mucharadio', () => {
  anime({ targets: '#rediseno-mucharadio img', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("blanco", "4");
});


// VIÑETA  11 - blackie
Reveal.on( 'rediseno-blackie', () => {
  anime({ targets: '#rediseno-blackie img', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("blanco", "5");
});

// VIÑETA  12 - podcats
Reveal.on( 'podcasts', () => {
  anime({ targets: '#podcasts h1', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  anime({ targets: '#podcasts iframe', delay:600, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  anime({ targets: '#podcasts p', delay:900, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });

  everytime("blanco", "6");
});

// VIÑETA  13 - rutadiaria
Reveal.on( 'rutadiaria', () => {
  anime({ targets: '#rutadiaria .animate', delay:300, opacity: [0, 1], translateY: [100, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine', loop: false });
  everytime("blanco", "6");
});

// VIÑETA  #13-02 Podcasts AM750 
Reveal.on( 'podcast-750', () => {
  anime({ targets: '#podcast-750 .animate', delay:300, opacity: [0, 1], translateY: [100, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine', loop: false });
  everytime("blanco", "6");
  for (var port of document.querySelectorAll('#podcast-750 .r-amarillo')) {  port.classList.add("resaltar");}
});



// VIÑETA  14 - muchoranking
Reveal.on( 'mucho-ranking', () => {
  anime({ targets: '#mucho-ranking .animate', delay:300, opacity: [0, 1], translateY: [100, 0], duration: anime.stagger(300), direction: 'normal', easing: 'easeInOutSine',  loop: false });
  everytime("blanco", "7");
});

// VIÑETA  15 - aspen-tour
Reveal.on( 'aspen-tour', () => {
  anime({ targets: '#aspen-tour img', delay:300, opacity: [0, 1], duration: function() { return anime.random(100,1000); }, easing: 'easeInOutSine' });
  everytime("black", "8");
});


// VIÑETA  16 - el-equipo
Reveal.on( 'el-equipo', () => {
  anime({ targets: '#el-equipo .animate', delay:600, opacity: [0, 1], translateY: [8, 0], duration: anime.stagger(400),  easing: 'easeInOutSine' });
  everytime("blanco");
});