'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [response, setResponse] = useState(null);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const moveNoButton = () => {
    // Random position within viewport
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    setNoButtonStyle({
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  return (
    <main className="min-h-screen bg-black text-red-500 flex flex-col items-center justify-center font-sans overflow-hidden relative p-4">
      {/* Background Ash Effect */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>

      <AnimatePresence>
        {!response ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-widest text-red-600" style={{ fontFamily: 'serif' }}>
              Will you be my Valentine?
            </h1>
            <div className="flex gap-8 justify-center items-center relative h-32">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-700 text-black px-10 py-4 rounded-full text-2xl font-bold uppercase tracking-wider shadow-lg shadow-red-900/50"
                onClick={() => setResponse('yes')}
              >
                Yes
              </motion.button>
              <motion.button
                animate={noButtonStyle}
                whileHover={{ scale: 0.95 }}
                className="bg-gray-900 text-red-300 px-10 py-4 rounded-full text-2xl font-bold uppercase tracking-wider border-2 border-red-900"
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Friends don't lie,
            </h2>
            <p className="text-4xl text-red-500">you're the best.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
