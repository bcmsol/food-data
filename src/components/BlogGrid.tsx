import { motion } from 'motion/react';
import { ArrowUpRight, BarChart2, TrendingUp, Sparkles, Sprout, Download } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DonationModal from './DonationModal';

export const POSTS = [
  {
    id: 1,
    title: "The Macro Blueprint: Rebuilding Your Plate with Data",
    excerpt: "Forget intuitive eating—what happens when we run our daily intake through a 10,000-point algorithm? The results might surprise you.",
    category: "Macros",
    icon: BarChart2,
    date: "May 18, 2026",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Calorie Density Mapping: A Visual Guide",
    excerpt: "Why 200 calories of almonds looks vastly different from 200 calories of celery, and how your brain misinterprets the volume.",
    category: "Calories",
    icon: TrendingUp,
    date: "May 15, 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Carbon Footprint per Gram of Protein",
    excerpt: "Tracking the sustainability metrics of 50 different protein sources from farm to table. Which one is truly the greenest?",
    category: "Sustainability",
    icon: Sprout,
    date: "May 12, 2026",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2028&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Great Vitamin D Deficiency",
    excerpt: "Our global analysis of indoor lifestyles vs dietary intake shows a stark drop in Vitamin D absorption.",
    category: "Vitamins",
    icon: Sparkles,
    date: "May 10, 2026",
    readingTime: "3 min read",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "2026 Food Trends: Precision Fermentation",
    excerpt: "How data-driven microbial agriculture is replacing traditional farming for high-value nutrients.",
    category: "Trends",
    icon: TrendingUp,
    date: "May 5, 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Glucose Spikes & Sleep Quality",
    excerpt: "We correlated 100,000 CGM logs with sleep rings to find the optimal window for your last meal.",
    category: "Health",
    icon: BarChart2,
    date: "May 1, 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function BlogGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const executeDownload = () => {
    // URL to the file in the Cloudflare R2 bucket
    const fileUrl = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/sample-dataset.csv';
    
    // Create an invisible anchor to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'nutrition-dataset.csv');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onDownload={executeDownload}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {POSTS.map((post, idx) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className={`group relative flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/20 transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              post.featured ? 'md:col-span-2 lg:col-span-2 row-span-2' : ''
            }`}
          >
            <div className={`relative overflow-hidden bg-slate-100 ${post.featured ? 'h-72 md:h-96' : 'h-64'}`}>
              <div className="absolute top-5 left-5 z-10 flex items-center space-x-1.5 font-mono text-[11px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full text-brand-primary shadow-sm">
                {post.icon && <post.icon className="w-3.5 h-3.5" />}
                <span>{post.category}</span>
              </div>
              <img 
                src={post.image} 
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="p-7 md:p-9 flex flex-col flex-grow relative bg-white">
              <div className="flex items-center space-x-3 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-5">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{post.readingTime}</span>
              </div>
              
              <h3 className={`font-bold tracking-tight text-slate-900 mb-4 group-hover:text-brand-primary transition-colors duration-300 leading-snug ${
                post.featured ? 'text-3xl md:text-5xl' : 'text-2xl'
              }`}>
                {post.title}
              </h3>
              
              <p className="text-slate-600 font-medium leading-relaxed line-clamp-3 mb-8">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-4 items-center justify-between">
                <Link to={`/post/${post.id}`} className="inline-flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-primary-light transition-colors group/link pb-1 border-b-2 border-transparent hover:border-brand-primary">
                  Read Analysis 
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
                <button 
                  onClick={handleDownloadClick}
                  className="inline-flex items-center text-xs font-bold text-slate-600 bg-slate-100 hover:bg-brand-primary hover:text-white hover:shadow-md px-3.5 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group/btn"
                >
                  <Download className="mr-1.5 h-3.5 w-3.5 transform group-hover/btn:-translate-y-0.5 transition-transform" />
                  Download
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-slate-200 text-sm font-bold tracking-widest text-slate-700 hover:bg-slate-50 hover:border-brand-primary hover:text-brand-primary transition-all duration-300 uppercase rounded-full shadow-sm hover:shadow-md"
        >
          Load More Data
        </motion.button>
      </div>
    </section>
  );
}
