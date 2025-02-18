
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-xl font-semibold">EcoWay</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('classifica')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Classifica</button>
          <button onClick={() => scrollToSection('mappa')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Mappa</button>
          <button onClick={() => scrollToSection('ricompense')} className="text-neutral-600 hover:text-primary transition-colors font-medium">Ricompense</button>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
            Accedi
          </button>
          <button className="button-secondary" onClick={() => scrollToSection('piani')}>
            Piani
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('classifica')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Classifica</button>
            <button onClick={() => scrollToSection('mappa')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Mappa</button>
            <button onClick={() => scrollToSection('ricompense')} className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">Ricompense</button>
            <hr className="border-neutral-200" />
            <button className="text-primary hover:text-primary/80 transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">
              Accedi
            </button>
            <button className="button-secondary w-full" onClick={() => scrollToSection('piani')}>
              Piani
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;

