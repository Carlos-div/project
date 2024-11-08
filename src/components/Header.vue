<script setup>
  </script>

<template>

<nav class="bg-white bg-opacity-50 fixed top-0 left-0 w-full p-4 backdrop-blur-sm z-50 overflow-hidden">
  <div class="container mx-auto flex justify-between items-center">
    <RouterLink to="/" class="relative group">
      <img src="/imagenes/logo1.png" alt="logo_header" class="w-12 md:w-16 cursor-pointer">
      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 text-white bg-black px-2 py-1 rounded-md">
        INICIO
      </span>
    </RouterLink>
    <div class="flex space-x-2 text-xs sm:space-x-6 sm:text-2xl md:space-x-24 md:text-3xl font-spartan">
      <a href="#services" class="text-black underline-animation">Servicios</a>
      <a href="#contracts" class="text-black underline-animation">Contrataciones</a>
      <a href="#blog" class="text-black underline-animation">Blog</a>
    </div>
  </div>
</nav>


  </template>
  
  
  
  