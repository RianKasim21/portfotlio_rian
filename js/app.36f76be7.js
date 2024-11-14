(function(){"use strict";var a={697:function(a,e,t){var n=t(751),i=t(641);const s={id:"app"};function o(a,e,t,n,o,r){const d=(0,i.g2)("HeaderSection"),l=(0,i.g2)("AboutSection"),c=(0,i.g2)("ProgrammingLanguages"),g=(0,i.g2)("ProjectForm"),u=(0,i.g2)("ContactForm"),m=(0,i.g2)("FooterSection");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(d),(0,i.bF)(l),(0,i.bF)(c),(0,i.bF)(g),(0,i.bF)(u),(0,i.bF)(m)])}var r=t(33);const d={class:"container mx-auto p-6"},l={class:"flex flex-col md:flex-row justify-between items-center"};function c(a,e,t,s,o,c){return(0,i.uX)(),(0,i.CE)("header",{class:(0,r.C4)([o.isLoaded?"animate-fadeIn":"opacity-0","bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg"])},[(0,i.Lk)("div",d,[(0,i.Lk)("nav",l,[e[5]||(e[5]=(0,i.Lk)("h1",{class:"text-2xl font-extrabold text-white tracking-wide"},[(0,i.Lk)("span",{class:"text-yellow-400"},"Rian Kasim Ramadan")],-1)),(0,i.Lk)("button",{onClick:e[0]||(e[0]=(...a)=>c.toggleNavbar&&c.toggleNavbar(...a)),class:"text-white md:hidden focus:outline-none"},e[4]||(e[4]=[(0,i.Lk)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),(0,i.Lk)("ul",{class:(0,r.C4)([o.isNavbarOpen?"block":"hidden md:flex md:space-x-6","flex flex-col md:flex-row space-y-2 md:space-y-0"])},[(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#about",class:"text-white hover:text-yellow-400 transition-colors duration-300",onClick:e[1]||(e[1]=(0,n.D$)((a=>c.scrollToSection("about")),["prevent"]))},"About")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#projects",class:"text-white hover:text-yellow-400 transition-colors duration-300",onClick:e[2]||(e[2]=(0,n.D$)((a=>c.scrollToSection("projects")),["prevent"]))},"Projects")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#contact",class:"text-white hover:text-yellow-400 transition-colors duration-300",onClick:e[3]||(e[3]=(0,n.D$)((a=>c.scrollToSection("contact")),["prevent"]))},"Contact")])],2)])])],2)}var g={name:"HeaderSection",data(){return{isLoaded:!1,isNavbarOpen:!1}},mounted(){setTimeout((()=>{this.isLoaded=!0}),100)},methods:{scrollToSection(a){const e=document.getElementById(a);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"}),this.isNavbarOpen=!1},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen}}},u=t(262);const m=(0,u.A)(g,[["render",c],["__scopeId","data-v-a2482f6a"]]);var h=m,p=t.p+"img/Foto.5a3be0e8.jpeg";function v(a,e,t,n,s,o){return(0,i.uX)(),(0,i.CE)("section",{id:"about",class:(0,r.C4)([s.isLoaded?"animate-fadeIn":"opacity-0","container mx-auto p-8 my-12 bg-white shadow-md rounded-lg"])},e[0]||(e[0]=[(0,i.Fv)('<div class="flex flex-col md:flex-row items-center" data-v-87dcf55a><div class="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0" data-v-87dcf55a><div class="relative group" data-v-87dcf55a><img src="'+p+'" alt="Profile" class="rounded-lg shadow-lg max-w-xs md:max-w-sm transition duration-500 ease-in-out transform group-hover:scale-105" data-v-87dcf55a><div class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-0 group-hover:opacity-60 transition duration-500 rounded-lg" data-v-87dcf55a></div></div></div><div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left" data-v-87dcf55a><h2 class="text-4xl font-extrabold mb-2 text-indigo-600" data-v-87dcf55a>Hello, I&#39;m Rian Kasim Ramadan</h2><h3 class="text-2xl font-bold mb-4 text-gray-800" data-v-87dcf55a>Web Developer &amp; Tech Enthusiast</h3><p class="text-gray-700 leading-relaxed" aria-label="Profile description of Rian Kasim Ramadan, a web developer with expertise in CodeIgniter, Vue.js, Tailwind CSS, and BigQuery" data-v-87dcf55a> Hi, I’m <strong data-v-87dcf55a>Rian Kasim Ramadan</strong>, a highly motivated and dedicated web developer passionate about building visually appealing, functional, and user-centric applications. With a strong background in both front-end and back-end development, I specialize in creating seamless web solutions that enhance user experience and meet modern web standards. My technical skill set includes working with frameworks and technologies such as <span class="font-semibold text-indigo-600" data-v-87dcf55a>CodeIgniter</span> for efficient server-side development, <span class="font-semibold text-indigo-600" data-v-87dcf55a>Vue.js</span> for dynamic, interactive user interfaces, <span class="font-semibold text-indigo-600" data-v-87dcf55a>Tailwind CSS</span> for custom, responsive styling, and <span class="font-semibold text-indigo-600" data-v-87dcf55a>BigQuery</span> to handle data analytics and support data-driven decisions. Over the years, I have contributed to a variety of impactful projects, including payroll systems that streamline employee management processes and school library management applications that simplify and automate book lending. In each project, I prioritize clear functionality, maintainability, and usability to ensure a seamless experience for end-users. I am always excited to learn and adopt new technologies that enhance productivity and keep up with current trends in the web development landscape. </p></div></div>',1)]),2)}var A={name:"AboutSection",data(){return{isLoaded:!1}},mounted(){setTimeout((()=>{this.isLoaded=!0}),400)}};const b=(0,u.A)(A,[["render",v],["__scopeId","data-v-87dcf55a"]]);var f=b,w=t.p+"img/ci.8527d0aa.png",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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",x=t.p+"img/tailwind.34e7f165.png",I=t.p+"img/js.15da7f96.png",C=t.p+"img/php.6f588f3b.svg",y="data:image/png;base64,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";function B(a,e,t,n,s,o){return(0,i.uX)(),(0,i.CE)("section",{id:"programming-languages",class:(0,r.C4)([s.isLoaded?"animate-fadeIn":"opacity-0","container mx-auto p-6 my-12"])},e[0]||(e[0]=[(0,i.Fv)('<h2 class="text-3xl font-bold mb-6 text-center" data-v-2ca536ea>Technologies I Master</h2><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-v-2ca536ea><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+w+'" alt="CodeIgniter" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>CodeIgniter</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> A powerful PHP framework with a small footprint, perfect for developers who need a simple and elegant toolkit for web applications. </p></div><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+k+'" alt="Vue.js" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>Vue.js</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> A progressive JavaScript framework used for building user interfaces, especially single-page applications. </p></div><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+x+'" alt="Tailwind CSS" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>Tailwind CSS</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> A utility-first CSS framework that provides low-level utility classes to build custom designs easily. </p></div><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+I+'" alt="JavaScript" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>JavaScript</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> The essential programming language for web development, allowing for dynamic and interactive user experiences. </p></div><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+C+'" alt="PHP" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>PHP</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> A widely-used server scripting language, especially suited for web development and embedding into HTML. </p></div><div class="bg-white p-6 rounded-lg shadow-lg text-center" data-v-2ca536ea><img src="'+y+'" alt="SQL" class="mx-auto h-20 mb-4" data-v-2ca536ea><h3 class="text-xl font-semibold" data-v-2ca536ea>SQL</h3><p class="text-gray-600 mt-2" data-v-2ca536ea> A domain-specific language used in programming and managing relational databases. </p></div></div>',2)]),2)}var E={name:"ProgrammingLanguages",data(){return{isLoaded:!1}},mounted(){setTimeout((()=>{this.isLoaded=!0}),500)}};const Q=(0,u.A)(E,[["render",B],["__scopeId","data-v-2ca536ea"]]);var S=Q;const N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},W={class:"overflow-hidden rounded-lg"},L=["src"],j={class:"text-2xl font-bold"},P={class:"text-gray-600"},R=["onClick"],Y=["href"];function Z(a,e,t,n,s,o){return(0,i.uX)(),(0,i.CE)("section",{id:"projects",class:(0,r.C4)([s.isLoaded?"animate-fadeIn":"opacity-0","container mx-auto p-6 my-12"])},[e[0]||(e[0]=(0,i.Lk)("h2",{class:"text-3xl font-bold mb-6 text-center"},"My Projects",-1)),(0,i.Lk)("div",N,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.projects,(a=>((0,i.uX)(),(0,i.CE)("div",{key:a.id,class:"bg-white p-4 rounded-lg shadow-lg"},[(0,i.Lk)("div",W,[(0,i.Lk)("img",{src:a.image,alt:"Project Image",class:"mb-4 rounded transition-transform duration-300 hover:scale-105"},null,8,L)]),(0,i.Lk)("h3",j,(0,r.v_)(a.name),1),(0,i.Lk)("p",P,(0,r.v_)(a.showFullDescription?a.description:a.description.slice(0,100)+"..."),1),(0,i.Lk)("button",{onClick:e=>a.showFullDescription=!a.showFullDescription,class:"text-gray-800 hover:underline mt-2"},(0,r.v_)(a.showFullDescription?"Lihat Lebih Sedikit":"Lihat Selengkapnya"),9,R),a.showLink?((0,i.uX)(),(0,i.CE)("a",{key:0,href:a.link,target:"_blank",rel:"noopener noreferrer",class:"block mt-4 text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500 transition-colors duration-300"}," Kunjungi Proyek ",8,Y)):(0,i.Q3)("",!0)])))),128))])],2)}var V={name:"ProjectForm",data(){return{isLoaded:!1,projects:[{id:1,name:"Penggajian Pegawai",description:"Sistem Manajemen Penggajian ini dirancang untuk memudahkan perusahaan dalam mengelola proses penggajian karyawan secara efisien dan akurat. Dengan sistem ini, perhitungan gaji, potongan, dan tunjangan dapat dilakukan secara otomatis berdasarkan data kehadiran dan jam kerja. Sistem ini juga menyediakan laporan penggajian yang terstruktur, membantu perusahaan dalam menjaga transparansi serta mematuhi peraturan penggajian yang berlaku. Teknologi yang digunakan dalam proyek ini meliputi CodeIgniter untuk backend dan MySQL untuk basis data.",image:t(711),showFullDescription:!1},{id:2,name:"Perpustakaan",description:"Sistem Informasi Perpustakaan ini dirancang untuk memudahkan pengelolaan buku, anggota, dan transaksi peminjaman di perpustakaan. Dengan aplikasi ini, pengguna dapat melakukan pencarian buku, mengelola data anggota, serta mencatat dan melacak peminjaman dan pengembalian buku secara efisien. Sistem ini juga dilengkapi dengan fitur pengingat otomatis untuk pengembalian buku yang melewati batas waktu, serta laporan statistik peminjaman untuk membantu pihak perpustakaan dalam mengoptimalkan pengelolaan koleksi buku. Aplikasi ini dikembangkan menggunakan Java dengan IDE NetBeans, serta terintegrasi dengan basis data MySQL untuk menyimpan data secara aman dan terstruktur.",image:t(319),showFullDescription:!1,showLink:!1},{id:3,name:"Vending Machine Sales Analysis",description:"I had responsibility to cleaned dataset and query data to obtain answers to the business questions posed. Collaborate with the data visualization team by preparing cleaned data for visualization needs.",image:t(706),showFullDescription:!1,showLink:!0,link:"https://lookerstudio.google.com/u/0/reporting/0ea376ec-6c6c-44c8-b7bc-38d37256d50f"},{id:4,name:"Vending Machine Sales Dashboard",description:"Here is the dashboard website for vending machine sales analysis. I am responsible to develop and maintaining this website.",image:t(529),showFullDescription:!1,showLink:!0,link:"https://km-feb24-palembang-4.vercel.app/"}]}},mounted(){setTimeout((()=>{this.isLoaded=!0}),700)}};const F=(0,u.A)(V,[["render",Z],["__scopeId","data-v-4d8fcdc2"]]);var z=F;function G(a,e,t,n,s,o){return(0,i.uX)(),(0,i.CE)("section",{id:"contact",class:(0,r.C4)([s.isLoaded?"animate-fadeIn":"opacity-0","container mx-auto p-6 my-12 text-center"])},e[0]||(e[0]=[(0,i.Fv)('<h2 class="text-3xl font-bold mb-6" data-v-4d7a955e>Contact Me</h2><p class="text-gray-700 mb-4" data-v-4d7a955e>Feel free to reach out to me through my social media profiles or send an email!</p><div class="flex justify-center space-x-6 text-gray-700" data-v-4d7a955e><a href="mailto:riankasim421@gmail.com" class="text-gray-600 hover:text-indigo-600" aria-label="Email" data-v-4d7a955e><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" data-v-4d7a955e><path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm14 2H7a1 1 0 000 2h10a1 1 0 100-2z" data-v-4d7a955e></path></svg></a><a href="https://www.linkedin.com/in/rian-kasim-ramadan-45b136293/" class="text-gray-600 hover:text-indigo-600" aria-label="LinkedIn" data-v-4d7a955e><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" data-v-4d7a955e><path d="M20.447 20.452H16.34v-5.305c0-1.302-.468-2.19-1.644-2.19-.898 0-1.433.604-1.667 1.187-.086.209-.107.499-.107.791v5.518h-4.105s.055-8.963 0-9.888h4.105v1.4c.543-.836 1.518-2.029 3.698-2.029 2.698 0 4.727 1.777 4.727 5.593v5.924zM5.337 6.433C4.123 6.433 3.1 7.452 3.1 8.663c0 1.205 1.014 2.226 2.225 2.226h.027c1.215 0 2.24-1.021 2.24-2.226-.001-1.211-1.025-2.23-2.239-2.23zm-2.05 14.019h4.1v-9.888h-4.1v9.888zM22.224 0H1.767C.791 0 0 .778 0 1.734v20.531c0 .957.79 1.735 1.767 1.735h20.457c.976 0 1.776-.779 1.776-1.735V1.734C24 .778 23.2 0 22.224 0z" data-v-4d7a955e></path></svg></a><a href="https://github.com/RianKasim21" class="text-gray-600 hover:text-indigo-600" aria-label="GitHub" data-v-4d7a955e><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" data-v-4d7a955e><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.774.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.45 11.45 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.293-1.553 3.301-1.23 3.301-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.62-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .323.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" data-v-4d7a955e></path></svg></a></div>',3)]),2)}var D={name:"ContactSection",data(){return{isLoaded:!1}},mounted(){setTimeout((()=>{this.isLoaded=!0}),900)}};const O=(0,u.A)(D,[["render",G],["__scopeId","data-v-4d7a955e"]]);var H=O;function J(a,e,t,n,s,o){return(0,i.uX)(),(0,i.CE)("footer",{class:(0,r.C4)([s.isLoaded?"animate-fadeIn":"opacity-0","bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg p-4 text-center"])},e[0]||(e[0]=[(0,i.Lk)("p",{class:"text-white"},"© 2024 Rian Kasim Ramadan. All rights reserved.",-1)]),2)}var M={name:"FooterSection",data(){return{isLoaded:!1}},mounted(){setTimeout((()=>{this.isLoaded=!0}),1100)}};const T=(0,u.A)(M,[["render",J],["__scopeId","data-v-61164870"]]);var U=T,K={components:{HeaderSection:h,AboutSection:f,ProgrammingLanguages:S,ProjectForm:z,ContactForm:H,FooterSection:U}};const X=(0,u.A)(K,[["render",o]]);var q=X;(0,n.Ef)(q).mount("#app")},319:function(a,e,t){a.exports=t.p+"img/netbeans.40f672ab.jpeg"},711:function(a,e,t){a.exports=t.p+"img/penggajian.6a55018c.jpeg"},706:function(a,e,t){a.exports=t.p+"img/sales.27a55987.png"},529:function(a,e,t){a.exports=t.p+"img/vending.ca935b0b.png"}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return a[n](s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,n,i,s){if(!n){var o=1/0;for(c=0;c<a.length;c++){n=a[c][0],i=a[c][1],s=a[c][2];for(var r=!0,d=0;d<n.length;d++)(!1&s||o>=s)&&Object.keys(t.O).every((function(a){return t.O[a](n[d])}))?n.splice(d--,1):(r=!1,s<o&&(o=s));if(r){a.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[n,i,s]}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p=""}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var i,s,o=n[0],r=n[1],d=n[2],l=0;if(o.some((function(e){return 0!==a[e]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(d)var c=d(t)}for(e&&e(n);l<o.length;l++)s=o[l],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(c)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(697)}));n=t.O(n)})();
//# sourceMappingURL=app.36f76be7.js.map