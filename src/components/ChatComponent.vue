<template>
    <div id="zammad-chat"></div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    name: 'ChatComponent',
    setup() {
      onMounted(() => {
        // Configuración del chat al montar el componente
        new ZammadChat({
          fontSize: '12px',
          chatId: 1,
        });
      }); 
    },
  };
  </script>
  
  <style scoped>

  </style>
  