import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, X } from "lucide-react";

export default function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[200] max-w-sm w-auto bg-[#274236] text-[#FFFDF7] border-2 border-[#C9A24A] rounded-2xl p-4 shadow-2xl flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-[#C9A24A] text-[#1A2F26] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-serif font-medium leading-snug">{message}</p>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-2 text-[#DFBF6D] hover:text-[#FFFDF7] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
