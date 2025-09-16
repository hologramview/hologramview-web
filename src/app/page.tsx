'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HolographicGlobe from '@/components/3d/HolographicGlobe';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <HolographicGlobe />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Hologramview Technologies
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Innovative solutions for tomorrow's challenges
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/products"
                className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Our Products
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Innovative Technology
              </h3>
              <p className="text-gray-300">
                Cutting-edge solutions that push the boundaries of what's possible
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-300">
                Serving customers worldwide with reliable and scalable solutions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Expert Support
              </h3>
              <p className="text-gray-300">
                24/7 professional support to ensure your success
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
