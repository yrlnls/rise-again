import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Heart, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import ProgramCard from "@/components/ProgramCard";
import StoryCard from "@/components/StoryCard";
import heroImage from "@/assets/hero-image.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";
import skillsImage from "@/assets/skills-training.jpg";
import communityImage from "@/assets/community.jpg";

const Home = () => {
  const programs = [
    {
      title: "Mentorship Program",
      description: "Connect youth with experienced mentors who guide them through personal and professional development.",
      icon: Users,
      image: mentorshipImage,
    },
    {
      title: "Skills Training",
      description: "Hands-on training in digital literacy, entrepreneurship, and vocational skills for career readiness.",
      icon: GraduationCap,
      image: skillsImage,
    },
    {
      title: "Community Development",
      description: "Collaborative projects that bring communities together to create lasting positive change.",
      icon: Heart,
      image: communityImage,
    },
  ];

  const stories = [
    {
      title: "From Dropout to Tech Entrepreneur: Sarah's Journey",
      excerpt: "How our mentorship program helped Sarah discover her passion for coding and launch her own startup at age 19.",
      date: "March 15, 2024",
      category: "Success Story",
      image: mentorshipImage,
    },
    {
      title: "Building Hope: Community Center Opening in Downtown",
      excerpt: "Our newest community center will serve over 500 youth with state-of-the-art facilities and programs.",
      date: "March 10, 2024",
      category: "News",
      image: communityImage,
    },
    {
      title: "Skills That Transform: The Power of Vocational Training",
      excerpt: "Graduates from our vocational program are finding meaningful employment and building better futures.",
      date: "March 5, 2024",
      category: "Impact",
      image: skillsImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Youth empowerment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering Youth,<br />Building Communities
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Together, we're creating opportunities for underprivileged youth through education, mentorship, and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-8" asChild>
              <Link to="/get-involved#donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8" asChild>
              <Link to="/get-involved#volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive programs designed to empower youth and create lasting positive change in communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read about the lives we're changing and the communities we're building together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <StoryCard {...story} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/stories">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your support can transform lives and build stronger communities. Join us in our mission to empower youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-card" asChild>
                <Link to="/get-involved#donate">Support Our Cause</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
