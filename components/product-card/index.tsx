"use client"
import React from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { useApp } from "@/hooks/use-context";
import { toast } from "sonner";
import {  useRouter } from "next/navigation";


interface ProductCardProps {
  product: Product;

}

export function ProductCard({
  product,

}: ProductCardProps) {
  const { state, dispatch } = useApp();
  const isInWishlist = state.wishlist.includes(product.id);
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.inStock) {
      toast.error("Product is out of stock");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });
    toast.success("Added to cart!");
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
       toast.info("Removed from wishlist");
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product.id });
       toast.success("Added to wishlist!");
    }
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={() => router.push(`${product.id}`)}
        />

        {/* Discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            -{discountPercentage}%
          </div>
        )}

        {/* Stock status */}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-lg text-xs">
            Out of Stock
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full shadow-lg transition-colors ${
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:text-red-500"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`}
            />
          </button>
          <button
            onClick={() => router.push(`${product.id}`)}
            className="p-2 bg-white text-gray-600 hover:text-green-600 rounded-full shadow-lg transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="font-semibold text-gray-900 line-clamp-2 cursor-pointer hover:text-green-600 transition-colors poppins"
            onClick={() => router.push(`${product.id}`)}
          >
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
            product.inStock
              ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
        </button>
      </div>
    </div>
  );
}
