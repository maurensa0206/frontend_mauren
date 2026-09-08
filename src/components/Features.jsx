import React from 'react';
import FeatureList from "./props/FeatureList";
import Greeting from "./props/Greetings";

const portfolioList = [
  {
    id: 1,
    title: "Perpustakaan Online",
    category: "Project Akhir",
    period: "Mata Kuliah Struktur Data & Algoritma",
    description: "Mengembangkan sistem perpustakaan online yang mendukung pencarian, peminjaman, dan pengelolaan data buku dengan menerapkan struktur data dan algoritma yang efisien.",
    tech: ["Data Structures", "Algorithms", "Web Development"]
  },
  {
    id: 2,
    title: "Web Design Kopi Stenga",
    category: "Project Akhir",
    period: "Mata Kuliah Web Design",
    description: "Merancang dan mengembangkan website interaktif untuk Kopi Stenga dengan menerapkan prinsip UI/UX, desain responsif, serta antarmuka yang modern dan informatif untuk meningkatkan pengalaman pengguna.",
    tech: ["UI/UX Design", "HTML/CSS", "Web Development"]
  },
  {
    id: 3,
    title: "Analisis RAG (AI) System",
    category: "Project Akhir",
    period: "Mata Kuliah Expert System",
    description: "Membuat sistem analisis berbasis Retrieval-Augmented Generation (RAG) untuk pemrosesan informasi cerdas pada mata kuliah sistem pakar.",
    tech: ["AI", "RAG Architecture", "Expert System"]
  },
  {
    id: 4,
    title: "Aplikasi Edukasi Guru & Siswa",
    category: "Kompetisi UI/UX",
    period: "Lomba UI/UX Design",
    description: "Merancang prototipe aplikasi interaktif yang mempermudah kolaborasi, penyampaian materi, dan komunikasi antara guru dan siswa.",
    tech: ["Figma", "UI/UX Research", "Prototyping"]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 relative overflow-hidden">
      {/* Efek Lingkaran Cahaya Aksen di Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto">
          
          <div className="my-8">
            <Greeting nama="Mauren" role="Informatika UNKLAB" />
          </div>

          <h2 className="text-3xl font-extrabold my-4 text-white tracking-wide">
            Pengalaman & Project
          </h2>

          <p className="text-sm my-4 text-slate-400">
            Daftar project akademik dan kompetisi yang pernah saya kerjakan.
          </p>

        </div>

        {/* Iterasi (.map) 4 Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {portfolioList.map((item) => (
            <FeatureList
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              period={item.period}
              description={item.description}
              tech={item.tech}
            />
          ))}
        </div>

      </div>
    </section>
  );
}