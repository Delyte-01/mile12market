"use client"
import React, { useState } from "react";
import { CreditCard, Truck, MapPin, Check } from "lucide-react";
import { useApp } from "@/hooks/use-context";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import Footer from "@/components/footer";



export default function CheckoutPage() {
    const { state, dispatch } = useApp();
    const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order
    const order = {
      id: `ORDER-${Date.now()}`,
      items: state.cart,
      total,
      status: "processing" as const,
      date: new Date().toISOString(),
      deliveryDate: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
      ).toISOString(),
      shippingAddress: {
        id: "1",
        type: "shipping" as const,
        name: `${formData.firstName} ${formData.lastName}`,
        street: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        isDefault: true,
      },
    };

    dispatch({ type: "ADD_ORDER", payload: order });
    dispatch({ type: "CLEAR_CART" });
    router.push(`/order-confirmation-${order.id}`);
  };

  if (state.cart.length === 0) {
    router.push("/cart");
    return null;
  }

  const steps = [
    { id: 1, name: "Shipping", icon: Truck },
    { id: 2, name: "Payment", icon: CreditCard },
    { id: 3, name: "Review", icon: Check },
  ];

    return (
        <>
            <Header />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        currentStep >= step.id
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-gray-300 bg-white text-gray-600"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`ml-2 font-medium ${
                        currentStep >= step.id
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {step.name}
                    </span>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-0.5 mx-4 ${
                          currentStep > step.id ? "bg-green-600" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Step 1: Shipping Information */}
                  {currentStep === 1 && (
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center mb-6">
                        <MapPin className="w-6 h-6 text-green-600 mr-3" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Shipping Information
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            State
                          </label>
                          <select
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          >
                            <option value="">Select State</option>
                            <option value="CA">California</option>
                            <option value="NY">New York</option>
                            <option value="TX">Texas</option>
                            <option value="FL">Florida</option>
                            {/* Add more states as needed */}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Payment Information */}
                  {currentStep === 2 && (
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center mb-6">
                        <CreditCard className="w-6 h-6 text-green-600 mr-3" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Payment Information
                        </h2>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method
                          </label>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === "card"}
                                onChange={handleInputChange}
                                className="text-green-600 focus:ring-green-500"
                              />
                              <span className="ml-3">Credit/Debit Card</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={formData.paymentMethod === "paypal"}
                                onChange={handleInputChange}
                                className="text-green-600 focus:ring-green-500"
                              />
                              <span className="ml-3">PayPal</span>
                            </label>
                          </div>
                        </div>

                        {formData.paymentMethod === "card" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Card Number
                              </label>
                              <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                required
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                name="expiryDate"
                                placeholder="MM/YY"
                                required
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                placeholder="123"
                                required
                                value={formData.cvv}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name on Card
                              </label>
                              <input
                                type="text"
                                name="nameOnCard"
                                required
                                value={formData.nameOnCard}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between mt-6">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Back to Shipping
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Review Order
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review Order */}
                  {currentStep === 3 && (
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center mb-6">
                        <Check className="w-6 h-6 text-green-600 mr-3" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Review Your Order
                        </h2>
                      </div>

                      <div className="space-y-6">
                        {/* Shipping Address */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Shipping Address
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p>
                              {formData.firstName} {formData.lastName}
                            </p>
                            <p>{formData.address}</p>
                            <p>
                              {formData.city}, {formData.state}{" "}
                              {formData.zipCode}
                            </p>
                            <p>{formData.phone}</p>
                          </div>
                        </div>

                        {/* Payment Method */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Payment Method
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            {formData.paymentMethod === "card" ? (
                              <p>
                                Credit Card ending in{" "}
                                {formData.cardNumber.slice(-4)}
                              </p>
                            ) : (
                              <p>PayPal</p>
                            )}
                          </div>
                        </div>

                        {/* Order Items */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Order Items
                          </h3>
                          <div className="space-y-3">
                            {state.cart.map((item) => (
                              <div
                                key={item.product.id}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                              >
                                <div className="flex items-center space-x-4">
                                  <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-12 h-12 object-cover rounded-lg"
                                  />
                                  <div>
                                    <h4 className="font-medium text-gray-900">
                                      {item.product.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      Qty: {item.quantity}
                                    </p>
                                  </div>
                                </div>
                                <span className="font-semibold text-gray-900">
                                  $
                                  {(item.product.price * item.quantity).toFixed(
                                    2
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-6">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Back to Payment
                        </button>
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary Sidebar */}
                <div>
                  <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Order Summary
                    </h2>

                    <div className="space-y-3 mb-6">
                      {state.cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex justify-between"
                        >
                          <span className="text-gray-600">
                            {item.product.name} x{item.quantity}
                          </span>
                          <span className="font-semibold">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-semibold">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
            </div>
            <Footer />
      </>
    );
}
