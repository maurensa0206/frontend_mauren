import React from 'react';

export default function FeatureList({ id, title, category, period, description, tech }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* 1. Judul Proyek */}
        <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
          {title}
        </h3>

        {/* 2. Kategori & Mata Kuliah */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-sm">
          <span className="font-semibold bg-indigo-950/80 text-indigo-300 px-3 py-1 rounded-md border border-indigo-800/60">
            {category}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400 font-medium">
            {period}
          </span>
        </div>

        {/* 3. Deskripsi Proyek */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* 4. Bagian Teknologi / Skill */}
      <div className="pt-4 border-t border-slate-800/80">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Teknologi / Skill:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="text-xs bg-slate-800/90 text-indigo-200 border border-slate-700/50 px-3 py-1 rounded-md font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}