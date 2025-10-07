import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Brain, Headphones, HelpingHand } from "lucide-react";
import { Link } from "react-router-dom";
import mentorshipImage from "@/assets/mentorship.jpg";
import skillsImage from "@/assets/skills-training.jpg";
import communityImage from "@/assets/community.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Clinical Counseling (Primary Care Integration)",
      description: "Evidence-based therapy integrated with primary care to increase access and continuity. Focus on anxiety, depression, trauma, and grief.",
      icon: Brain,
      image: mentorshipImage,
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Trauma-informed care",
        "Family and couples counseling",
        "Crisis intervention & safety planning",
      ],
    },
    {
      title: "Peer Support & Group Therapy",
      description: "Weekly groups led by trained peer specialists and clinicians to reduce isolation and strengthen coping.",
      icon: Users,
      image: skillsImage,
      features: [
        "Teen resilience circles",
        "Caregiver support",
        "Grief and loss group",
        "Mindfulness practice group",
      ],
    },
    {
      title: "Community Education & MH First Aid",
      description: "Mental health literacy, coping skills, suicide prevention, and Mental Health First Aid to build community capacity.",
      icon: BookOpen,
      image: mentorshipImage,
      features: [
        "Mental Health First Aid (youth/adult)",
        "Stress management 101",
        "Mindfulness and breathwork",
        "School and workplace trainings",
      ],
    },
    // {
    //   title: "Mobile Outreach & Screening Clinics",
    //   description: "Pop-up wellness events, PHQ-9/GAD-7 screenings, and referrals in partnership with CBOs and clinics.",
    //   icon: Heart,
    //   image: communityImage,
    //   features: [
    //     "PHQ-9/GAD-7 screening & referral",
    //     "Resource navigation",
    //     "Stigma reduction campaigns",
    //     "Culturally responsive care",
    //   ],
    // },
    {
      title: "Non-Clinical Helpline & Care Navigation",
      description: "Compassionate listening, safety planning, and warm handoffs to local and telehealth services.",
      icon: Headphones,
      image: skillsImage,
      features: [
        "Non-urgent support line",
        "Crisis resource guidance",
        "Warm handoffs to providers",
        "Follow-up check-ins",
      ],
    },
    {
      title: "Case Management & Social Supports",
      description: "Coordinated care addressing social determinants that affect mental wellbeing and treatment adherence.",
      icon: HelpingHand,
      image: communityImage,
      features: [
        "Personalized care plans",
        "Benefits and housing support",
        "School/workplace accommodations",
        "Ongoing progress reviews",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Mental Health Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Fundable initiatives with clear outcomes, strong partnerships, and robust monitoring & evaluation.
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
                  <div className="relative rounded-lg shadow-elegant w-full h-[400px] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary opacity-30" />
                  </div>
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
