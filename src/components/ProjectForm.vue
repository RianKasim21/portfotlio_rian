<template>
  <section id="projects" :class="isLoaded ? 'animate-fadeIn' : 'opacity-0'" class="container mx-auto p-6 my-12">
    <h2 class="text-3xl font-bold mb-6 text-center">My Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-white p-4 rounded-lg shadow-lg">
        <!-- Gambar Proyek dengan Animasi Hover -->
        <div class="overflow-hidden rounded-lg">
          <img 
            :src="project.image" 
            alt="Project Image" 
            class="mb-4 rounded transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 class="text-2xl font-bold">{{ project.name }}</h3>
        <p class="text-gray-600">
          {{ project.showFullDescription ? project.description : project.description.slice(0, 100) + '...' }}
        </p>
        <!-- Tombol Lihat Selengkapnya -->
        <button 
          @click="project.showFullDescription = !project.showFullDescription"
          class="text-gray-800 hover:underline mt-2"
        >
          {{ project.showFullDescription ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya' }}
        </button>
        <!-- Tombol Kunjungi Proyek hanya untuk proyek dengan showLink true -->
        <a 
          v-if="project.showLink"
          :href="project.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block mt-4 text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500 transition-colors duration-300"
        >
          Kunjungi Proyek
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectForm',
  data() {
    return {
      isLoaded: false,
      projects: [
        { 
          id: 1, 
          name: 'Penggajian Pegawai', 
          description: 'Sistem Manajemen Penggajian ini dirancang untuk memudahkan perusahaan dalam mengelola proses penggajian karyawan secara efisien dan akurat. Dengan sistem ini, perhitungan gaji, potongan, dan tunjangan dapat dilakukan secara otomatis berdasarkan data kehadiran dan jam kerja. Sistem ini juga menyediakan laporan penggajian yang terstruktur, membantu perusahaan dalam menjaga transparansi serta mematuhi peraturan penggajian yang berlaku. Teknologi yang digunakan dalam proyek ini meliputi CodeIgniter untuk backend dan MySQL untuk basis data.', 
          image: require('../assets/penggajian.jpeg'),
          showFullDescription: false,
        },
        { 
          id: 2, 
          name: 'Perpustakaan', 
          description: 'Sistem Informasi Perpustakaan ini dirancang untuk memudahkan pengelolaan buku, anggota, dan transaksi peminjaman di perpustakaan. Dengan aplikasi ini, pengguna dapat melakukan pencarian buku, mengelola data anggota, serta mencatat dan melacak peminjaman dan pengembalian buku secara efisien. Sistem ini juga dilengkapi dengan fitur pengingat otomatis untuk pengembalian buku yang melewati batas waktu, serta laporan statistik peminjaman untuk membantu pihak perpustakaan dalam mengoptimalkan pengelolaan koleksi buku. Aplikasi ini dikembangkan menggunakan Java dengan IDE NetBeans, serta terintegrasi dengan basis data MySQL untuk menyimpan data secara aman dan terstruktur.', 
          image: require('../assets/netbeans.jpeg'), 
          showFullDescription: false,
          showLink: false // Tidak tampilkan tombol untuk proyek ini
        },
        { 
          id: 3, 
          name: 'Vending Machine Sales Analysis', 
          description: 'I had responsibility to cleaned dataset and query data to obtain answers to the business questions posed. Collaborate with the data visualization team by preparing cleaned data for visualization needs.', 
          image: require('../assets/sales.png'), 
          showFullDescription: false,
          showLink: true,
          link: 'https://lookerstudio.google.com/u/0/reporting/0ea376ec-6c6c-44c8-b7bc-38d37256d50f'
        },
        { 
          id: 4, 
          name: 'Vending Machine Sales Dashboard', 
          description: 'Here is the dashboard website for vending machine sales analysis. I am responsible to develop and maintaining this website.', 
          image: require('../assets/vending.png'), 
          showFullDescription: false,
          showLink: true, // Tampilkan tombol untuk proyek ini
          link: 'https://km-feb24-palembang-4.vercel.app/'
        }
      ]
    };
  }, 
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 700); // Delay animasi saat halaman dimuat
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

/* Efek hover pada gambar */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>
