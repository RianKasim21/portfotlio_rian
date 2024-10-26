<template>
  <div id="app">
    <HeaderSection />
    <AboutSection />
    <ProgrammingLanguages /> <!-- Tambahkan Komponen Ini -->
    <ProjectForm />
    <ContactForm />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProgrammingLanguages from './components/ProgrammingLanguages.vue'; // Import Komponen Baru
import ProjectForm from './components/ProjectForm.vue';
import ContactForm from './components/ContactForm.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    AboutSection,
    ProgrammingLanguages, // Daftarkan Komponen Baru
    ProjectForm,
    ContactForm,
    FooterSection
  }
};
</script>
