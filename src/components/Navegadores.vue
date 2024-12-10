<template>
  <section class="iconos sec-reto">
    <a href="#section1" class="button-container">
      <div class="button group">
        <div class="icon">1</div>
        <span>Acerca de</span>
      </div>
    </a>
    <a href="#section2" class="button-container">
      <div class="button group">
        <div class="icon">2</div>
        <span>Servicios</span>
      </div>
    </a>
    <a href="#section3" class="button-container">
      <div class="button group">
        <div class="icon">3</div>
        <span>Empleo</span>
      </div>
    </a>
    <a href="#section4" class="button-container">
      <div class="button group">
        <div class="icon">4</div>
        <span>Confianza</span>
      </div>
    </a>
    <a href="#section5" class="button-container">
      <div class="button group">
        <div class="icon">5</div>
        <span>Ubicación</span>
      </div>
    </a>
  </section>
</template>

<style scoped>
.iconos {
  @apply fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-40;
}

.button-container {
  @apply relative h-16 w-full;  
}

.sec-reto .button {
  @apply absolute top-0 right-0 h-16 w-16 font-sans overflow-hidden bg-amber-50 rounded-full cursor-pointer shadow-lg transition-all duration-500 ease-out;
}

.sec-reto .button:hover {
  width: 220px; 
}

.sec-reto .button:hover .icon {
  background-color: #ddbe73;
  color: white;
}

.sec-reto .button .icon {
  @apply inline-block w-16 h-16 text-center rounded-full transition-all duration-500 ease-out;
  line-height: 4rem;
}

.sec-reto .button span {
  @apply text-sm leading-none font-light ml-4;
  opacity: 0;
  display: inline-block;
  transition: opacity 0.3s ease-out, margin-left 0.3s ease-out;
}

.sec-reto .button:hover span {
  opacity: 1;
  margin-left: 1rem;
}
</style>


<!--
<script>
export default {
  data() {
    return {
      sections: [
        { id: 'section1', icon: '1', label: 'Acerca de' },
        { id: 'section2', icon: '2', label: 'Empleo' },
        { id: 'section3', icon: '3', label: 'Servicios' },
        { id: 'section4', icon: '4', label: 'Confianza' },
      ],
      activeSection: ''
    };
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    },
    observeSections() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(this.handleIntersection, options);
      this.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      });
    },
  },
  mounted() {
    this.observeSections();
  },
};
</script>

<template>
  <section class="iconos sec-reto">
    <a 
      v-for="section in sections" 
      :key="section.id" 
      :href="`#${section.id}`"
      :class="['button-container', { active: activeSection === section.id }]"
    >
      <div class="button group">
        <div class="icon">{{ section.icon }}</div>
        <span>{{ section.label }}</span>
      </div>
    </a>
  </section>
</template>


<style scoped>
.iconos {
  @apply fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-40;
}

.button-container {
  @apply relative h-16 w-full;  
}

.sec-reto .button {
  @apply absolute top-0 right-0 h-16 w-16 font-sans overflow-hidden bg-amber-50 rounded-full cursor-pointer shadow-lg transition-all duration-500 ease-out;
}

.sec-reto .button:hover {
  width: 220px; 
}

.sec-reto .button:hover .icon {
  background-color: #ddbe73;
  color: white;
}

.sec-reto .button .icon {
  @apply inline-block w-16 h-16 text-center rounded-full transition-all duration-500 ease-out;
  line-height: 4rem;
}

.sec-reto .button span {
  @apply text-sm leading-none font-light ml-4;
  opacity: 0;
  display: inline-block;
  transition: opacity 0.3s ease-out, margin-left 0.3s ease-out;
}

.sec-reto .button:hover span {
  opacity: 1;
  margin-left: 1rem;
}
</style>
-->
