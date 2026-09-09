function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center">

      <p className="text-slate-300 font-semibold">
        Kelas Front-End
      </p>

      <p className="text-slate-500 text-sm mt-2">
        Universitas Klabat
      </p>

      <p className="text-slate-600 text-xs mt-4">
        © {new Date().getFullYear()} Front-End. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;