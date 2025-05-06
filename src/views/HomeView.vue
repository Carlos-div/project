<script>
</script>


<template>
<div class="text-center pt-12 md:pt-24 lg:pt-24 pl-2 pr-2 pb-8 cursor-pointer font-montserrat">
 
  


  <div class="snap-item relative">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <RouterLink :to="{ path: 'somos', hash: '#quesomos' }">
      <div id="section1">
          <!-- Del header enlace NO LO BORRES -->
          <div id="acerca de"></div>
          <!-- <div data-aos="fade-right" id="section1">-->
        <div class="relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg h-screen">
          <video autoplay muted loop class="bg-video w-full h-full object-cover">
            <source src="/imagenes/Quienes_somos.mp4" type="video/mp4">
          </video>
          <!-- Aquí el botón -->
          <button class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-2xl Btn1 text-center rounded-sm pt-1 pl-2">Conocer más</button>
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
        <div class="relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg h-screen">
          <video autoplay muted loop class="bg-video w-full h-full object-cover">
          <source src="/imagenes/Servicios.mp4" type="video/mp4">
          </video>
        <!-- Aquí el botón -->
          <button class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-2xl Btn1 text-center rounded-sm pt-1 pl-2">Conocer más</button>
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
          <div class="relative border-4 border-black transform hover:scale-90 transition duration-500 rounded-lg h-screen">
            <video autoplay muted loop class="bg-video w-full h-full object-top">
              <source src="/imagenes/Unete-.mp4" type="video/mp4">
            </video>
            <!-- Aquí el botón -->
            <button class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-2xl Btn1 text-center rounded-sm pt-1 pl-2">Conocer más</button>
          </div>
      </div>
    </RouterLink>
  </div>

  
</div>

</template>


<style>
.Btn1 {
  width: 175px;
  height: 40px;
  display: flex;
  align-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  color: white;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .5s;
}


.Btn1::before {
  width: 175px;
  height: 130px;
  position: absolute;
  content: "";
  background-color: white;
  left: -100%;
  top: 0;
  transition-duration: .5s;
  mix-blend-mode: difference;
}

.Btn1:hover::before {
  transition-duration: .5s;
  transform: translate(100%,-50%);
}

.Btn1:active {
  transform: translate(5px,5px);
  transition-duration: .5s;
}
</style>

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


