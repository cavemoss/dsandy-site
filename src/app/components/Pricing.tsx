import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for testing the waters",
    features: [
      "Up to 100 products",
      "1 store",
      "Basic analytics",
      "Email support",
      "AliExpress integration",
      "Stripe payment processing"
    ],
    popular: false,
    stripeId: "price_starter_monthly" // Placeholder for Stripe Price ID
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing businesses",
    features: [
      "Up to 1,000 products",
      "3 stores",
      "Advanced analytics",
      "Priority support",
      "AliExpress integration",
      "Stripe payment processing",
      "Custom domain",
      "Remove DSANDY branding"
    ],
    popular: true,
    stripeId: "price_professional_monthly" // Placeholder for Stripe Price ID
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For established businesses",
    features: [
      "Unlimited products",
      "Unlimited stores",
      "Premium analytics & reporting",
      "24/7 dedicated support",
      "AliExpress integration",
      "Stripe payment processing",
      "Custom domain",
      "White-label solution",
      "API access",
      "Custom integrations"
    ],
    popular: false,
    stripeId: "price_enterprise_monthly" // Placeholder for Stripe Price ID
  }
];

export function Pricing() {
  // TODO: Integrate Stripe Checkout
  // When ready to integrate Stripe:
  // 1. Install @stripe/stripe-js package
  // 2. Create price IDs in Stripe Dashboard
  // 3. Replace placeholder stripeId values above
  // 4. Implement handleCheckout function:
  //
  // const handleCheckout = async (priceId: string) => {
  //   const stripe = await loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [{ price: priceId, quantity: 1 }],
  //     mode: 'subscription',
  //     successUrl: `${window.location.origin}/success`,
  //     cancelUrl: `${window.location.origin}/pricing`,
  //   });
  //   if (error) console.error(error);
  // };
  
  const handleCheckout = (planName: string) => {
    // Placeholder - integrate with Stripe when ready
    alert(`Selected ${planName} plan. Stripe integration coming soon!`);
  };
  
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : 'border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleCheckout(plan.name)}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-12">
          All plans are billed monthly. Cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  );
}
