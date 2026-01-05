import { UserPlus, ShoppingCart, Truck, DollarSign } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account and choose a plan that fits your needs. Start with our 14-day free trial."
  },
  {
    icon: ShoppingCart,
    title: "Import Products",
    description: "Browse and import products from AliExpress with a single click. Customize pricing and descriptions."
  },
  {
    icon: Truck,
    title: "Receive Orders",
    description: "When customers place orders, they're automatically forwarded to your AliExpress suppliers."
  },
  {
    icon: DollarSign,
    title: "Earn Profit",
    description: "Collect payment from customers and pay suppliers. Keep the difference as your profit."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your dropshipping business up and running in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
