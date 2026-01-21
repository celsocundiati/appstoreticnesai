
import { NavLink } from "react-router-dom";

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
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium transition
                ${isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
