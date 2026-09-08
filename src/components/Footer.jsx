import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Universitas Klabat. All rights reserved.</p>
    </footer>
  );
}