<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const proofElement = ref(null);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Activa la animación
          } else {
            entry.target.style.animationPlayState = 'paused'; // Pausa la animación cuando no está en la vista
          }
        });
      });

      // Observer should only observe after proofElement is rendered
      if (proofElement.value) {
        observer.observe(proofElement.value);
      }
    });

    return {
      proofElement
    };
  }
};
</script>

<template>
  <div class="snap-item pt-12 md:pt-2 relative" id="section6">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" />
    <div class="relative gap-8 px-4">
      <div ref="proofElement" class="pt-8 anim-right">
        <h1  class="relative text-4xl md:text-5xl xl:text-6xl pt-0 md:pt-12 lg:pt-24 pl-8 font-montserrat font-extrabold text-gray-900 bg1 ">Política de calidad de los CUSAEM</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pl-2 md:pl-16 place-items-center">
          <div class="transform hover:scale-110 transition duration-500 shadow-5xl rounded-lg overflow-hidden p-6 text-center w-full caja10">
            <h1 class="text-xs sm:text-lg md:text-xl lg:text-3xl font-montserrat font-semibold text-gray-900 bg1">
              "Quienes trabajamos en los Cuerpos de Seguridad Auxiliares del Estado de México asumimos el compromiso
              de ofrecer servicios de seguridad intramuros, escoltas y custodios con personal altamente calificado, al fin de
              salvaguardar la integridad física y patrimonial de nuestros usuarios, bajo un esquema de mejora continua de nuestros procesos."
            </h1>
          </div>
          <img src="/imagenes/certificado.png" alt="certificado" class="w-8/12 sm:w-6/12 md:w-11/12 lg:w-6/12 hover:scale-110 transition duration-500 mx-auto">
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
