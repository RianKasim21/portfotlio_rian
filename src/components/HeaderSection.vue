<template>
  <header :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" class="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
    <div class="container mx-auto p-6">
      <nav class="flex justify-between items-center">
        <!-- Logo / Title -->
        <h1 class="text-2xl font-extrabold text-white tracking-wide">
          My<span class="text-yellow-400">Portfolio</span>
        </h1>

        <!-- Navigation Links -->
        <ul class="flex space-x-6">
          <li><a href="#about" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('about')">About</a></li>
          <li><a href="#projects" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('projects')">Projects</a></li>
          <li><a href="#contact" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('contact')">Contact</a></li>
        </ul>

        <!-- Call to Action Button -->
        <a href="#contact" class="ml-6 px-5 py-2 bg-yellow-400 text-indigo-600 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300" @click.prevent="scrollToSection('contact')">
          Hire Me
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isLoaded: false // untuk memicu animasi saat halaman dimuat
    };
  },
  mounted() {
    // Menunggu hingga halaman selesai dimuat, lalu menampilkan animasi
    setTimeout(() => {
      this.isLoaded = true;
    }, 100); // Bisa diatur sesuai waktu delay yang diinginkan
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
/* Animasi masuk fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out forwards;
}

.opacity-0 {
  opacity: 0;
}
</style>
