import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">FutureUI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-primary transition-colors duration-200">Home</a>
              <a href="#features" className="hover:text-primary transition-colors duration-200">Features</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:text-primary transition-colors duration-200 px-3 py-2">Home</a>
            <a href="#features" className="block hover:text-primary transition-colors duration-200 px-3 py-2">Features</a>
            <a href="#contact" className="block hover:text-primary transition-colors duration-200 px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;