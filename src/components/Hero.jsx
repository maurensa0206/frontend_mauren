function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >

      {/* Background Decoration */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl px-8 py-16 text-center shadow-2xl">

          {/* Small Text */}
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-5">
            Universitas Klabat
          </p>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Build Something Awesome 
          </h2>

          <h2 className="text-5xl md:text-7xl font-extrabold text-indigo-400 tracking-tight leading-tight">
            Front-End 
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-slate-400 leading-relaxed">
            Tempat untuk belajar, berkembang, dan berkarya
            bersama dalam dunia Front-End Development.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <a
              href="#features"
              className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
            >
              Meet Our Members
            </a>

            <a
              href="#about"
              className="bg-slate-800 border border-slate-700 text-slate-200 px-7 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
            >
              About Our Class
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;