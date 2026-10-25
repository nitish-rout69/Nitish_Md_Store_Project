import { useState } from 'react';
import { Star, Plus, Check, ShoppingCart, Tag } from 'lucide-react';
import { products, type Product } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

function ProductCard({ product, onAddToCart, index }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group bg-white rounded-2xl border-2 border-gray-50 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-400 overflow-hidden flex flex-col"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 80}ms both` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badges */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold shadow-lg">
            {product.badge}
          </span>
        )}
        {product.prescription && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-lg flex items-center gap-1">
            <Tag size={10} /> Rx
          </span>
        )}
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-emerald-600 font-medium">{product.brand}</span>
        <h3 className="text-sm font-semibold text-[#1a2e35] mt-1 leading-snug line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="fill-amber-400 text-amber-400" size={14} />
          <span className="text-xs font-medium text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">· {Math.floor(product.rating * 120)} reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-[#1a2e35]">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
          <span className="text-xs font-semibold text-emerald-600">{discount}% off</span>
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className={`mt-4 w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? 'bg-emerald-500 text-white scale-105'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-500 hover:text-white hover:scale-[1.02]'
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> Added to Cart
            </>
          ) : (
            <>
              <Plus size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export default function Products({ onAddToCart, searchQuery }: ProductsProps) {
  const { ref, active } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Vitamins & Supplements', 'Wellness & Fitness', 'Baby Care', 'Personal Care'];

  const filtered = products.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-10 reveal ${active ? 'active' : ''}`} ref={ref}>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Featured Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35] mt-2">Popular Health Essentials</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Quality medicines and wellness products at the best prices.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200 scale-105'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="mx-auto text-gray-300" size={48} />
            <p className="text-gray-400 mt-4">No products found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
}
