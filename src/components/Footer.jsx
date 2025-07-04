import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Copyright */}
          <div className="space-y-4">
            <div className="font-bold text-2xl gradient-text">
              Daniel Tusingwire
            </div>
            <p className="text-muted-foreground text-sm">
              Product Designer crafting meaningful digital experiences
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Work', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right - Back to Top */}
          <div className="flex justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Daniel Tusingwire. Made with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and lots of coffee.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;