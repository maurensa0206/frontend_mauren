function FeatureList({
  id,
  name,
  role,
  description,
}) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center shadow-xl hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300">

      {/* Avatar */}
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition">
        {id}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-2">
        {name}
      </h3>

      {/* Role */}
      <p className="text-sm text-indigo-400 font-semibold mb-4">
        {role}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default FeatureList;