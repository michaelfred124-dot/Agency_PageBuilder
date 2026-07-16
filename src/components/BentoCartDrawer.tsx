import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { useBentoContext } from '../lib/bentoStore';

export const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    addToCart, 
    removeFromCart, 
    clearCart 
  } = useBentoContext();

  const [checkoutState, setCheckoutState] = useState<'cart' | 'shipping' | 'processing' | 'success'>('cart');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const itemTotal = cartItems.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + priceNum * item.quantity;
  }, 0);

  const shipping = itemTotal > 150 ? 0 : 15;
  const tax = itemTotal * 0.08;
  const grandTotal = itemTotal + shipping + tax;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutState('processing');
    setTimeout(() => {
      setCheckoutState('success');
    }, 1800);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    // Reset checkout state back to cart on close if it was successful
    if (checkoutState === 'success') {
      clearCart();
      setCheckoutState('cart');
      setName('');
      setEmail('');
      setAddress('');
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-white dark:bg-zinc-950 shadow-2xl border-l border-slate-100 dark:border-zinc-900 flex flex-col z-10 text-slate-900 dark:text-zinc-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-100/50 dark:border-indigo-900/40">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-950 dark:text-white text-base tracking-tight font-display">Shopping Cart</h3>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                    {cartItems.length} Unique Items
                  </p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
              {cartItems.length === 0 && checkoutState !== 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-zinc-900/40 rounded-2xl flex items-center justify-center mb-4 text-slate-300">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-black text-base text-slate-900 dark:text-white mb-1.5 font-display">Your cart is empty</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                    Browse our premium products list and click "Add to Cart" to start building your luxury cart order.
                  </p>
                </div>
              ) : checkoutState === 'cart' ? (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                    const itemTotalCost = priceNum * item.quantity;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-4 p-4 bg-slate-50 dark:bg-zinc-900/30 rounded-2xl border border-slate-100/50 dark:border-zinc-900/40 hover:border-slate-200 transition-all group"
                      >
                        <div className="w-16 h-16 bg-slate-100 dark:bg-zinc-900 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-slate-200/50">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h5 className="text-xs font-black text-slate-900 dark:text-white truncate tracking-tight">{item.title}</h5>
                            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 font-mono">{item.price} each</span>
                          </div>
                          
                          {/* Quantity selector */}
                          <div className="flex items-center gap-2.5 mt-2">
                            <div className="flex items-center border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg overflow-hidden">
                              <button 
                                onClick={() => removeFromCart(item.id, false)}
                                className="p-1 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-500 transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 text-[11px] font-extrabold font-mono text-slate-900 dark:text-white">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => addToCart(item)}
                                className="p-1 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-500 transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button 
                              onClick={() => removeFromCart(item.id, true)}
                              className="p-1.5 text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right flex flex-col justify-between shrink-0">
                          <span className="text-xs font-extrabold font-mono text-slate-900 dark:text-white">
                            ${itemTotalCost.toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : checkoutState === 'shipping' ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="bg-indigo-50/40 dark:bg-indigo-950/15 p-4 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30 mb-2">
                    <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-extrabold tracking-wide uppercase font-mono mb-1">
                      Billing Information
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
                      Complete your custom order checkout simulated payment process. No real money required.
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane.doe@example.com"
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1.5">
                      Shipping Address
                    </label>
                    <textarea 
                      required 
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Luxury Avenue, Beverly Hills, CA 90210"
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setCheckoutState('cart')}
                      className="flex-1 py-3 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer active:scale-95"
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              ) : checkoutState === 'processing' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
                  <h4 className="font-black text-base text-slate-900 dark:text-white mb-1.5 font-display">Processing Order</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                    Authenticating safe simulated ledger token. Please wait while your high-contrast e-commerce build secures verification...
                  </p>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-between py-2">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto border border-emerald-100/50 dark:border-emerald-900/40 shadow-sm">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h4 className="font-black text-xl text-slate-950 dark:text-white mb-2 font-display">Order Successful!</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs leading-relaxed mx-auto">
                      Thank you for your purchase, <span className="font-extrabold text-slate-900 dark:text-white">{name || 'valued customer'}</span>! Your high-fidelity sneaker order receipt has been recorded safely in local developer console logs.
                    </p>
                  </div>

                  {/* Receipt block */}
                  <div className="bg-slate-50 dark:bg-zinc-900/40 rounded-2xl p-5 border border-slate-100 dark:border-zinc-900 font-mono text-[11px] leading-relaxed text-slate-600 dark:text-zinc-400">
                    <div className="border-b border-dashed border-slate-200 dark:border-zinc-800 pb-2 mb-2 flex justify-between font-bold text-slate-900 dark:text-white">
                      <span>BILLING RECEIPT</span>
                      <span>#BB-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="space-y-1 pb-2 border-b border-dashed border-slate-200 dark:border-zinc-800">
                      <div className="flex justify-between">
                        <span>CLIENT:</span>
                        <span className="font-bold text-slate-800 dark:text-zinc-200 uppercase">{name || 'Walk-In'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EMAIL:</span>
                        <span className="font-bold text-slate-800 dark:text-zinc-200">{email || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DELIVERY:</span>
                        <span className="font-bold text-slate-800 dark:text-zinc-200 max-w-[180px] text-right truncate">{address || 'Local Delivery'}</span>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 pb-2">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span className="truncate max-w-[200px]">{item.title} (x{item.quantity})</span>
                          <span>{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-dashed border-slate-200 dark:border-zinc-800 pt-2 font-bold text-slate-900 dark:text-white text-xs flex justify-between">
                      <span>GRAND TOTAL Paid:</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-4 bg-slate-950 dark:bg-white dark:text-slate-950 hover:bg-slate-900 hover:dark:bg-slate-100 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition-all cursor-pointer active:scale-95"
                  >
                    Finish & Clean Cart
                  </button>
                </div>
              )}
            </div>

            {/* Footer totals for Cart mode */}
            {cartItems.length > 0 && checkoutState === 'cart' && (
              <div className="p-6 border-t border-slate-100 dark:border-zinc-900 bg-slate-50/50 dark:bg-zinc-950/50">
                <div className="space-y-2 mb-4 text-xs font-semibold text-slate-500 dark:text-zinc-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-slate-900 dark:text-white font-extrabold">${itemTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-mono text-slate-900 dark:text-white font-extrabold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-mono text-slate-900 dark:text-white font-extrabold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-slate-200/50 dark:bg-zinc-900 my-1" />
                  <div className="flex justify-between text-slate-950 dark:text-white font-black font-display text-sm">
                    <span>Estimated Total</span>
                    <span className="font-mono">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutState('shipping')}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer active:scale-95 flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
