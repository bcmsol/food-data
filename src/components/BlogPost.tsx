import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Share2, BookmarkPlus } from 'lucide-react';
import { POSTS } from './BlogGrid';
import { useEffect, useState } from 'react';
import ShareModal from './ShareModal';

export default function BlogPost() {
  const { id } = useParams();
  const postId = parseInt(id || '1', 10);
  
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  const currentIndex = POSTS.findIndex(p => p.id === postId);
  
  // If not found, fallback to the first
  const post = POSTS[currentIndex] || POSTS[0];
  
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const postUrl = window.location.href;

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        postUrl={postUrl} 
        postTitle={post.title} 
      />

      <Link to="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-primary transition-colors mb-8 group">
        <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
        Back to Analytics
      </Link>
      
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3 text-sm text-slate-500 font-semibold uppercase tracking-wider">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{post.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-brand-primary">{post.category}</span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary transition-colors">
              <BookmarkPlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-80 md:h-[30rem] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-600 mb-8">
            {post.excerpt}
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Data Highlights</h2>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>

      </motion.article>

      <hr className="my-16 border-slate-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prevPost ? (
          <Link 
            to={`/post/${prevPost.id}`}
            className="group flex flex-col p-6 border border-slate-200 rounded-2xl hover:border-brand-primary hover:shadow-md transition-all text-left"
          >
            <span className="text-sm text-slate-500 font-semibold mb-2 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" /> 
              Previous Analysis
            </span>
            <span className="text-lg font-bold text-slate-900 group-hover:text-brand-primary line-clamp-2">
              {prevPost.title}
            </span>
          </Link>
        ) : <div />}
        
        {nextPost ? (
          <Link 
            to={`/post/${nextPost.id}`}
            className="group flex flex-col p-6 border border-slate-200 rounded-2xl hover:border-brand-primary hover:shadow-md transition-all text-right"
          >
            <span className="text-sm text-slate-500 font-semibold mb-2 flex items-center justify-end">
              Next Analysis
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" /> 
            </span>
            <span className="text-lg font-bold text-slate-900 group-hover:text-brand-primary line-clamp-2">
              {nextPost.title}
            </span>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
