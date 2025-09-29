import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import mentorshipImage from "@/assets/mentorship.jpg";
import skillsImage from "@/assets/skills-training.jpg";
import communityImage from "@/assets/community.jpg";

const Stories = () => {
  const [filter, setFilter] = useState("all");

  const allStories = [
    {
      title: "Counseling Access Increased by 40% After Clinic Partnership",
      excerpt: "Through an MoU with a primary care clinic, we integrated screening and referrals, reducing wait time from 6 weeks to 10 days.",
      date: "March 15, 2024",
      category: "Impact",
      image: mentorshipImage,
    },
    // {
    //   title: "NGO Grant Launches Mobile Screening Days",
    //   excerpt: "Monthly pop-up clinics delivered 320 PHQ-9/GAD-7 screenings; 68% received same-week follow-up and navigation.",
    //   date: "March 10, 2024",
    //   category: "Program Highlight",
    //   image: communityImage,
    // },
    {
      title: "School-Based Mindfulness Improves Outcomes",
      excerpt: "After a 6-week series, students showed a 24% reduction in perceived stress and improved attendance.",
      date: "March 5, 2024",
      category: "Impact",
      image: skillsImage,
    },
    {
      title: "Grief Support Groups Foster Connection",
      excerpt: "Participant surveys indicate 92% reported feeling less isolated and more hopeful after 8 sessions.",
      date: "February 28, 2024",
      category: "Program Highlight",
      image: communityImage,
    },
    {
      title: "Volunteer Spotlight: Peer Leaders Driving Change",
      excerpt: "Trained peer facilitators led 140 group hours, extending reach and sustainability across partner sites.",
      date: "February 10, 2024",
      category: "Volunteer Story",
      image: mentorshipImage,
    },
  ];

  const filteredStories = filter === "all" 
    ? allStories 
    : allStories.filter(story => story.category.toLowerCase().replace(" ", "-") === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Mental Health Stories
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
              Real experiences of healing, resilience, and community care.
            </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              Showing {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
            </p>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <span className="text-sm font-medium">Filter by:</span>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Stories" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="all">All Stories</SelectItem>
                  <SelectItem value="success-story">Success Stories</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="impact">Impact</SelectItem>
                  <SelectItem value="program-highlight">Program Highlights</SelectItem>
                  <SelectItem value="volunteer-story">Volunteer Stories</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <StoryCard {...story} />
              </div>
            ))}
          </div>
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No stories found in this category.</p>
              <Button variant="outline" className="mt-4" onClick={() => setFilter("all")}>
                View All Stories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest stories, updates, and impact reports directly in your inbox.
            </p>
            <Button size="lg" asChild>
              <a href="#newsletter">Subscribe Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
