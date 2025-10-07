import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Users, Handshake, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    message: "",
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you soon about volunteer opportunities.",
    });
    setVolunteerData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      availability: "",
      message: "",
    });
  };

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial support helps us expand our programs and reach more youth in need.",
      action: "Make a Donation",
      anchor: "donate",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your time, skills, and expertise to directly impact young lives in our community.",
      action: "Become a Volunteer",
      anchor: "volunteer",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Organizations and businesses can partner with us to create larger-scale impact.",
      action: "Explore Partnerships",
      anchor: "partner",
    },
    {
      icon: TrendingUp,
      title: "Fundraise",
      description: "Start your own fundraising campaign and rally your community to support our cause.",
      action: "Start Fundraising",
      anchor: "fundraise",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Get Involved
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Join our mission to expand access to compassionate mental healthcare and community support.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((way, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <way.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href={`#${way.anchor}`}>{way.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-muted/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
              <p className="text-lg text-muted-foreground">
                Your generous support helps us provide essential programs and services to youth in need.
              </p>
            </div>
            <Card className="shadow-elegant">
              <CardContent className="pt-8">
                <div className="bg-gradient-warm rounded-lg p-8 text-center mb-8">
                  <p className="text-primary-foreground text-lg mb-4">
                    To process donations securely, we need to connect to a payment system.
                  </p>
                  <p className="text-primary-foreground/90 text-sm">
                    Please contact us directly or connect your Lovable project to Supabase to enable online donations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Ways to Donate:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">One-time donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Monthly recurring support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Corporate matching gifts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">In-kind donations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Become a Volunteer</h2>
              <p className="text-lg text-muted-foreground">
                Share your time and talents to make a direct impact on young lives in our community.
              </p>
            </div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
                <CardDescription>Fill out this form to express your interest in supporting our mental health programs.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={volunteerData.name}
                        onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={volunteerData.email}
                        onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={volunteerData.phone}
                      onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Select
                      value={volunteerData.interest}
                      onValueChange={(value) => setVolunteerData({ ...volunteerData, interest: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="peer-support">Peer Support Group Facilitation</SelectItem>
                        <SelectItem value="outreach">Community Outreach & Screenings</SelectItem>
                        <SelectItem value="education">Workshops & Education</SelectItem>
                        <SelectItem value="helpline">Helpline Support (non-clinical)</SelectItem>
                        <SelectItem value="administrative">Administrative</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      placeholder="e.g., Weekends, Evenings"
                      value={volunteerData.availability}
                      onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about yourself</Label>
                    <Textarea
                      id="message"
                      placeholder="Share any relevant experience (lived, peer, clinical) and why you want to volunteer..."
                      value={volunteerData.message}
                      onChange={(e) => setVolunteerData({ ...volunteerData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to undergo a background check if required for volunteer positions.
                    </label>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20 bg-muted/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Organizations and businesses can partner with Rise Again Initiative to create meaningful community impact.
            </p>
            <Card className="text-left shadow-elegant">
              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Partnership Opportunities:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Corporate sponsorship of programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Employee volunteer programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">In-kind donations and resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Skills-based volunteering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Internship and job opportunities for youth</span>
                    </li>
                  </ul>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a href="/contact">Contact Us About Partnerships</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section id="fundraise" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Start Fundraising</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rally your community, friends, and family to support Rise Again Initiative through personal fundraising.
            </p>
            <Card className="text-left shadow-elegant">
              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Fundraising Ideas:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Birthday fundraiser on social media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Community events (bake sales, car washes, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Sports challenges or marathons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Online crowdfunding campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">School or workplace giving campaigns</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll provide you with resources, promotional materials, and support to make your fundraiser successful.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="/contact">Get Fundraising Resources</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
