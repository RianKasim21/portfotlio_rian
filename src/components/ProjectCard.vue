<template>
    <div class="bg-white p-4 rounded-lg shadow-lg text-center">
      <img :src="project.image" alt="Project Image" class="mb-4 rounded mx-auto" />
      <h3 class="text-2xl font-bold">{{ project.name }}</h3>
      <p class="text-gray-600 transition-all duration-300 overflow-hidden" :style="{ maxHeight: showFullDescription ? '500px' : '60px' }">
        {{ project.description }}
      </p>
      <button @click="toggleDescription" class="text-gray-800 hover:underline mt-2">
        {{ showFullDescription ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    },
    data() {
      return {
        showFullDescription: false
      };
    },
    methods: {
      toggleDescription() {
        this.showFullDescription = !this.showFullDescription;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional styling for each project card */
  </style>
  