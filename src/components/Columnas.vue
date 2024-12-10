<script setup>


</script>

<template>

  <div class="snap-item pt-12 md:pt-16 lg:pt-16">
      <div class="bg-black flex justify-center items-center  ">
        <p class="text-primary">.</p>
      </div>
       
      <div class="">
       <!-- <div data-aos="fade-up" class="">-->
       

  
        <div class="bg-video-container pb-[433px]">
  <video autoplay muted loop class="bg-video">
    <source src="/imagenes/Entrada.mp4" type="video/mp4">
  </video>
  <div class="overlay-content">
    <img src="/imagenes/logo1.png" alt="logo_columna" class="container mx-auto w-24 md:w-32 lg:w-40 pt-12">
    <h1 class="text-center pt-8 text-xl md:text-2xl lg:text-4xl font-montserrat font-normal text-primary">Cuerpos de Seguridad Auxiliares del Estado de México</h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 pt-8">
        <img src="/imagenes/Loma.png" alt="loma_columna" class="w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 mx-4 md:mx-8">
        <img src="/imagenes/Auxiliar.png" alt="auxiliar_columna" class="w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 mx-4 md:mx-8">
        <img src="/imagenes/Lerma.png" alt="lerma_columna" class="w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 mx-4 md:mx-8">
      </div>
    </div>
  </div>
</div>


  
      

    </div>
  </div>

</template>


<style>
.bg-video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Altura completa de la ventana */
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Esto hace que el video cubra todo el contenedor */
  transform: translate(-50%, -50%);
  z-index: 1;
}


.overlay-content {
  position: relative;
  z-index: -1;
  text-align: center;
  /* Otros estilos para tu contenido */
}

.container img, .overlay-content h1, .overlay-content .grid img {
  position: relative;
  z-index: 2; /* Asegúrate de que los elementos estén por encima del video */
}

</style>