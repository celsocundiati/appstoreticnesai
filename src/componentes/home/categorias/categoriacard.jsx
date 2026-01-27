
export default function CategoryCard({ category }) {
  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-2xl text-white bg-linear-to-r 
        cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${category.gradient}`}
    >
      <span className="text-3xl">{category.icon}</span>
      <span className="text-lg font-semibold">{category.nome}</span>
    </div>
  );
}
