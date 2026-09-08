import React from 'react';

export default function Greeting({ nama, role }) {
  return (
    <h2 className="text-3xl font-extrabold my-4">
      <span className="inline-block bg-indigo-900/50 border border-indigo-700/60 rounded-full px-5 py-2 text-sm font-bold text-indigo-300">
        Selamat Datang di Portofolio {nama} ({role})
      </span>
    </h2>
  );
}