<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
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

    return {
      proofElement
    };
  }
};
</script>


<template>
    <div class="relative font-montserrat font-extrabold text-gray-900 snap-item z-10" id="section5">
        <img src="/imagenes/fondo.jpg" alt="fondo cusaem" class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75" />
        <h1 ref="proofElement" class="relative text-4xl md:text-5xl xl:text-6xl pt-24 pl-12 bg1 anim-right">Locaciones de nuestras 3 corporaciones</h1>
        <div>
            <div class="grid grid-cols-3 pl-12 pt-16">
                <!--LOMA-->
                    <a href="https://maps.app.goo.gl/SGeAibzHZSw7hYzCA" target="_blank">
                        <div class="relative flex flex-col sm:flex-col shadow-5xl rounded-lg overflow-hidden w-24 md:w-48 lg:w-72 xl:w-96 p-6 cursor-pointer">
                            <div class="flex items-center justify-center">
                                <p class="text-xs md:text-2xl mb-4 Btn text-center pl-0 md:pl-10 pt-1">LOMA</p>
                            </div>
                            <div class="w-auto h-0 pb-[100%] relative">
                                <iframe class="absolute top-0 left-0 w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3156782701417!2d-99.21460182415468!3d19.52805623762431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a75172f65%3A0x2ece74a5bbfa28dd!2sCUSAEM!5e0!3m2!1ses-419!2smx!4v1733854156004!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                                <p class="mt-4 md:text-lg">Policía Auxiliar del, Prol. Galeana 28, La Loma, 54060 Tlalnepantla, Méx.</p>
                        </div>
                    </a>

                <!--AUXILIAR-->
            <a href="https://maps.app.goo.gl/etgy7Cc8QjAs63Ub6" target="_blank">
                <div class="relative flex flex-col sm:flex-col shadow-5xl rounded-lg overflow-hidden w-24 md:w-48 lg:w-72 xl:w-96  p-6">
                    <div class="flex items-center justify-center">
                                <p class="text-xs md:text-2xl mb-4 Btn text-center pl-0 md:pl-6 pt-1">AXUILIAR</p>
                            </div>
                    <div class="w-auto h-0 pb-[100%] relative">
                    <iframe class="absolute top-0 left-0 w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.46049915255!2d-99.17272542415469!3d19.52183363782377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f81f23d0e205%3A0x9a564e79e3dc36fa!2sServicio%20de%20Salud%20de%20los%20Cuerpos%20de%20Seguridad%20Auxiliares%20del%20Estado%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1733774056932!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <p class="mt-4 md:text-xl">C. 26-A 4, Santa Rosa, 54160 Tlalnepantla, Méx.</p>
                </div>
            </a>
                <!--LERMA-->
                <a href="https://maps.app.goo.gl/NqnQwksBR6hqiThZ8" target="_blank">      
                    <div class="relative flex flex-col sm:flex-col shadow-5xl rounded-lg overflow-hidden w-24 md:w-48 lg:w-72 xl:w-96  p-6">
                        <div class="flex items-center justify-center">
                                <p class="text-xs md:text-2xl mb-4 Btn text-center pl-0 md:pl-8 pt-1">LERMA</p>
                            </div>
                        <div class="w-auto h-0 pb-[100%] relative">
                        <iframe class="absolute top-0 left-0 w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.726792981458!2d-99.53676200444225!3d19.294243685147002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf54ed9f982a7%3A0x7477bec3a3f6084c!2sCUSAEM%20Lerma!5e0!3m2!1ses-419!2smx!4v1733774146020!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                        <p class="mt-4 md:text-lg">Del Parque 100, Parque Industrial, 52000 Lerma de Villada, Méx.</p>
                    </div>
                </a>  
            </div>
        </div>
    </div>
</template>

<style>

.Btn {
  width: 160px;
  height: 40px;
  display: flex;
  align-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  color: white;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .5s;
}


.Btn::before {
  width: 160px;
  height: 130px;
  position: absolute;
  content: "";
  background-color: white;
  border-radius: 50%;
  left: -100%;
  top: 0;
  transition-duration: .5s;
  mix-blend-mode: difference;
}

.Btn:hover::before {
  transition-duration: .5s;
  transform: translate(100%,-50%);
  border-radius: 0;
}

.Btn:active {
  transform: translate(5px,5px);
  transition-duration: .5s;
}
</style>