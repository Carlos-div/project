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
  
  <div class="flex flex-col min-h-screen">

    <header>
      <Header />
    </header>
    
    <main class="flex-grow">
      <Columnas />

      <Contenedores />

      <Pleca />

      <Marcas />
      
    </main>

    <footer>
      <Footer />
    </footer>
    
  </div>

</template>
