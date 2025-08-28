"use client"
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/product";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from 'react'

const FeaturedProductsSection = () =>
{
    const featuredProducts = products.slice(0, 6);
    const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 poppins">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked fresh items just for you
            </p>
          </div>
          <button
            onClick={() => router.push("/shop")}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <span>View All</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsSection
