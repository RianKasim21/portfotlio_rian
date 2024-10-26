<template>
    <footer :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" class="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg p-4 text-center">
      <p class="text-white">&copy; 2024 Rian Kasim Ramadan. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
    data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1100); // Delay animasi saat halaman dimuat
  }
};
</script>

<style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
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
  