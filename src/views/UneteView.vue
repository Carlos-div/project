<script setup>
import { onMounted } from 'vue';

onMounted(() => { const firstLocation = document.querySelector('.scroll-up'); 
if (firstLocation) 
{ firstLocation.scrollIntoView({ behavior: 'smooth' }); 
setTimeout(() => { window.scrollBy(0, -100);  
  }, 500); 
  } });
</script>


<template>
  <div class="snap-item scroll-up relative">
    <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" />
     <!--Boton regresar a home-->
     <RouterLink to="/" class="relative group">    
        <button class="mt-24 bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-montserrat group" type="button">
          <div class="bg-zinc-800 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
            </svg>
          </div>
          <p class="translate-x-2">Regresar</p>
        </button>
      </RouterLink>
    <div id="unete" class="flex justify-center items-center p-16">
      <div class="relative">     
        <div class="terminal-loader">
          <div class="terminal-header">
            <div class="terminal-title">Estatus</div>
              <div class="terminal-controls">
                <div class="control close"></div>
                  <div class="control minimize"></div>
                    <div class="control maximize"></div>
              </div>
          </div>
          <div class="text">Cargando...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.2em;
  } /* adjust width based on content */
  90%,
  100% {
    width: 0;
  }
}

.terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: #0f0;
  font-family: "Montserrat";
  font-size: 1em;
  padding: 1.5em 1em;
  width: 32em;
  height: 50vh;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}

.terminal-controls {
  float: right;
}

.control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.control.close {
  background-color: #e33;
}

.control.minimize {
  background-color: #ee0;
}

.control.maximize {
  background-color: #0b0;
}

.terminal-title {
  float: left;
  line-height: 1.5em;
  color: #eee;
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green; /* Cursor */
  animation: typeAndDelete 4s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}
</style>
