import { categories } from '@/data/product';
import Link from 'next/link';
import React from 'react'

const Categorysection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 poppins">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of fresh groceries organized by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              href={"/shop"}
              key={category.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
            >
              <button>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.productCount} items
                </p>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categorysection