import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const CATEGORIES = [
  'All',
  'Macros',
  'Calories',
  'Trends',
  'Health',
  'Sustainability',
  'Vitamins'
];

export default function CategoryNav() {
  const [activeTab, setActiveTab] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Implement optional drag to scroll for desktop simplicity
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (scrollRef.current) {
      scrollRef.current.classList.add('cursor-grabbing');
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDown(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove('cursor-grabbing');
    }
  };

  const onMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove('cursor-grabbing');
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full border-y border-slate-200 bg-white/95 backdrop-blur-md sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={scrollRef}
          className="flex space-x-3 py-5 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex-shrink-0 border ${
                activeTab === category 
                  ? 'text-white bg-brand-primary border-brand-primary shadow-md -translate-y-0.5' 
                  : 'text-slate-600 bg-slate-50 border-slate-200 hover:text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/30 hover:-translate-y-0.5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
