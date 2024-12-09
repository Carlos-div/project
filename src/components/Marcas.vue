<script setup>
import { ref, onMounted } from 'vue';

// Datos para los cambios de contenido
const contents = [
  {
    title: 'Apple',
    description: 'Sirviendo a Apple en su seguridad durante 45 años.',
    image: '/imagenes/98-1.webp'
  },
  {
    title: 'AI',
    description: 'AI, una marca icónica con una historia rica. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/AI.webp'
  },
  {
    title: 'Nasty',
    description: 'Nasty, protegiendo Pizzas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/pizza.webp'
  },
  {
    title: 'Diple',
    description: 'Diple, software de calidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/Diple.webp',
  },
  {
    title: 'Clipart',
    description: 'Clipart, único en su clase. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/98-1.webp'
  },
  {
    title: 'Finanzas',
    description: 'Finanzas, energía y acción. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/AI.webp'
  },
  {
    title: 'Abstract',
    description: 'Abstract, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/imagenes/pizza.webp'
  },
];

// Referencias reactivas para los elementos dinámicos
const currentContent = ref(0);
const title = ref(contents[currentContent.value].title);
const description = ref(contents[currentContent.value].description);
const image = ref(contents[currentContent.value].image);

onMounted(() => {
  setInterval(() => {
    currentContent.value = (currentContent.value + 1) % contents.length;
    title.value = contents[currentContent.value].title;
    description.value = contents[currentContent.value].description;
    image.value = contents[currentContent.value].image;
  }, 5000);
});
</script>

<template>
  <div class="relative h-screen flex justify-center items-center snap-item" id="section4"> 
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" /> 
    <div class="relative flex flex-col sm:flex-col bg-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out max-w-6xl h-192 md:h-144 z-10 p-6"> 
      <div class="flex flex-col md:flex-row pt-12"> 
        <div class="w-full md:w-1/2 p-8 text-left"> 
          <h1 class="font-montserrat font-extrabold text-gray-900 text-6xl">{{ title }}</h1> 
          <h3 class="font-montserrat font-extrabold text-gray-900 text-xl pt-4">{{ description }}</h3> 
          </div> 
          <div class="w-auto md:w-1/2 p-6 flex items-center justify-center bg-gray-100 bg-cover bg-center" :style="{ backgroundImage: `url(${image})` }"> 
          </div>
          </div>
          <div class="overflow-hidden pt-6 pb-12 w-full"> 
            <h1 class="font-montserrat font-extrabold text-primary text-center text-4xl p-6">Las empresas que confían en nosotros</h1> 
            <div class="flex animate-scroll lg:space-x-16 sm:space-y-12 pb-6"> 
              <img src="/imagenes/AI.webp" alt="AI_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/pizza.webp" alt="abstract_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/98-1.webp" alt="clipart_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/AI.webp" alt="finanzas_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/98-1.webp" alt="intel_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/pizza.webp" alt="nbc_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/AI.webp" alt="AI_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/pizza.webp" alt="abstract_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/98-1.webp" alt="clipart_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/AI.webp" alt="finanzas_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/98-1.webp" alt="intel_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/pizza.webp" alt="nbc_marcas" class="h-16 w-auto"> 
              <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto"> 
      </div> 
    </div> 
  </div> 
</div>
</template>

<style scoped>

</style>



<!--<div data-aos="fade-left">
    <div class="overflow-hidden pt-6 pb-12" id="section4">
        <h1 class="font-montserrat font-extrabold text-primary text-center text-4xl p-6 ">Las marcas que confían en nosotros</h1>
        <div class="flex animate-scroll lg:space-x-16 sm:space-y-12 pb-6">
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">          
             Duplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">
             Triplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">
        </div>
    </div>
</div> 


<div data-aos="fade-right">
    <div class="overflow-hidden pt-6 pb-12">
        <div class="flex animate-reverse lg:space-x-16 sm:space-y-12 pb-6">
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">          
             Duplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">
             Triplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto">
        </div>
    </div>
</div> -->