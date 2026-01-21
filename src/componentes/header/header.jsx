
export default function Header({navLinks}) {
  return (
    <header className="bg-white border-b border-black/10 z-50 fixed w-full px-6 py-1">
      <div className="max-w-7xl mx-auto py-4 flex items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
            T
          </div>
          <span>TicnesStore</span>
        </div>

        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar aplicativos..."
            className="w-full px-4 py-2 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
