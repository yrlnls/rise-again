import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and stories.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Rise Again</span>
                <span className="text-xs text-muted-foreground">Initiative</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering youth and building stronger communities through education, mentorship, and skills development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Programs</Link></li>
              {/* <li><Link to="/stories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Stories</Link></li> */}
              <li><Link to="/get-involved" className="text-sm text-muted-foreground hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/get-involved#donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="/get-involved#volunteer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link to="/get-involved#partner" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link to="/get-involved#fundraise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Fundraise</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and stories.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Rise Again Initiative. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:info@riseagain.org" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
