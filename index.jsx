
import products from '../data/products';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Virtual Spaza</h1>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.id} className="border p-2 rounded shadow">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">R{item.price}</p>
                <button className="mt-2 px-2 py-1 bg-black text-white text-sm rounded">View</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
