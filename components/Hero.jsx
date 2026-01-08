export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-500 to-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Music for everyone.
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Millions of songs. No credit card needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition">
            Get Spotify Free
          </button>

          <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
            View Premium
          </button>
        </div>
      </div>
    </section>
  );
}
