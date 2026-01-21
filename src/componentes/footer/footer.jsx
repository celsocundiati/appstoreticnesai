import { footerData } from "../../data/db.json";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-black">
            {footerData.brand.name}
          </h3>
          <p className="mt-3 text-sm text-slate-500">
            {footerData.brand.description}
          </p>
        </div>

        {/* Sections */}
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-black mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-slate-800 cursor-pointer transition text-slate-500"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-400">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
}
