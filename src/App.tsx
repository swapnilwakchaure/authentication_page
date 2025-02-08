import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App(){
  const [isLogin, setIsLogin] = useState(false);

  const flipVariants = {
    hidden: { rotateY: -180, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 180, opacity: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="relative w-96 h-96">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              variants={flipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-white p-8 rounded-2xl shadow-2xl hover:bg-indigo-100"
            >
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-indigo-300 animate-pulse" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-indigo-300 animate-pulse" />
              <button className="w-full p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">Login</button>
              <p className="mt-4 text-center text-sm">
                Don't have an account?{' '}
                <span 
                  className="text-indigo-500 cursor-pointer hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              variants={flipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-white p-8 rounded-2xl shadow-2xl hover:bg-purple-100"
            >
              <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
              <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-purple-300 animate-pulse" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-purple-300 animate-pulse" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-purple-300 animate-pulse" />
              <button className="w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">Register</button>
              <p className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <span 
                  className="text-purple-500 cursor-pointer hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};