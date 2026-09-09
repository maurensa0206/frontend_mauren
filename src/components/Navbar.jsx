import { useState } from "react";

function Navbar() {
  const [title, setTitle] = useState("Kelas Front-End B");

  return (
    <nav className="bg-slate-950 border-b border-slate-800 px-8 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
            FE
          </div>

          <h1 className="text-xl font-bold text-white">
            {title}
          </h1>

        </div>

        {/* Menu */}
        <div className="flex items-center gap-8">

          <a
            onClick={() => {
              if (title === "Kelas Front-End B") {
                setTitle("Kelas Front-End C");
              } else {
                setTitle("Kelas Front-End B");
              }
            }}
            href="#hero"
            className="text-slate-300 hover:text-white cursor-pointer transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-slate-300 hover:text-white cursor-pointer transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-white cursor-pointer transition"
          >
            About
          </a>

          <button
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
          >
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;