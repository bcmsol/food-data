import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
      {/* Abstract Tech Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40rem] bg-gradient-to-b from-brand-primary/10 via-brand-accent/5 to-transparent rounded-full blur-[100px] opacity-70" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDB3NjBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center space-x-2 bg-white border border-brand-primary/20 shadow-sm rounded-full px-4 py-1.5 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="font-mono text-xs font-semibold text-brand-primary tracking-wider uppercase">Food System Visualization</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 leading-[1]"
        >
          Food <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-accent">In Data</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 font-medium leading-relaxed"
        >
          The Hidden Stories Behind Every Meal Revealed Through Numbers. 
          Analyze macros, track trends, and discover the true impact of what you eat.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-20"
        >
          <button className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-brand-primary shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-light hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group">
            Start Exploring 
            <motion.span className="ml-2" group-hover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-base font-semibold rounded-full text-slate-700 bg-white hover:border-brand-primary/30 hover:text-brand-primary hover:bg-brand-primary/5 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            View API Docs
          </button>
        </motion.div>
      </div>
    </div>
  );
}
