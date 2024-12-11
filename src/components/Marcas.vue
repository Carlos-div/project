<script setup>
import { ref, onMounted } from 'vue';

const contents = [
  {
    title: 'BBVA',
    description: 'Sirviendo a BBVA en su seguridad durante 45 años.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso',
  },
  {
    title: 'CDMX',
    description: 'CDMX, una marca icónica con una historia rica. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Citibanamex',
    description: 'Citibanamex, protegiendo Pizzas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Coca-Cola',
    description: 'Coca-cola, software de calidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Conagua',
    description: 'Conagua, único en su clase. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'DHL',
    description: 'DHL, energía y acción. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Ferrero',
    description: 'Ferrero, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'H. Juarez',
    description: 'Hospital Juarez, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'IMSS',
    description: 'IMMS, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'ISEM',
    description: 'ISEM, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'ISSEMYM',
    description: 'ISSEMYM, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'LICONSA',
    description: 'LICONSA, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'NOVARTIS',
    description: 'NOVARTIS, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'P. de Hierro',
    description: 'El palacio de Hierro, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'PANINI',
    description: 'PANINI, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'ROTOPLAS',
    description: 'ROTOPLAS, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'SAMSUNG',
    description: 'Samsung, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Scotiabank',
    description: 'Scotiabank, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'TEC.',
    description: 'Tecnológico de Monterrey, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Telcel',
    description: 'Telcel, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Toyota',
    description: 'Toyota, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'UAM',
    description: 'UAM, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'UNITEC',
    description: 'Unitec, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'UVM',
    description: 'UVM, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
  {
    title: 'Yakult',
    description: 'Yakult, claridad y transparencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slogan: 'Tu seguridad',
    slogan2: 'Nuestro compromiso'
  },
];

// Referencias reactivas para los elementos dinámicos
const currentContent = ref(0);
const title = ref(contents[currentContent.value].title);
const description = ref(contents[currentContent.value].description);
const slogan = ref(contents[currentContent.value].slogan);
const slogan2 = ref(contents[currentContent.value].slogan2);

onMounted(() => {
  setInterval(() => {
    currentContent.value = (currentContent.value + 1) % contents.length;
    title.value = contents[currentContent.value].title;
    description.value = contents[currentContent.value].description;
    slogan.value = contents[currentContent.value].slogan;
    slogan2.value = contents[currentContent.value].slogan2;
  }, 3000);
});

</script>

<template>
  <div class="relative h-screen flex justify-center items-center snap-item" id="section4">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" />
    <div class="relative flex flex-col sm:flex-col bg-white shadow-4xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out max-w-6xl h-192 md:h-144 z-10 p-6">
      <div class="flex flex-col md:flex-row pt-12">
        <div class="w-full md:w-1/2 p-8 text-left">
          <h1 class="font-montserrat font-extrabold text-gray-900 text-6xl">{{ title }}</h1>
          <h3 class="font-montserrat font-extrabold text-gray-900 text-xl pt-4">{{ description }}</h3>
        </div>
        <div class="w-auto md:w-1/2 p-6 flex items-center justify-center bg-gray-100 bg-cover bg-center">
          <div class="text-center text-primary bg-opacity-50">
            <h2 class="font-montserrat font-extrabold bg-gradient-to-r from-[#d3af5b] to-neutral-950 text-2xl md:text-5xl mb-2">{{ slogan }}</h2>
            <h2 class="font-montserrat font-extrabold bg-gradient-to-r from-neutral-950 to-[#d3af5b] text-2xl md:text-5xl">{{ slogan2 }}</h2>
          </div>
        </div>
      </div>
      <div class="overflow-hidden pt-6 pb-12 w-full">
  <h1 class="font-montserrat font-extrabold text-primary text-center text-4xl p-6">Las empresas que confían en nosotros</h1>
  <div class="flex animate-scroll space-x-4 lg:space-x-16 sm:space-y-12 pt-6">
    <div class="flex space-x-4">
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--Segundo-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--tercero-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--Cuarto-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--Quinto-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--Sexto-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
      <!--Septimo-->
      <img src="/imagenes/bbva.png" alt="bbva_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cdmx.png" alt="cdmx_png" class="h-16 w-auto object-contain">
      <img src="/imagenes/citibanamex.png" alt="citi_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/cocacola.png" alt="cocacola_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/conagua.png" alt="conagua_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/dhl.png" alt="dhl_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/ferrero.png" alt="ferrero_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/hjuarez.png" alt="hjuarez_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/imss.png" alt="imss_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/isem.png" alt="isem_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/issemym.png" alt="issemym_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/liconsa.png" alt="liconsa_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/novartis.png" alt="novartis_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/palacio.png" alt="palacio_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/panini.png" alt="panini_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/rotoplas.png" alt="rotoplas_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/samsung.png" alt="samsung_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/scotiabank.png" alt="scotiabank_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/tec.png" alt="tec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/telcel.png" alt="telcel_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/toyota.png" alt="toyota_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uam.png" alt="uam_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/unitec.png" alt="unitec_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/uvm.png" alt="uvm_marcas" class="h-16 w-auto object-contain">
      <img src="/imagenes/yakult.png" alt="yakult_marcas" class="h-16 w-auto object-contain">
    </div>
  </div>
</div>

    </div>
  </div>
</template>


<style>
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-100% * var(--scroll-items))); }
  }

  .animate-scroll {
    display: flex;
    animation: scroll 200s linear infinite;
    --scroll-items: 24;
  }
</style>

<!--<div data-aos="fade-left">
    <div class="overflow-hidden pt-6 pb-12" id="section4">
        <h1 class="font-montserrat font-extrabold text-primary text-center text-4xl p-6 ">Las marcas que confían en nosotros</h1>
        <div class="flex animate-scroll lg:space-x-16 sm:space-y-12 pb-6">
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">          
             Duplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">
             Triplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">
        </div>
    </div>
</div> 


<div data-aos="fade-right">
    <div class="overflow-hidden pt-6 pb-12">
        <div class="flex animate-reverse lg:space-x-16 sm:space-y-12 pb-6">
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">          
             Duplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">
             Triplicar imágenes para hacer el bucle continuo 
            <img src="/imagenes/AI.png" alt="AI_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/abstract.png" alt="abstract_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/clipart.png" alt="clipart_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/finanzas.png" alt="finanzas_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/intel.png" alt="intel_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/nbc.png" alt="nbc_marcas" class="h-16 w-auto object-contain">
            <img src="/imagenes/Diple.webp" alt="Diple_marcas" class="h-16 w-auto object-contain">
        </div>
    </div>
</div> -->