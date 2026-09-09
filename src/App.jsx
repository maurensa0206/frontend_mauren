import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      <Navbar />

      <Hero />

      <Features />

      {/* About Class */}
      <section
        id="about"
        className="bg-slate-900 border-t border-slate-800 px-6 py-20"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            About Front-End 
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Front-End merupakan kelas yang berfokus pada
            pembelajaran dan pengembangan antarmuka website.
            Dalam kelas ini, mahasiswa mempelajari berbagai
            teknologi front-end seperti HTML, CSS, JavaScript,
            React, serta konsep desain website yang interaktif
            dan responsif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <h3 className="text-white font-bold">
                Learn
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Belajar teknologi web modern.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <h3 className="text-white font-bold">
                Create
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Membuat website yang kreatif.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <h3 className="text-white font-bold">
                Grow
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Berkembang bersama sebagai developer.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default App;