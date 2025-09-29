import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Heart } from "lucide-react";
import mentorshipImage from "@/assets/mentorship.jpg";
import communityImage from "@/assets/community.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, creating a supportive environment for all.",
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We believe in unlocking potential and providing tools for self-sufficiency.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in all our programs and services.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We operate with integrity and accountability in everything we do.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            About Rise Again Foundation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Advancing mental health through compassionate care, education, and community support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <img
                src={mentorshipImage}
                alt="Our mission"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We exist to make mental healthcare accessible, stigma-free, and culturally responsive. Through clinical counseling, peer support, and education, we help individuals and families build lasting wellbeing.
              </p>
              <p className="text-lg text-muted-foreground">
                Since 2015, we have provided thousands of sessions, trained community responders, and created safe spaces for healing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A world where mental health is cared for with the same urgency and compassion as physical health, and everyone has access to the support they need.
              </p>
              <p className="text-lg text-muted-foreground">
                We work alongside communities to normalize help-seeking, expand services, and strengthen support networks.
              </p>
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <img
                src={communityImage}
                alt="Our vision"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to empowering communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals and volunteers working together to create meaningful change.
            </p>
          </div>
          <div className="bg-card rounded-lg shadow-card p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Our team includes licensed clinicians, peer support specialists, community health workers, and dedicated volunteers united by compassion and evidence-based care.
            </p>
            <p className="text-lg text-muted-foreground">
              With over 200 active volunteers and a dedicated core team, we provide counseling, groups, education, and outreach that meet people where they are.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
