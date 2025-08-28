import { Truck, Shield, Headphones, RefreshCw } from 'lucide-react';


const BenefitSection = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: "Free Delivery", desc: "On orders over $50" },
            {
              icon: Shield,
              title: "Quality Guarantee",
              desc: "100% fresh guarantee",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Dedicated customer service",
            },
            {
              icon: RefreshCw,
              title: "Easy Returns",
              desc: "Hassle-free returns",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitSection