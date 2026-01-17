import { memo } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = memo(() => {
  const phoneNumber = '18126905122';
  const message = encodeURIComponent('Hello! I need help with my dissertation.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-6 left-6 z-50 hidden lg:flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:scale-110 transition-transform touch-manipulation"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
});

FloatingWhatsApp.displayName = 'FloatingWhatsApp';

export default FloatingWhatsApp;
