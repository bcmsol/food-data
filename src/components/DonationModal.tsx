import { motion, AnimatePresence } from 'motion/react';
import { X, Coffee, Download, Heart } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const PRESET_AMOUNTS = [1000, 2000, 5000];

export default function DonationModal({ isOpen, onClose, onDownload }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleSupport = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would integrate with a payment gateway like Paystack or Flutterwave.
    alert('Payment integration would happen here!');
  };

  const handleSkip = () => {
    onDownload();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="relative p-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-4">
                  <Coffee className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Buy me a coffee</h2>
                <p className="text-slate-600 text-sm">
                  Support the continuous collection and analysis of nutritional data. Your contribution keeps this project alive!
                </p>
              </div>

              <form onSubmit={handleSupport} className="space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  {PRESET_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${
                        selectedAmount === amount
                          ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-brand-primary/30'
                      }`}
                    >
                      ₦{amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Enter your amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₦</span>
                    <input
                      type="number"
                      min="100"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Custom amount"
                      className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-3.5 px-4 bg-brand-primary hover:bg-brand-primary-light text-white font-bold rounded-xl transition-colors shadow-lg shadow-brand-primary/25"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Support & Download
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="w-full flex items-center justify-center py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Skip & Download
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
