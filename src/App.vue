<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Columnas from './components/Columnas.vue'
import Footer from './components/Footer.vue'
import Contenedores from './components/Contenedores.vue'
import Pleca from './components/Pleca.vue'
import Marcas from './components/Marcas.vue'
</script>

<template>
  
  <div class="flex flex-col min-h-screen overflow-hidden">

    <header>
      <Header />
    </header>
    
    <main class="flex-grow">
      <Columnas />


      <!--Aquí va el router para los 3 contenedores-->
      <RouterLink to="/">
      </RouterLink> 
         
      <RouterView />

      <Pleca />

      <Marcas />
      
    </main>

    <footer>
      <Footer />
    </footer>
    
  </div>

</template>
