export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Music for everyone.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Millions of songs. No credit card needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-full transition">
            Get Spotify Free
          </button>

          <button className="border border-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full transition">
            View Premium
          </button>
        </div>
      </div>
    </section>
  );
}
