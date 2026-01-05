import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
          <span className="font-semibold text-xl">DSANDY LLC</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </a>
          <Button variant="default">Get Started</Button>
        </nav>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
