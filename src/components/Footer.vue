<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


</script>

<template>

    <footer class="bg-gray-600 font-montserrat text-secondary p-4 border-t-8 border-gray-700">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <img src="/src/assets/imagenes/logo_circulo.png" alt="logo_footer" class="w-12" data-aos="fade-up">
        </div>
        <div class="flex space-x-4 md:space-x-16 mb-4 md:mb-0">
          <a href="#about" class="hover:text-gray-400" data-aos="zoom-in-down">Sobre Nosotros</a>
          <a href="#services" class="hover:text-gray-400" data-aos="zoom-in-left">Servicios</a>
          <a href="#contact" class="hover:text-gray-400" data-aos="zoom-in-right">Contacto</a>
        </div>
        <div>
          <p class="text-sm" data-aos="zoom-out">&copy; 2024 CUSAEM. Todos los derechos reservados.</p>
        </div>
        <button @click="scrollToTop" class="rounded-full bg-gray-200 p-2 transition duration-300 animate-pulse" data-aos="fade-down"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-2 sm:size-4 md:size-6 xl:size-8">
              <path fill-rule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
      </div>
    </footer>

  </template>
  

  