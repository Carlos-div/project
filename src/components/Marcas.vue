<script>
import { ref, onMounted } from 'vue';

// Contenidos
const contents = [
  { 
    title: 'BBVA', 
    description: 'BBVA es una institución financiera multinacional española, fundada en 1857. Ofrece una amplia gama de productos y servicios bancarios a nivel mundial.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'CDMX', 
    description: 'La Ciudad de México (CDMX) es la capital del país, conocida por su riqueza cultural, histórica y arquitectónica.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Citibanamex', 
    description: 'Citibanamex es una de las instituciones bancarias más grandes de México, parte del grupo financiero Citigroup.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Coca-Cola', 
    description: 'Coca-Cola es una empresa estadounidense de bebidas, famosa por su refresco homónimo, con presencia en más de 200 países.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Conagua', 
    description: 'La Comisión Nacional del Agua (Conagua) es una entidad gubernamental mexicana encargada de la gestión del agua en el país.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'DHL', 
    description: 'DHL es una empresa global de logística y transporte, conocida por su servicio eficiente y rápido.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Ferrero', 
    description: 'Ferrero es una empresa italiana de confitería, famosa por productos como Nutella y los chocolates Ferrero Rocher.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'H. Juarez', 
    description: 'Hospital Juárez es una institución médica en México conocida por sus servicios de salud y atención especializada.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'IMSS', 
    description: 'El Instituto Mexicano del Seguro Social (IMSS) es una institución pública de seguridad social que brinda servicios médicos y sociales a los trabajadores en México.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'ISEM', 
    description: 'El Instituto de Salud del Estado de México (ISEM) es una entidad gubernamental que proporciona servicios de salud a los habitantes del Estado de México.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'ISSEMYM', 
    description: 'El Instituto de Seguridad Social del Estado de México y Municipios (ISSEMYM) ofrece servicios de seguridad social a los trabajadores del Estado de México.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'LICONSA', 
    description: 'LICONSA es una empresa estatal mexicana dedicada a la producción y distribución de leche para mejorar la nutrición de la población.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'NOVARTIS', 
    description: 'NOVARTIS es una compañía farmacéutica global suiza que se enfoca en la investigación, desarrollo y fabricación de medicamentos innovadores.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'P. de Hierro', 
    description: 'El Palacio de Hierro es una cadena de tiendas departamentales de lujo en México, conocida por su amplia gama de productos de alta calidad.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'PANINI', 
    description: 'PANINI es una editorial italiana famosa por sus álbumes de cromos y coleccionables deportivos.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'ROTOPLAS', 
    description: 'ROTOPLAS es una empresa mexicana líder en soluciones de almacenamiento, purificación y tratamiento de agua.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'SAMSUNG', 
    description: 'Samsung es una multinacional surcoreana de tecnología y electrónica, conocida por sus innovadores productos, desde teléfonos móviles hasta electrodomésticos.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Scotiabank', 
    description: 'Scotiabank es un banco internacional canadiense con una sólida presencia en México, ofreciendo una variedad de servicios financieros.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'TEC.', 
    description: 'El Tecnológico de Monterrey es una universidad privada mexicana reconocida por su excelencia académica y programas innovadores.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Telcel', 
    description: 'Telcel es la principal empresa de telecomunicaciones en México, ofreciendo servicios de telefonía móvil y datos.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Toyota', 
    description: 'Toyota es una compañía automotriz japonesa, reconocida por sus vehículos confiables y eficientes.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'UAM', 
    description: 'La Universidad Autónoma Metropolitana (UAM) es una universidad pública en México, destacada por su compromiso con la educación y la investigación.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'UNITEC', 
    description: 'La Universidad Tecnológica de México (UNITEC) es una institución privada de educación superior conocida por sus programas enfocados en la formación profesional.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'UVM', 
    description: 'La Universidad del Valle de México (UVM) es una de las universidades privadas más grandes del país, ofreciendo una amplia gama de programas educativos.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  },
  { 
    title: 'Yakult', 
    description: 'Yakult es una compañía japonesa dedicada a la producción de productos lácteos probióticos, famosa por su bebida fermentada.', 
    slogan: 'Tu seguridad', 
    slogan2: 'Nuestro compromiso' 
  }
];

// Referencias reactivas para los elementos dinámicos
const currentContent = ref(0);
const 
title = ref(contents[currentContent.value]  .
title)   ;
const 
description = ref(contents[currentContent.value].
description);
const slogan = ref(contents[currentContent.value].slogan);
const slogan2 = ref(contents[currentContent.value].slogan2);

export default {
  setup() {
    // Animación con Intersection Observer
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

      if (proofElement.value) {
        observer.observe(proofElement.value);
      }

      // Configuración del contenido dinámico
      setInterval(() => {
        currentContent.value = (currentContent.value + 1) % contents.length;
        
        title.value = contents[currentContent.value].
          title;

            description.value = contents[currentContent.value].
          description;
        slogan.value = contents[currentContent.value].slogan;
        slogan2.value = contents[currentContent.value].slogan2;
      }, 9000);
    });

    return {
      proofElement,
      
      title,

        description,
        slogan,
      slogan2
    };
  }
};
</script>


<template> 
  <div class="relative h-screen flex justify-center items-center snap-item" id="section4">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" />
    <div class="relative flex flex-col sm:flex-col bg-white shadow-4xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out max-w-6xl h-192 md:h-144 z-10 p-6">
      <div class="flex flex-col md:flex-row pt-12">
        <div class="w-full md:w-1/2 p-8 text-left">
          <h1 class="font-montserrat font-extrabold text-gray-900 text-5xl md:text-6xl bg1">{{ 
          title }}</h1>
            <h3 class="font-montserrat font-extrabold text-amber-950 text-md md:text-xl pt-4 bg1">{{ 
            description }}</h3>
          </div>
        <div class="w-auto md:w-1/2 p-6 flex items-center justify-center bg-gray-100 bg-cover bg-center">
          <div class="text-center text-primary bg-opacity-50">
            <h2 ref="proofElement" class="font-montserrat font-extrabold bg-gradient-to-r from-[#d3af5b] to-neutral-950 text-2xl md:text-5xl mb-2 bg1 anim-right">{{ slogan }}</h2>
            <h2 ref="proofElement" class="font-montserrat font-extrabold bg-gradient-to-r from-neutral-950 to-[#d3af5b] text-2xl md:text-5xl bg1 anim-left">{{ slogan2 }}</h2>
          </div>
        </div>
      </div>
      <div class="overflow-hidden pt-6 pb-12 w-full">
  <h1 ref="proofElement" class="font-montserrat font-extrabold text-primary text-center text-2xl md:text-4xl p-6 bg1 anim-down">Las empresas que confían en nosotros</h1>
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
/* Efecto para la transición de las marcas */
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