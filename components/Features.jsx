export default function Features() {
  const features = [
    {
      title: "Play Your Favorites",
      desc: "Listen to the songs you love and discover new music tailored to you.",
    },
    {
      title: "Offline Listening",
      desc: "Download music and enjoy it anywhere, even without internet.",
    },
    {
      title: "High Quality Audio",
      desc: "Experience crystal clear sound with premium audio quality.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Spotify?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
