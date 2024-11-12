<template>
    <section class="iconos sec-reto">
      <a href="#section1" class="button-container">
        <div class="button group">
          <div class="icon">1</div>
          <span>Acerca de</span>
        </div>
      </a>
      <a href="#section2" class="button-container">
        <div class="button group">
          <div class="icon">2</div>
          <span>Empleo</span>
        </div>
      </a>
      <a href="#section3" class="button-container">
        <div class="button group">
          <div class="icon">3</div>
          <span>Servicios</span>
        </div>
      </a>
      <a href="#section4" class="button-container">
        <div class="button group">
          <div class="icon">4</div>
          <span>Confianza</span>
        </div>
      </a>
      <a href="#section5" class="button-container">
        <div class="button group">
          <div class="icon">5</div>
          <span>Newsletter</span>
        </div>
      </a>
    </section>
  </template>
  
  <style scoped>
 
  
  .iconos {
    @apply fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-40;
  }
  
  .button-container {
    @apply relative h-16 w-full;  
  }
  
  .sec-reto .button {
    @apply absolute top-0 right-0 h-16 w-16 font-sans overflow-hidden bg-amber-50 rounded-full cursor-pointer shadow-lg transition-all duration-500 ease-out;
  }
  
  .sec-reto .button:hover {
    width: 220px; 
  }
  
  .sec-reto .button:hover .icon {
    background-color: #ddbe73;
    color: white;
  }
  
  .sec-reto .button .icon {
    @apply inline-block w-16 h-16 text-center rounded-full transition-all duration-500 ease-out;
    line-height: 4rem;
  }
  
  .sec-reto .button span {
    @apply text-sm leading-none font-light ml-4;
    opacity: 0;
    display: inline-block;
    transition: opacity 0.3s ease-out, margin-left 0.3s ease-out;
  }
  
  .sec-reto .button:hover span {
    opacity: 1;
    margin-left: 1rem;
  }
  </style>
  