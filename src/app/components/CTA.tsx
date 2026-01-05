import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          Ready to Start Your Dropshipping Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of entrepreneurs who are building successful dropshipping businesses with DSANDY.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
          Get Started Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
