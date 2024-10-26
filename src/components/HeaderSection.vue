<template>
  <header :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" class="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
    <div class="container mx-auto p-6">
      <nav class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo / Title -->
        <h1 class="text-2xl font-extrabold text-white tracking-wide">
          My<span class="text-yellow-400">Portfolio</span>
        </h1>

        <!-- Toggle Button for Mobile -->
        <button @click="toggleNavbar" class="text-white md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Navigation Links -->
        <ul :class="isNavbarOpen ? 'block' : 'hidden' + ' md:flex md:space-x-6'" class="flex flex-col md:flex-row space-y-2 md:space-y-0">
          <li><a href="#about" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('about')">About</a></li>
          <li><a href="#projects" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('projects')">Projects</a></li>
          <li><a href="#contact" class="text-white hover:text-yellow-400 transition-colors duration-300" @click.prevent="scrollToSection('contact')">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isLoaded: false, // untuk memicu animasi saat halaman dimuat
      isNavbarOpen: false // kontrol toggle untuk navbar
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
      // Tutup navbar setelah navigasi pada perangkat mobile
      this.isNavbarOpen = false;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; // Toggle the navbar open/close state
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
