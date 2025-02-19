
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If we're on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to homepage then scroll
      navigate('/?section=' + sectionId);
    }
    setIsMenuOpen(false);
    setIsRewardsOpen(false);
  };
  
  const navLinkClass = "text-white font-medium px-3 py-1.5 rounded-full hover:bg-[#5a8f67] backdrop-blur-sm transition-all duration-200 shadow-sm hover:text-white hover:scale-110";
  const dropdownLinkClass = "text-white font-medium px-4 py-2 hover:bg-[#5a8f67] rounded-lg transition-all text-left hover:scale-105 w-full";
  
  return <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-xl font-semibold text-white">
              Eco<span>Way</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => handleNavigation('classifica')} className={navLinkClass}>Classifica</button>
          <button onClick={() => handleNavigation('mappa')} className={navLinkClass}>Mappa</button>
          <div className="relative">
            <button 
              onClick={() => setIsRewardsOpen(!isRewardsOpen)} 
              className={`${navLinkClass} flex items-center gap-1`}
            >
              Missioni
              <ChevronDown className="w-4 h-4" />
            </button>
            {isRewardsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-panel rounded-xl p-2 shadow-lg">
                <button 
                  onClick={() => handleNavigation('sfide')} 
                  className={dropdownLinkClass}
                >
                  Sfide Disponibili
                </button>
                <button 
                  onClick={() => handleNavigation('riscatta')} 
                  className={dropdownLinkClass}
                >
                  Riscatta le tue ricompense
                </button>
              </div>
            )}
          </div>
          <Link to="/chi-siamo" className={navLinkClass}>Chi siamo</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/accedi" className="px-4 py-2 text-white hover:text-white/90 transition-colors font-medium bg-black/20 rounded-full backdrop-blur-sm">
            Accedi
          </Link>
          <button className="button-secondary" onClick={() => handleNavigation('piani')}>
            Piani
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6 text-white" />
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
            <button onClick={() => handleNavigation('classifica')} className={dropdownLinkClass}>Classifica</button>
            <button onClick={() => handleNavigation('mappa')} className={dropdownLinkClass}>Mappa</button>
            <div className="border-t border-white/10 my-2"></div>
            <button onClick={() => handleNavigation('sfide')} className={dropdownLinkClass}>Sfide Disponibili</button>
            <button onClick={() => handleNavigation('riscatta')} className={dropdownLinkClass}>Riscatta le tue ricompense</button>
            <div className="border-t border-white/10 my-2"></div>
            <Link to="/chi-siamo" className={dropdownLinkClass}>Chi siamo</Link>
            <Link to="/accedi" className="text-white hover:text-white/90 transition-colors font-medium px-4 py-2 bg-black/20 rounded-lg text-left backdrop-blur-sm">
              Accedi
            </Link>
            <button className="button-secondary w-full" onClick={() => handleNavigation('piani')}>
              Piani
            </button>
          </div>
        </motion.div>
      )}
    </nav>;
};

export default Navigation;
