import { motion, AnimatePresence } from 'motion/react';
import { X, Twitter, Facebook, Instagram, MessageCircle, Link as LinkIcon, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  postUrl: string;
  postTitle: string;
}

export default function ShareModal({ isOpen, onClose, postUrl, postTitle }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Auto-hide alert message
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareToFacebook = async () => {
    try {
      await navigator.clipboard.writeText(`${postTitle}\n${postUrl}`);
      setAlertMessage('Link & Title copied! Ready to paste on Facebook.');
      setTimeout(() => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        window.open(facebookUrl, '_blank', 'noopener,noreferrer');
      }, 1500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareToInstagram = async () => {
    try {
      await navigator.clipboard.writeText(`${postTitle}\n${postUrl}`);
      setAlertMessage('Link & Title copied! Ready to paste into your IG Story or bio.');
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle + ' ' + postUrl)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-3xl shadow-2xl z-[111] overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Share this analysis</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <button 
                  onClick={shareToTwitter}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-[#1DA1F2] group-hover:text-white group-hover:border-[#1DA1F2] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Twitter</span>
                </button>

                <button 
                  onClick={shareToFacebook}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Facebook</span>
                </button>

                <button 
                  onClick={shareToInstagram}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-gradient-to-tr group-hover:from-[#F56040] group-hover:to-[#C13584] group-hover:text-white group-hover:border-transparent transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Instagram</span>
                </button>

                <button 
                  onClick={shareToWhatsApp}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">WhatsApp</span>
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis px-2 select-all">
                      {postUrl}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="flex-shrink-0 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <LinkIcon className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* In-modal Alert Notification */}
            <AnimatePresence>
              {alertMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-4 left-4 right-4 bg-brand-primary text-white text-sm font-medium p-3 rounded-xl flex items-start gap-3 shadow-lg"
                >
                  <div className="mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p>{alertMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
