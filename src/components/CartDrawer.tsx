import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import type { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export default function CartDrawer({ open, onClose, items, onUpdateQty, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalMrp = items.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const savings = totalMrp - total;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] animate-fade-in-up"
          style={{ animationDuration: '0.3s' }}
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] transition-transform duration-400 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-emerald-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-emerald-600" size={22} />
            <h3 className="text-lg font-bold text-[#1a2e35]">Your Cart</h3>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold">
              {items.length}
            </span>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-lg hover:bg-emerald-100 flex items-center justify-center transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="mx-auto text-gray-200" size={56} />
              <p className="text-gray-400 mt-4 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-300 mt-1">Add some medicines to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors animate-slide-in-right">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#1a2e35] truncate">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.brand}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-emerald-600">₹{item.price * item.quantity}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 flex items-center justify-center transition-colors ml-1"
                      >
                        <Trash2 size={14} className="text-rose-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 space-y-3 bg-gray-50">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Total MRP</span>
              <span className="line-through">₹{totalMrp}</span>
            </div>
            <div className="flex justify-between text-sm text-emerald-600 font-medium">
              <span>You Save</span>
              <span>₹{savings}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-[#1a2e35]">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="btn-shine w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
