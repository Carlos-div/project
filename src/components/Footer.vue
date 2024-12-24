<script setup>
import { ref, onMounted } from 'vue';

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
</script>


<template>

  <div class="snap-footer">
    <footer class="relative font-montserrat text-primary p-4 border-t-8 border-gray-700">
      <img src="/imagenes/Foto.png" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full md:h-auto object-cover z-0 opacity-100" />
      <div ref="proofElement" class="relative grid grid-cols-1 md:grid-cols-3 anim-up sm:mt-6 md:mt-1 lg:mt-6">
        <div class="space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-8 text-xs md:text-md lg:text-xl pt-6 md:pt-0 pl-0 md:pl-6">
          <p class="font-medium bg1">CUERPOS DE SEGURIDAD AUXILIARES DEL VALLE DE MÉXICO</p>
          <p class="font-medium">Policía Auxiliar del, Prol. Galeana 28, La Loma, 54060 Tlalnepantla, Méx.</p>
          <p class="font-medium">52 55 XXXX XXXX</p>
          <img class="w-6 md:w-14" src="/imagenes/Logo.png" alt="Logo footer">
      </div>

      <div class="space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-8 uppercase text-xs md:text-md lg:text-xl pl-0 md:pl-16 lg:pl-24 xl:pl-40">
        <a href="#about" class="font-medium hover:text-amber-700 hover-lapse">Inicio</a>
          <p class="font-medium">Servicios</p>
          <p class="font-medium">Contrataciones</p>
          <p class="font-medium">Ubicaciones</p>
      </div>

      <div class="pt-8 md:pt-2 lg:pt-2 pl-0 md:pl-0 lg:pl-12 xl:pl-24"> 
        <div class="subscribe">
          <p>SUBSCRIBETE</p>
            <input placeholder="EMAIL" class="subscribe-input" name="email" type="email">
            <br>
        <div class="submit-btn">ENVIAR</div>
        </div>
      </div>
      </div>

      <div class="mt-6 md:mt-0 lg:mt-0 xl:mt-2 w-full space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-6 text-sm md:text-md">
        <p class="relative flex justify-center items-center font-medium">Política de privacidad | Términos y condiciones</p>
        <p class="relative flex justify-center items-center font-medium">2024 | CUSAEM todos los derechos reservados</p>
      </div>
    </footer>
  </div>

</template>
  

  <style>
.button-footer {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8b561;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.253);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: rgb(0, 0, 0);
}

.button-footer:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: #e3e9f1;
  align-items: center;
}

.button-footer:hover .svgIcon {
  /* width: 20px; */
  transition-duration: 0.3s;
  transform: translateY(-200%);
}

.button-footer::before {
  position: absolute;
  bottom: -20px;
  content: "Inicio";
  color: white;
  /* transition-duration: .3s; */
  font-size: 0px;
}

.button-footer:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  /* transform: translateY(-30px); */
  transition-duration: 0.3s;
}

/* form */ 
.subscribe {
  position: relative;
  height: 140px;
  width: 240px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.4);
}

.subscribe:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 18px;
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1a044e;
}

.subscribe p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 28px;
}

.subscribe input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 82%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe input:focus {
  outline: none;
  border-bottom: 1px solid #f7f7f7;
  font-family: 'montserrat';
}

.subscribe .submit-btn {
  position: absolute;
  border-radius: 30px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: #8d813d;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 5px;
  right: -10px;
  bottom: -20px;
  cursor: pointer;
  transition: all .25s ease;
  box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
}

.subscribe .submit-btn:hover {
  background-color: #737c1d;
  box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
}
</style>

<!--
<div class="container mx-auto flex flex-col md:flex-row justify-between items-center pt-0 md:pt-80">
        <div class="mb-4 md:mb-0">
          <img src="/src/assets/imagenes/logo_circulo.png" alt="logo_footer" class="w-12">
        </div>
        <div class="relative flex space-x-4 md:space-x-16 mb-4 md:mb-0">
          <a href="#about" class="hover:text-gray-700" >Sobre Nosotros</a>
          <a href="#services" class="hover:text-gray-700" >Servicios</a>
          <a href="#contact" class="hover:text-gray-700">Contacto</a>
        </div>
          <p class="relative  flex justify-center items-center">2024 | CUSAEM  todos los derechos reservados</p>
        <a href="#inicio" class="button-footer mt-4 lg:mt-0">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
            </path>
          </svg>
        </a>
      </div>
-->