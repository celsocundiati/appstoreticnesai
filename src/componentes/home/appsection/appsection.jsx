import AppCard from "../appcard/appcard";

export default function AppSection({ title, apps }) {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="text-blue-600 font-semibold">
          Ver Todos
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
