import { useState } from "react";

function Navbar() {
  const [title, setTitle] = useState("MyWebsite");

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold text-indigo-600">
          {title}
        </h1>

        <div className="space-x-4">

          <a
            onClick={() => {
              if (title === "MyWebsite") {
                setTitle("Mauren Portofolio");
              } else {
                setTitle("MyWebsite");
              }
            }}
            href="#hero"
            className="text-gray-600 hover:text-indigo-600"
          >
            Home
          </a>

          <a
            onClick={() => setTitle("MyWebsite")}
            href="#features"
            className="text-gray-600 hover:text-indigo-600"
          >
            Features
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;