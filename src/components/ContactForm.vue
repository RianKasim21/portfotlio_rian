<template>
  <section id="contact"
  :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" class="container mx-auto p-6 my-12 text-center">
    <h2 class="text-3xl font-bold mb-6">Contact Me</h2>

    <p class="text-gray-700 mb-4">Feel free to reach out to me through my social media profiles or send an email!</p>

    <div class="flex justify-center space-x-6 text-gray-700">
      <!-- Email -->
      <a href="mailto:riankasim421@gmail.com" class="text-gray-600 hover:text-indigo-600" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm14 2H7a1 1 0 000 2h10a1 1 0 100-2z" /></svg>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/rian-kasim-ramadan-45b136293/" class="text-gray-600 hover:text-indigo-600" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H16.34v-5.305c0-1.302-.468-2.19-1.644-2.19-.898 0-1.433.604-1.667 1.187-.086.209-.107.499-.107.791v5.518h-4.105s.055-8.963 0-9.888h4.105v1.4c.543-.836 1.518-2.029 3.698-2.029 2.698 0 4.727 1.777 4.727 5.593v5.924zM5.337 6.433C4.123 6.433 3.1 7.452 3.1 8.663c0 1.205 1.014 2.226 2.225 2.226h.027c1.215 0 2.24-1.021 2.24-2.226-.001-1.211-1.025-2.23-2.239-2.23zm-2.05 14.019h4.1v-9.888h-4.1v9.888zM22.224 0H1.767C.791 0 0 .778 0 1.734v20.531c0 .957.79 1.735 1.767 1.735h20.457c.976 0 1.776-.779 1.776-1.735V1.734C24 .778 23.2 0 22.224 0z"/></svg>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/RianKasim21" class="text-gray-600 hover:text-indigo-600" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.774.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.45 11.45 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.293-1.553 3.301-1.23 3.301-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.62-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .323.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 900); // Delay animasi saat halaman dimuat
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
