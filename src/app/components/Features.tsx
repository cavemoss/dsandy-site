import { Store, Zap, TrendingUp, Package, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Store,
    title: "Instant Store Setup",
    description: "Create your fully-functional dropshipping store in minutes with our intuitive platform."
  },
  {
    icon: Zap,
    title: "AliExpress Integration",
    description: "Seamlessly import products from AliExpress with real-time pricing and inventory sync."
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track your sales, conversions, and customer behavior with comprehensive analytics."
  },
  {
    icon: Package,
    title: "Automated Order Processing",
    description: "Orders are automatically forwarded to suppliers, saving you time and reducing errors."
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Sell globally with support for multiple currencies and automatic conversion."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Accept payments securely with Stripe integration and fraud protection."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to build and scale your dropshipping business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
