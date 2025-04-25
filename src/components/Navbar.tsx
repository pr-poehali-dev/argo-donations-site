
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-minecraft-primary rounded rotate-45 animate-spin-slow flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm -rotate-45"></div>
          </div>
          <span className="text-2xl font-bold text-minecraft-primary">ArgoLand</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-minecraft-primary transition-colors">Главная</Link>
          <Link to="#donate" className="font-medium hover:text-minecraft-primary transition-colors">Донат</Link>
          <Link to="#about" className="font-medium hover:text-minecraft-primary transition-colors">О сервере</Link>
          <Link to="#faq" className="font-medium hover:text-minecraft-primary transition-colors">FAQ</Link>
          <Button className="minecraft-btn">Играть</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-card/90 backdrop-blur-md border-b border-border">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-minecraft-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="#donate" 
              className="font-medium hover:text-minecraft-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Донат
            </Link>
            <Link 
              to="#about" 
              className="font-medium hover:text-minecraft-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О сервере
            </Link>
            <Link 
              to="#faq" 
              className="font-medium hover:text-minecraft-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button className="minecraft-btn mx-4">Играть</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
