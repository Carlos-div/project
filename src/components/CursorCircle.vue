<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursor = ref(null);

const updateCursor = (e) => {
  const cursorElement = cursor.value;
  cursorElement.style.left = `${e.clientX}px`;
  cursorElement.style.top = `${e.clientY}px`;
};

onMounted(() => {
  document.addEventListener('mousemove', updateCursor);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor);
});
</script>

<template>
    
    <div ref="cursor" class="cursor">
        <div ref="cursor2" class="cursor2">
        </div>
    </div>

</template>
  

  
  <style scoped>
@keyframes girar { 
    0% { 
        transform: translate(-50%, -50%) rotate(0deg); 
    } 
    100% { 
        transform: translate(-50%, -50%) rotate(360deg);
 }
}



  .cursor {
    position: fixed;
    width: 128px;
    height: 128px;
    background-color: transparent;
    border-top: white 3px solid;
    border-bottom: white 3px solid;
    border-left: black 3px solid;
    border-right: black 3px solid;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    z-index: 9999;
    animation: girar 2s infinite linear;
  }

  .cursor2{
    position: fixed;
    width: 80px;
    height: 80px;
    background-color: transparent;
    border-top: black 3px solid;
    border-bottom: black 3px solid;
    border-left: white 3px solid;
    border-right: white 3px solid;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(30%, 30%);
    transform: transform 0.1s ease;
    z-index: 9999;
  }

  </style>
  