import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Heart, BookOpen, Briefcase, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import mentorshipImage from "@/assets/mentorship.jpg";
import skillsImage from "@/assets/skills-training.jpg";
import communityImage from "@/assets/community.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Mentorship Program",
      description: "One-on-one mentorship connecting youth with experienced professionals who provide guidance, support, and career advice.",
      icon: Users,
      image: mentorshipImage,
      features: [
        "Personalized mentoring relationships",
        "Career guidance and planning",
        "Life skills development",
        "Goal setting and accountability",
      ],
    },
    {
      title: "Skills Training Workshops",
      description: "Hands-on training in digital literacy, coding, entrepreneurship, and vocational skills preparing youth for the modern workforce.",
      icon: GraduationCap,
      image: skillsImage,
      features: [
        "Digital literacy and computer skills",
        "Coding and web development",
        "Entrepreneurship and business basics",
        "Vocational and trade skills",
      ],
    },
    {
      title: "Education Support",
      description: "Academic tutoring, scholarship assistance, and educational resources to help students succeed in school and beyond.",
      icon: BookOpen,
      image: mentorshipImage,
      features: [
        "After-school tutoring programs",
        "Scholarship application support",
        "Study materials and resources",
        "College preparation workshops",
      ],
    },
    {
      title: "Community Development",
      description: "Collaborative projects that bring communities together to address local needs and create sustainable positive change.",
      icon: Heart,
      image: communityImage,
      features: [
        "Community improvement projects",
        "Youth leadership development",
        "Neighborhood beautification initiatives",
        "Social cohesion programs",
      ],
    },
    {
      title: "Career Readiness",
      description: "Job search support, resume building, interview preparation, and professional networking opportunities.",
      icon: Briefcase,
      image: skillsImage,
      features: [
        "Resume and cover letter writing",
        "Interview skills training",
        "Job search strategies",
        "Professional networking events",
      ],
    },
    {
      title: "Innovation Hub",
      description: "A creative space for youth to explore technology, innovation, and entrepreneurship through projects and competitions.",
      icon: Lightbulb,
      image: communityImage,
      features: [
        "Project-based learning",
        "Innovation challenges",
        "Startup incubation support",
        "Access to technology and tools",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Programs
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Comprehensive programs designed to empower youth, build skills, and create lasting community impact.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
                  />
                </div>
                <Card className={`shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/get-involved">Get Involved</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-warm rounded-lg p-12 text-center shadow-warm">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or partner with us, there are many ways to support our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/get-involved">Get Involved</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
