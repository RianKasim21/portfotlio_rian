<template>
    <section id="programming-languages"
    :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'"  class="container mx-auto p-6 my-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Technologies I Master</h2>
  
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- CodeIgniter -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/ci.png" alt="CodeIgniter" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">CodeIgniter</h3>
          <p class="text-gray-600 mt-2">
            A powerful PHP framework with a small footprint, perfect for developers who need a simple and elegant toolkit for web applications.
          </p>
        </div>
  
        <!-- Vue.js -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/logo.png" alt="Vue.js" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">Vue.js</h3>
          <p class="text-gray-600 mt-2">
            A progressive JavaScript framework used for building user interfaces, especially single-page applications.
          </p>
        </div>
  
        <!-- Tailwind CSS -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/tailwind.png" alt="Tailwind CSS" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">Tailwind CSS</h3>
          <p class="text-gray-600 mt-2">
            A utility-first CSS framework that provides low-level utility classes to build custom designs easily.
          </p>
        </div>
  
        <!-- JavaScript -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/js.png" alt="JavaScript" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">JavaScript</h3>
          <p class="text-gray-600 mt-2">
            The essential programming language for web development, allowing for dynamic and interactive user experiences.
          </p>
        </div>
  
        <!-- PHP -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/php.svg" alt="PHP" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">PHP</h3>
          <p class="text-gray-600 mt-2">
            A widely-used server scripting language, especially suited for web development and embedding into HTML.
          </p>
        </div>
  
        <!-- SQL -->
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="../assets/MySQL.png" alt="SQL" class="mx-auto h-20 mb-4" />
          <h3 class="text-xl font-semibold">SQL</h3>
          <p class="text-gray-600 mt-2">
            A domain-specific language used in programming and managing relational databases.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProgrammingLanguages',
    data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 500); // Delay animasi saat halaman dimuat
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
  