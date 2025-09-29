import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Stories", path: "/stories" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-elegant">
              <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Rise Again</span>
              <span className="text-xs text-muted-foreground">Initiative</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground font-medium shadow-elegant"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/get-involved#volunteer">Volunteer</Link>
            </Button>
            <Button asChild className="bg-gradient-warm shadow-warm">
              <Link to="/get-involved#donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <Link to="/get-involved#volunteer" onClick={() => setIsOpen(false)}>
                    Volunteer
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-warm">
                  <Link to="/get-involved#donate" onClick={() => setIsOpen(false)}>
                    Donate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
