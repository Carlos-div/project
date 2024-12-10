<script setup>

</script>

<template>

  <div class="snap-footer">
    <footer class="relative bg-gray-600 font-montserrat text-secondary p-4 border-t-8 border-gray-700 mt-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <img src="/src/assets/imagenes/logo_circulo.png" alt="logo_footer" class="w-12">
        </div>
        <div class="flex space-x-4 md:space-x-16 mb-4 md:mb-0">
          <a href="#about" class="hover:text-gray-400" >Sobre Nosotros</a>
          <a href="#services" class="hover:text-gray-400" >Servicios</a>
          <a href="#contact" class="hover:text-gray-400">Contacto</a>
        </div>
        <div>
          <p class="text-sm">&copy; 2024 CUSAEM. Todos los derechos reservados.</p>
        </div> 
        <a href="#inicio" class="button-footer mt-4 lg:mt-0">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
            </path>
          </svg>
        </a>
      </div>
      <!--Seguna columna de prueba
      <div class="flex flex-col md:flex-row justify-between items-center pr-24 pl-24">
        <p>Datos de la empresa</p>
        <p>Ubicación Loma</p>
        <p>Ubicación Lerma</p>
        <p>Ubicación Auxiliar</p>
      </div>
      -->
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
  background-color: #4b5563;
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

</style>

 