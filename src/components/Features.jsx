import FeatureList from "./props/FeatureList";
import Greeting from "./props/Greetings";

const memberList = [
  {
    id: "M",
    name: "Mauren",
    role: "Front-End Student",
    description:
      "Mahasiswa Informatika yang tertarik dengan web development dan UI/UX.",
  },

  {
    id: "L",
    name: "Lalisa",
    role: "Front-End Enthusiast",
    description:
      "Memiliki ketertarikan dalam pengembangan website dan teknologi front-end.",
  },

  {
    id: "J",
    name: "Jennie",
    role: "React Developer",
    description:
      "Belajar mengembangkan aplikasi web menggunakan React.",
  },

  {
    id: "J",
    name: "Jisoo",
    role: "UI & Component Builder",
    description:
      "Tertarik dengan desain interface dan pembuatan component website.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">

        {/* Greeting */}
        <div className="mb-12">
          <Greeting
            nama="Front-End B"
            role="Universitas Klabat"
          />
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">

          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Community
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Class Members
          </h2>

          <p className="text-slate-400 mt-3">
            Kenali anggota kelas Front-End 
          </p>

        </div>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {memberList.map((item) => (
            <FeatureList
              key={item.name}
              id={item.id}
              name={item.name}
              role={item.role}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;