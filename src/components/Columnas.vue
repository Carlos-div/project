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
          <h1 class="text_body text-xl md:text-2xl lg:text-4xl font-montserrat font-normal ml-8">C U S A E M</h1> <br class="mb-6">
          <h1 class="text_body text-xl md:text-2xl lg:text-4xl font-montserrat font-normal ml-8">CUERPOS DE SEGURIDAD AUXILIARES DEL ESTADO DE MÉXICO</h1>
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
  position: absolute;
  top: 40%;
  left: 0;
  /*align-items: center;
  justify-content: center;
  text-align: center;*/
  z-index: 2; /* Asegurar que esté por encima del video */
}

.container img, .overlay-content h1, .overlay-content .grid img {
  position: relative;
  z-index: 2; 
}

.text_body {
  color: rgb(255, 255, 255); 
  display: inline; /* Ajusta el fondo al tamaño del texto */
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

</style>