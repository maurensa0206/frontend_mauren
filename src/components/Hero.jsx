import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="py-12 text-center border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="text-lg text-slate-200 font-medium">
          Halo, Saya Syalom Mauren Angginaloy
        </p>
        <p className="text-lg text-slate-300">
          Fakultas Ilmu Komputer | Jurusan Informatika
        </p>
        <p className="text-lg font-semibold text-indigo-400">
          Universitas Klabat
        </p>
      </div>
    </section>
  );
}