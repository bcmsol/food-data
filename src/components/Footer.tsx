import { Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-6 group">
              <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-brand-primary transition-colors duration-300">Your Food In Data</span>
              <span className="font-mono text-xs font-semibold text-brand-primary uppercase tracking-widest mt-1.5 opacity-80">Nutrition Analytics</span>
            </a>
            <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed">
              Decoding the modern diet through millions of data points. We turn nutritional ambiguity into mathematical certainty.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Discover', 'Browse Database', 'API Access', 'Methodology'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-base relative group inline-block">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full ease-[cubic-bezier(0.34,1.56,0.64,1)]"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">Categories</h4>
            <ul className="space-y-4">
              {['Macros & Calories', 'Health Trends', 'Sustainability', 'Vitamins & Minerals'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-base relative group inline-block">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full ease-[cubic-bezier(0.34,1.56,0.64,1)]"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-slate-600 text-sm font-medium mb-5 leading-relaxed">Get the latest dietary data analysis delivered to your inbox.</p>
            <form className="flex group focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 focus-within:ring-offset-slate-50 rounded-lg">
              <input 
                type="email" 
                placeholder="Data nerd here..." 
                className="bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-l-lg focus:outline-none flex-grow text-sm font-medium transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-primary hover:bg-brand-primary-light text-white px-5 py-3 rounded-r-lg transition-colors border border-l-0 border-brand-primary flex items-center justify-center group-hover:shadow-md"
              >
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear > 2026 ? currentYear : 2026} Your Food In Data. All Right Reserved.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
