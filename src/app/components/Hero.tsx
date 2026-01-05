import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Powered by AliExpress API</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6">
            Launch Your Dropshipping Store in Minutes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            DSANDY is a powerful SaaS platform that lets you create and manage your own 
            dropshipping store with seamless AliExpress integration. No technical knowledge required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
