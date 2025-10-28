import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Hyperspeed from "./components/HyperSpeed/HyperSpeed";
import "./App.css";

// Hook untuk Intersection Observer
function useSlideIn(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

function App() {
  const [heroRef, heroVisible] = useSlideIn();
  const [profileTitleRef, profileTitleVisible] = useSlideIn();
  const [profileSubRef, profileSubVisible] = useSlideIn();
  const [ekskulTitleRef, ekskulTitleVisible] = useSlideIn();
  const [ekskulSubRef, ekskulSubVisible] = useSlideIn();
  const [beritaTitleRef, beritaTitleVisible] = useSlideIn();
  const [galleryTitleRef, galleryTitleVisible] = useSlideIn();
  const [gallerySubRef, gallerySubVisible] = useSlideIn();
  const [contactTitleRef, contactTitleVisible] = useSlideIn();
  const [contactSubRef, contactSubVisible] = useSlideIn();

  return (
    <div className="app-container">
      {/* Background animasi Hyperspeed */}
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />

      {/* Content */}
      <Navbar />

      {/* HOME PAGE */}
      <main className="pt-24 min-h-screen text-white flex items-center justify-center w-full relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="w-full max-w-[1200px] px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* KOLOM KIRI – HERO TEXT */}
            <div 
              ref={heroRef}
              className={`text-left transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 w-fit px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 border border-cyan-500 shadow-lg backdrop-blur-sm">
                  <p className="text-cyan-400 font-semibold tracking-wide text-lg md:text-xl italic">
                    "Trying to do better ✨"
                  </p>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Halo, Saya <span className="text-cyan-400">Thoriq Al-Kautsar</span>
              </h1>

              <p className="text-white/70 md:text-lg mb-6">
                Siswa SMAN 62 Jakarta yang sedang mengembangkan portfolio pribadi
                berbasis website. Website ini menjadi ruang untuk memperkenalkan diri,
                kegiatan, dan karya saya.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">4+</div>
                  <div className="text-xs text-white/60">Organisasi</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-white/60">Prestasi</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">2025</div>
                  <div className="text-xs text-white/60">Active</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <ProfileCard
                name="Thoriq Al-Kautsar"
                title="Siswa SMAN 62 JAKARTA"
                handle="Thoriqqq_27"
                status="Online"
                contactText="Contact Me"
                avatarUrl="assets/THORIQ.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </div>
        </div>
      </main>

      {/* PROFILE */}
      <section id="profile" className="relative py-20 overflow-hidden w-full">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(51,255,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(51,255,252,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="w-full max-w-[1000px] px-6 mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 
              ref={profileTitleRef}
              className={`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${
                profileTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              Tentang Saya
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </h2>
            <p 
              ref={profileSubRef}
              className={`text-white/70 max-w-2xl mx-auto transition-all duration-1000 ${
                profileSubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              Sedikit cerita tentang siapa saya dan apa yang saya sukai 🌟
            </p>
          </div>

          {/* KONTEN DESKRIPSI */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl blur-xl"></div>
            
            <div className="relative border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30">
              <p className="text-white/80 leading-relaxed md:text-lg">
                Saya Thoriq, siswa SMAN 62 Jakarta yang memiliki ketertarikan besar pada dunia
                teknologi, desain, dan pengembangan diri. Saya senang mempelajari hal-hal
                baru, terutama yang berkaitan dengan kreativitas digital dan pemrograman.
                Dalam setiap kegiatan, saya berusaha untuk terus berkembang dan memberikan
                hasil terbaik.  
              </p>
              <p className="text-white/80 leading-relaxed md:text-lg mt-4">
                Bagi saya, membuat sesuatu yang bermanfaat bagi orang lain adalah kepuasan
                tersendiri. Karena itu, saya menjadikan web portfolio ini sebagai tempat
                untuk menunjukkan perjalanan dan karya saya ke depannya 🚀
              </p>

              {/* INFO TAMBAHAN */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <span className="inline-block">💻</span> Pemrograman
                </div>
                <div className="group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <span className="inline-block">🎨</span> Desain Kreatif
                </div>
                <div className="group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <span className="inline-block">📚</span> Pembelajar Aktif
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EKSTRAKURIKULER & ORGANISASI SECTION */}
      <section id="ekstrakurikuler" className="relative py-20 w-full overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="w-full max-w-[1200px] px-6 mx-auto text-center relative z-10">
          {/* Judul */}
          <h2 
            ref={ekskulTitleRef}
            className={`text-3xl md:text-4xl font-bold text-cyan-400 mb-4 transition-all duration-1000 delay-1000 relative inline-block ${
              ekskulTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            Ekstrakurikuler & Organisasi
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </h2>
          <p 
            ref={ekskulSubRef}
            className={`text-white/70 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
              ekskulSubVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Beberapa kegiatan sekolah dan organisasi yang saya ikuti untuk mengembangkan kemampuan, tanggung jawab, dan kerja sama.
          </p>

          {/* GRID FOTO & DESKRIPSI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 - OSIS */}
            <div className="group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="assets/osis.jpg"
                alt="OSIS"
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-left relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏛️</span> OSIS
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Organisasi siswa yang mengajarkan kepemimpinan, tanggung jawab, dan
                  kemampuan berorganisasi di lingkungan sekolah.
                </p>
              </div>
            </div>

            {/* Card 2 - Pramuka */}
            <div className="group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="assets/pramuka.jpg"
                alt="Pramuka"
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-left relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚜️</span> Pramuka
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Melatih kemandirian, kedisiplinan, dan kerja sama melalui kegiatan
                  kepanduan serta pembentukan karakter.
                </p>
              </div>
            </div>

            {/* Card 3 - Rohis */}
            <div className="group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="assets/rohis.jpg"
                alt="Rohis"
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-left relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🕌</span> Rohis
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Kegiatan keagamaan Islam yang membentuk karakter religius, etika,
                  dan kebersamaan antar siswa.
                </p>
              </div>
            </div>

            {/* Card 4 - Badminton */}
            <div className="group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="assets/badminton.jpg"
                alt="Badminton"
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-left relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏸</span> Badminton
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Meningkatkan sportivitas dan semangat kompetitif melalui latihan
                  serta pertandingan bulu tangkis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA & PRESTASI SECTION */}
      <section id="berita" className="relative py-20 w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="w-full max-w-[1000px] px-6 mx-auto relative z-10">
          {/* Judul */}
          <div className="text-center mb-10">
            <h2 
              ref={beritaTitleRef}
              className={`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${
                beritaTitleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              Berita & Prestasi
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </h2>
          </div>

          {/* DAFTAR PRESTASI */}
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-cyan-400/5 rounded-2xl blur-2xl"></div>
            
            <div className="relative border border-white/10 rounded-2xl p-8 space-y-5 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm">
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-3xl">🥇</span>
                <div>
                  <p className="text-white/90 text-lg font-semibold">
                    Juara 1 Lomba Badminton Ganda Putra
                  </p>
                  <p className="text-white/50 text-sm">2019</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-3xl">🏸</span>
                <div>
                  <p className="text-white/90 text-lg font-semibold">
                    Juara Harapan 3 Lomba Badminton Tunggal Putra
                  </p>
                  <p className="text-white/50 text-sm">2021</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <span className="text-3xl">🎖️</span>
                <div>
                  <p className="text-white/90 text-lg font-semibold">
                    Juara Harapan 1 Lomba Yel-Yel Napak Tilas
                  </p>
                  <p className="text-white/50 text-sm">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="relative py-24 overflow-hidden w-full">
        {/* Background pattern lembut */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(51,255,252,0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="w-full max-w-[1200px] px-6 mx-auto relative z-10">
          {/* Judul */}
          <div className="text-center mb-14">
            <h2 
              ref={galleryTitleRef}
              className={`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${
                galleryTitleVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 -rotate-3'
              }`}
            >
              📸 Gallery 📸
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </h2>

            {/* Divider garis tipis bercahaya */}
            <div 
              ref={gallerySubRef}
              className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4 transition-all duration-1000 ${
                gallerySubVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionDelay: '1300ms' }}
            />
          </div>

          {/* GRID FOTO */}
          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {[
              "assets/Anak12E.jpg",
              "assets/Apis.png",
              "assets/apis2.png",
              "assets/Kelas12e.jpg",
              "assets/kelas12e1.jpg",
              "assets/temen1.jpg",
              "assets/TMB.jpg",
              "assets/Drama1.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300 break-inside-avoid hover:border-cyan-400/50"
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover rounded-2xl group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-20 w-full overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(51,255,252,0.3) 35px, rgba(51,255,252,0.3) 36px)',
        }}></div>

        <div className="w-full max-w-[900px] px-6 mx-auto text-center relative z-10">
          {/* Judul */}
          <h2 
            ref={contactTitleRef}
            className={`text-3xl md:text-4xl font-bold text-cyan-400 mb-6 transition-all duration-1000 delay-1000 relative inline-block ${
              contactTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hubungi Saya
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </h2>
          <p 
            ref={contactSubRef}
            className={`text-white/70 mb-10 transition-all duration-1000 ${
              contactSubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Jangan ragu untuk terhubung dengan saya melalui media sosial berikut! 💬
          </p>

          {/* Ikon Sosial Media dengan Card Modern */}
          <div className="flex justify-center gap-8 flex-wrap">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281290301826"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-green-500/50">
                <i className="fa-brands fa-whatsapp text-4xl text-green-500 group-hover:text-white transition-all group-hover:scale-110"></i>
                <p className="text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors">WhatsApp</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Thriqqq_27"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-pink-500/50">
                <i className="fa-brands fa-instagram text-4xl text-pink-500 group-hover:text-white transition-all group-hover:scale-110"></i>
                <p className="text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors">Instagram</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/Thirstyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-blue-500/50">
                <i className="fa-brands fa-facebook-f text-4xl text-blue-500 group-hover:text-white transition-all group-hover:scale-110"></i>
                <p className="text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors">Facebook</p>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/hfthr27"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-cyan-400/50">
                <i className="fa-brands fa-tiktok text-4xl text-white group-hover:text-cyan-400 transition-all group-hover:scale-110"></i>
                <p className="text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors">TikTok</p>
              </div>
            </a>
          </div>

          {/* Call to Action Card */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-cyan-400/10 rounded-2xl blur-2xl"></div>
            <div className="relative border border-cyan-400/20 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
              <p className="text-white/80 text-lg mb-4">
                Mari berkolaborasi dan berdiskusi! 🤝
              </p>
              <p className="text-white/60 text-sm">
                Saya terbuka untuk project baru, diskusi teknologi, atau sekadar bertukar pikiran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="w-full max-w-[1200px] px-6 mx-auto text-center">
          <p className="text-white/50 text-sm">
            © 2025 Thoriq Al-Kautsar. Made with <span className="text-cyan-400">❤️</span> and <span className="text-cyan-400">React</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;