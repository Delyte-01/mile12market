"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  Truck,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/product";
import { useApp } from "@/hooks/use-context";
import { Header } from "@/components/Header";
import Footer from "@/components/footer";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const router = useRouter();
  const { state, dispatch } = useApp();
  console.log(productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  // product id comes from params → must match your product data structure
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h2>
          <button
            onClick={() => router.push("/shop")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const isInWishlist = state.wishlist.includes(product.id);
  const relatedProducts = product.relatedProducts
    ? products
        .filter((p) => product.relatedProducts!.includes(p.id))
        .slice(0, 3)
    : products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

  const handleAddToCart = () => {
    if (!product.inStock) {
      alert("Product is out of stock"); // you can use toast instead
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
     toast.warning("Removed from wishlist");
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product.id });
      toast.success("Added to wishlist!");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <button
              onClick={() => router.push("/")}
              className="hover:text-green-600"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => router.push("/shop")}
              className="hover:text-green-600"
            >
              Shop
            </button>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>

          {/* Back button */}
          <button
            onClick={() => router.push("/shop")}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Shop</span>
          </button>

          {/* Product grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span>In Stock ({product.stockCount} available)</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(product.stockCount, quantity + 1))
                      }
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleToggleWishlist}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isInWishlist
                      ? "border-red-500 text-red-500 bg-red-50"
                      : "border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isInWishlist ? "fill-current" : ""}`}
                  />
                  <span>
                    {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
                  </span>
                </button>
              </div>

              {/* Delivery Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Free delivery on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>100% quality guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: "description", name: "Description" },
                  { id: "nutrition", name: "Nutrition Facts" },
                  { id: "reviews", name: "Reviews" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      selectedTab === tab.id
                        ? "border-green-600 text-green-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {selectedTab === "description" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {selectedTab === "nutrition" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Nutrition Facts
                  </h3>
                  {product.nutritionFacts ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(product.nutritionFacts).map(
                        ([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">
                              {value}
                            </div>
                            <div className="text-sm text-gray-600">{key}</div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Nutrition information not available.
                    </p>
                  )}
                </div>
              )}

              {selectedTab === "reviews" && (
                <div className="text-center py-8 text-gray-500">
                  <p>Reviews feature coming soon!</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
