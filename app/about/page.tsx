
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import { Leaf, Users, Truck, Heart } from "lucide-react";

interface ValuesProps{
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export default function AboutPage() {
  const values: ValuesProps[] = [
    {
      icon: Leaf,
      title: "Fresh & Organic",
      description:
        "We source the freshest organic produce directly from local farms to ensure quality and sustainability.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Supporting local farmers and communities while bringing fresh groceries to your neighborhood.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service to get fresh groceries to your door in 2-3 days.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "Dedicated customer service team committed to making your shopping experience exceptional.",
    },
  ];

    return (
      <>
        <Header />
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About FreshMarket
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Your trusted partner for fresh, quality groceries delivered with
                care since 2020.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      FreshMarket was born from a simple idea: everyone deserves
                      access to fresh, quality groceries without the hassle of
                      traditional shopping. Founded in 2020 by a team of food
                      enthusiasts and technology experts, we set out to
                      revolutionize the way people shop for groceries.
                    </p>
                    <p>
                      What started as a small local delivery service has grown
                      into a comprehensive grocery platform serving thousands of
                      satisfied customers. We partner with local farms and
                      trusted suppliers to ensure that every product meets our
                      high standards for freshness and quality.
                    </p>
                    <p>
                      Today, we're proud to be your go-to source for fresh
                      produce, pantry staples, and specialty items, all
                      delivered with the care and attention your family
                      deserves.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Fresh vegetables"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  These core values guide everything we do and shape our
                  commitment to you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    To make fresh, quality groceries accessible to everyone by
                    connecting communities with local farmers and suppliers
                    through an innovative, convenient shopping experience that
                    prioritizes sustainability, freshness, and exceptional
                    service.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        500+
                      </div>
                      <div className="text-gray-600">Local Farmers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        10K+
                      </div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        50+
                      </div>
                      <div className="text-gray-600">Cities Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-600">
                  The passionate people behind FreshMarket
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Founder & CEO",
                    image:
                      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                  {
                    name: "Michael Chen",
                    role: "Head of Operations",
                    image:
                      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Chief Technology Officer",
                    image:
                      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience Fresh?
              </h2>
              <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust FreshMarket for
                their grocery needs.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Shopping Today
              </button>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
}
