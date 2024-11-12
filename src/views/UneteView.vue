<script setup>

</script>


<template>
    <div id="unete">
        <div class="flex justify-center p-16">
        
        <div class="location-card">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.1590524713129!2d-99.21201374978271!3d19.52795198512832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a75172f65%3A0x2ece74a5bbfa28dd!2sCUSAEM!5e0!3m2!1ses-419!2smx!4v1728413125985!5m2!1ses-419!2smx" 
          class="map flex justify-center" 
          loading="lazy"></iframe>
        <a class="text-primary inline-flex items-center">Policía Auxiliar del, Prol. Galeana 28, La Loma, 54060 Tlalnepantla, Méx.</a>
        
        <div class="flex justify-center mt-4">
          <button class="location-button">
            <a href="https://maps.app.goo.gl/WgF6VWKPAGdNdas59" target="_blank">Loma</a>
          </button>
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
