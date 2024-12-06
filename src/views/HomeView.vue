<script>
</script>


<template>
<div class="text-center pt-12 md:pt-24 lg:pt-24 pl-2 pr-2 pb-8 cursor-pointer font-spartan">
  <!--Quiero que esta imagen quede detrás de cada contenido-->
  


  <div class="snap-item relative">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0" /> 
  <RouterLink :to="{ path: 'somos', hash: '#quesomos' }">
    <div id="section1">
      <!--Del header--><div id="acerca de"></div>
      <!-- <div data-aos="fade-right" id="section1">-->
    <div class="h-screen md:h-screen lg:h-screen relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg">
      <img src="/imagenes/car-inte.gif" alt="Nuestros Servicios" class="absolute inset-0 w-full h-full object-cover z-10">
      <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
       <img src="/imagenes/somos.png" alt="somos_contenedor_texto" class="w-64 md:w-96 z-20"> 
      </div>
    </div>
  </div>
    </RouterLink>
  </div>

  <div class="snap-item relative">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0" /> 
    <RouterLink :to="{ path: 'unete', hash: '#unete' }">
      <div id="section2">
        <!--del header--><div id="contracts"></div>
        <!--<div data-aos="fade-left" id="section2">-->
      <div class="h-screen md:h-screen lg:h-screen relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg mt-8 ">
        <video autoplay muted loop class="bg-video">
    <source src="/imagenes/Prueba1b.mp4" type="video/mp4">
  </video>
    </div>  
  </div>    
        </RouterLink>
  </div>

  <div class="snap-item relative">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0" /> 
    <RouterLink :to="{ path: 'servicios', hash: '#servicios'}">
      <div id="section3">
        <!--del header--><div id="services"></div>
        <!--<div data-aos="fade-right" id="section3">-->
      <div class="h-screen md:h-screen lg:h-screen relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg mt-8">
      <img src="/imagenes/town.gif" alt="Contrataciones" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
    <img src="/imagenes/servicios.png" alt="servicios_contenedor_texto" class="w-64 md:w-96">
    </div>
    </div>
  </div>
        </RouterLink>
  </div>

  
 </div>

</template>


<!-- Por si la cago 
<div data-aos="fade-right">
<div class="text-center pt-12 pl-2 pr-2 pb-8 cursor-pointer font-spartan">
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
  <RouterLink :to="{ path: 'somos', hash: '#quesomos' }">
    <div class="h-64 md:h-96 relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg">
      <img src="/imagenes/car-inte.gif" alt="Nuestros Servicios" class="absolute inset-0 w-full h-full object-cover">
      <div class="relative flex items-center justify-center space-x-2 p-4">
       <img src="/imagenes/somos.png" alt="somos_contenedor_texto" class="w-64">
      </div>
    </div>
    </RouterLink>




    
    <RouterLink :to="{ path: 'unete', hash: '#unete' }">
      <div class="h-64 md:h-96 relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg">
      <img src="/imagenes/police.gif" alt="Acerca de CUSAEM" class="absolute inset-0 w-full h-full object-cover">
        <div class="relative flex items-center justify-center space-x-2 p-4">
        </div>
      <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
        <img src="/imagenes/equipo.png" alt="equipo_contenedor_texto" class="w-64">
      </div>
    </div>      
        </RouterLink>
    


    <RouterLink :to="{ path: 'servicios', hash: '#servicios'}">
      <div class="h-64 md:h-96 relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg">
      <img src="/imagenes/town.gif" alt="Contrataciones" class="absolute inset-0 w-full h-full object-cover">
      <div class="relative flex items-center justify-center space-x-2 p-4">
    <img src="/imagenes/servicios.png" alt="servicios_contenedor_texto" class="w-64">
    </div>
    </div>
        </RouterLink>
    

  </div>
 </div>
</div> 
-->


