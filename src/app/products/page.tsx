'use client';

import { motion } from 'framer-motion';

const products = [
  {
    name: 'Product 1',
    description: 'Description of product 1',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/product1.jpg',
  },
  {
    name: 'Product 2',
    description: 'Description of product 2',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/product2.jpg',
  },
  {
    name: 'Product 3',
    description: 'Description of product 3',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/product3.jpg',
  },
];

export default function ProductsPage() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our innovative solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-700">
                {/* Add product image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-gray-400 flex items-center">
                      <svg
                        className="h-5 w-5 text-cyan-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
