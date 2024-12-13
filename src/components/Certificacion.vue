<script setup>
</script>

<template>
  <div class="bg-gray-300 dark:bg-black text-black dark:text-primary scroll-adjust relative-container snap-item1">
    <!-- Responsive grid for images -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <img src="/imagenes/certif1.png" alt="certi1" class="h-auto w-full object-contain rounded-md mt-2">
      </div>
      <div>
        <img src="/imagenes/certif2.png" alt="certi2" class="h-auto w-full object-contain rounded-md mt-2">
      </div>
    </div>

    <div>
      <img src="/imagenes/pleca_blanco.png" alt="pleca" class="w-full mt-4">
    </div>

    <!-- Responsive grid for text and images -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
      <div class="pt-8">
        <img :src="politica" alt="politica" class="w-full">
        <h1 class="pt-8 text-lg sm:text-xl lg:text-2xl">
          "Quienes trabajamos en los Cuerpos de Seguridad Auxiliares del Estado de México asumimos el compromiso
          de ofrecer servicios de seguridad intramuros, escoltas y custodios con personal altamente calificado, al fin de
          salvaguardar la integridad física y patrimonial de nuestros usuarios, bajo un esquema de mejora continua de nuestros procesos."
        </h1>
        <img src="/imagenes/certificado.png" alt="certificado" class="pt-12">
      </div>

      <div>
        <img src="/imagenes/Foto.png" alt="fotocert" class="pt-8 w-full">
        <h1 class="pt-8 text-lg sm:text-xl lg:text-3xl">
          "Desde el año 2020 los Cuerpos de Seguridad Auxiliares del Estado de México (CUSAEM) logran certificarse
          ante la Norma Internacional ISO 9001:2015 (Certificado ER-0034/2020)."
        </h1>
        <h1 class="pt-8 text-lg sm:text-xl lg:text-3xl">
          "Con la finalidad de hacer frente a los requerimientos cada vez más exigentes del mercado y en particular
          de nuestros usuarios, los CUSAEM diseñaron e implementaron un Sistema de Gestión de la Calidad enfocado
          en mejorar la Selección y Capacitación del personal operativo."
        </h1>
        <h1 class="pt-8 text-lg sm:text-xl lg:text-3xl pr-0 sm:pr-8">
          "Este Sistema de Gestión de la Calidad fue evaluado y aprobado por el organismo certificador español AENOR,
          el cual nos otorgó la certificación ante la Norma Internacional ISO 9001:2015, lo cual avala nuestra capacidad
          para proporcionar de forma eficiente y eficaz, servicios de seguridad que satisfagan los requisitos y expectativas
          de nuestros usuarios."
        </h1>
        <img src="/imagenes/estrellas.png" alt="estrella" class="block mx-auto pt-12 pb-8">
      </div>
    </div>
  </div>
</template>
