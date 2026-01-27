import CategoryCard from "./categoriacard";

export default function Categories({ categories }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Categorias</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
