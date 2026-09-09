function Greeting({ nama, role }) {
  return (
    <div className="text-center">

      <p className="text-3xl md:text-4xl font-extrabold text-white">
        Selamat Datang
      </p>

      <p className="text-xl md:text-2xl font-semibold text-indigo-400 mt-2">
        {nama}
      </p>

      <p className="text-slate-400 mt-2">
        {role}
      </p>

    </div>
  );
}

export default Greeting;