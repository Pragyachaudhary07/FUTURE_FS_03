export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-500">Spotify</h1>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="hover:text-green-500 cursor-pointer">Premium</li>
        <li className="hover:text-green-500 cursor-pointer">Support</li>
        <li className="hover:text-green-500 cursor-pointer">Download</li>
      </ul>

      {/* Auth */}
      <div className="flex gap-4 text-sm">
        <button className="hover:text-green-500">Sign up</button>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
          Log in
        </button>
      </div>
    </nav>
  );
}
