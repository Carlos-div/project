<script setup>

</script>


<template>
  <div class="snap-item">
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
.location-card {
  /*background-color: white;*/
  border: 2px solid #cca346;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.location-image {
  width: 100px;
  height: 100px;
}
.location-button {
  background-color: #cca346;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
}
</style>
