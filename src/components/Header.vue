<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>


<template>
  <div id="inicio">
    <nav class="fixed top-0 left-0 w-full p-0 backdrop-blur-sm z-50">
      <div class="container mx-auto flex justify-between items-center">
        <RouterLink to="/" class="relative group">
          <img src="/imagenes/logo1.png" alt="logo_header" class="w-12 md:w-16 cursor-pointer ml-6" data-aos="zoom-in">
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 text-white bg-black px-2 py-1 rounded-md z-10">
            INICIO
          </span>
        </RouterLink>
        <div class="hidden md:flex space-x-2 text-xs sm:space-x-6 sm:text-lg md:space-x-24 md:text-lg lg:text-xl font-montserrat" data-aos="zoom-in">
          <a href="#services" class="text-primary underline-animation bg1">Contrataciones</a> <!--Estos los invertí por que se invirtió el formato-->
          <a href="#contracts" class="text-primary underline-animation bg1">Servicios</a>
          <a href="#acerca de" class="text-primary underline-animation pr-12 bg1">Acerca de</a>
        </div>
        <button @click="toggleMenu" class="relative md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-[#d8b562] mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
            <title>Menú</title>
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
        </button>
      </div>
    </nav>
    <transition name="menu-fade">
      <div v-show="isOpen" class="md:hidden bg-white bg-opacity-50 fixed inset-0 flex flex-col items-center justify-center text-3xl font-montserrat space-y-6 backdrop-blur-sm z-40">
        <a href="#services" class="text-primary underline-animation bg1" @click="toggleMenu">Contrataciones</a>
        <a href="#contracts" class="text-primary underline-animation bg1" @click="toggleMenu">Servicios</a>
        <a href="#acerca de" class="text-primary underline-animation bg1" @click="toggleMenu">Acerca de</a>
      </div>
    </transition>
  </div>
</template>



<style scoped>
.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity 0.7s;
}
.menu-fade-enter, .menu-fade-leave-to {
  opacity: 0;
}
</style>
