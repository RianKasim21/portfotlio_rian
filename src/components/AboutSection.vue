<template>
  <section 
    id="about" 
    :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" 
    class="container mx-auto p-6 my-12"
  >
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 flex justify-center md:justify-start">
        <img src="../assets/Foto.jpeg" alt="Profile" class="rounded-lg shadow-lg max-w-xs md:max-w-sm" />
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p class="text-gray-600">
          Hi, I’m a web developer with a passion for creating effective and visually appealing applications. 
          My experience includes developing web applications with technologies like CodeIgniter, Vue.js, Tailwind CSS, and BigQuery for data analytics. I’ve been part of exciting projects, like building payroll systems and school library applications, where I focused on usability and functionality.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 400); // Delay animasi saat halaman dimuat
  }
};
</script>

<style scoped>
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
