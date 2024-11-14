<template>
  <section 
    id="about" 
    :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" 
    class="container mx-auto p-8 my-12 bg-white shadow-md rounded-lg"
  >
    <div class="flex flex-col md:flex-row items-center">
      <!-- Foto Profil -->
      <div class="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <div class="relative group">
          <img src="../assets/Foto.jpeg" alt="Profile" class="rounded-lg shadow-lg max-w-xs md:max-w-sm transition duration-500 ease-in-out transform group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-0 group-hover:opacity-60 transition duration-500 rounded-lg"></div>
        </div>
      </div>
      
      <!-- Deskripsi -->
      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        <h2 class="text-4xl font-extrabold mb-2 text-indigo-600">Hello, I'm Rian Kasim Ramadan</h2>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Web Developer & Tech Enthusiast</h3>
        <p class="text-gray-700 leading-relaxed" aria-label="Profile description of Rian Kasim Ramadan, a web developer with expertise in CodeIgniter, Vue.js, Tailwind CSS, and BigQuery">
  Hi, I’m <strong>Rian Kasim Ramadan</strong>, a highly motivated and dedicated web developer passionate about building visually appealing, functional, and user-centric applications. 
  With a strong background in both front-end and back-end development, I specialize in creating seamless web solutions that enhance user experience and meet modern web standards. 
  My technical skill set includes working with frameworks and technologies such as <span class="font-semibold text-indigo-600">CodeIgniter</span> for efficient server-side development, 
  <span class="font-semibold text-indigo-600">Vue.js</span> for dynamic, interactive user interfaces, <span class="font-semibold text-indigo-600">Tailwind CSS</span> for custom, responsive styling, 
  and <span class="font-semibold text-indigo-600">BigQuery</span> to handle data analytics and support data-driven decisions.

  Over the years, I have contributed to a variety of impactful projects, including payroll systems that streamline employee management processes and school library management applications 
  that simplify and automate book lending. In each project, I prioritize clear functionality, maintainability, and usability to ensure a seamless experience for end-users. 
  I am always excited to learn and adopt new technologies that enhance productivity and keep up with current trends in the web development landscape.
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

/* Hover Effect for Image */
.group:hover img {
  transform: scale(1.05);
}

.group:hover .bg-gradient-to-b {
  opacity: 0.6;
}
</style>
