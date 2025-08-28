import Link from 'next/link';
import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">
          Ready to Start Shopping?
        </h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us for their grocery
          needs
        </p>
        <Link href={'/shop'}>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Shopping Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction