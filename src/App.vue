<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Columnas from './components/Columnas.vue'
import Footer from './components/Footer.vue'
import Contenedores from './components/Contenedores.vue'
import Pleca from './components/Pleca.vue'
import Marcas from './components/Marcas.vue'
import CursorCircle from './components/CursorCircle.vue'
import Newsletter from './components/Newsletter.vue'
import Navegadores from './components/Navegadores.vue'
import Locaciones from './components/Locaciones.vue'
import Certificacion from './components/Certificacion.vue'

//document.addEventListener("DOMContentLoaded", function() {
//  gsap.from(".snap-item:not([data-aos])", {
//    opacity: 0,
//    duration: 1,
//    y: 50,
//   stagger: 0.3,
//    ease: "power2.out",
//    scrollTrigger: {
//      trigger: ".snap-container",
//      start: "top center",
//      end: "bottom center",
//      scrub: true,
//    }
//  });
// });

</script>

<template>
  
  <div class="flex flex-col min-h-screen overflow-hidden snap-container">

    <header>
      <Header />
    </header>
    
    <main class="flex-grow">
      <Columnas />
    
     <!-- <CursorCircle />-->

      <Navegadores />

      <!--Router de los 3 contenedores-->
      <RouterLink to="/">
      </RouterLink> 
         
      <RouterView />

      <Pleca />

      <Marcas />

      <Locaciones />

      <Certificacion />

      <Newsletter />
    </main>

    <footer>
      <Footer />
    </footer>
    
  </div>

</template>


<style>

    </style>