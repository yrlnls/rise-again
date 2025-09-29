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
      title: "From Dropout to Tech Entrepreneur: Sarah's Journey",
      excerpt: "At 16, Sarah was ready to give up on education. Today, she runs a successful tech startup and mentors other young entrepreneurs. Discover how our mentorship program changed her life trajectory.",
      date: "March 15, 2024",
      category: "Success Story",
      image: mentorshipImage,
    },
    {
      title: "Building Hope: New Community Center Opens",
      excerpt: "Our newest community center in Downtown will serve over 500 youth with state-of-the-art facilities including computer labs, study rooms, and recreational spaces.",
      date: "March 10, 2024",
      category: "News",
      image: communityImage,
    },
    {
      title: "Skills That Transform: The Power of Vocational Training",
      excerpt: "Meet the graduates of our vocational training program who are now employed in their dream careers. Their stories showcase the transformative power of skills development.",
      date: "March 5, 2024",
      category: "Impact",
      image: skillsImage,
    },
    {
      title: "Community Gardens Project: Growing More Than Food",
      excerpt: "Our community garden initiative is teaching youth about sustainability, nutrition, and teamwork while beautifying neighborhoods and providing fresh produce.",
      date: "February 28, 2024",
      category: "Program Highlight",
      image: communityImage,
    },
    {
      title: "Breaking Barriers: First Generation College Students",
      excerpt: "Follow the inspiring journeys of first-generation college students who overcame obstacles with our education support program. Their success opens doors for entire families.",
      date: "February 20, 2024",
      category: "Success Story",
      image: mentorshipImage,
    },
    {
      title: "Technology Access Initiative Reaches 1,000 Students",
      excerpt: "Our digital literacy program has provided computer training and technology access to over 1,000 students, preparing them for the digital economy.",
      date: "February 15, 2024",
      category: "Impact",
      image: skillsImage,
    },
    {
      title: "Volunteer Spotlight: Meet Marcus, Our Mentor of the Year",
      excerpt: "Marcus has mentored 15 young people over the past three years, helping them navigate education, career choices, and personal challenges. Learn about his dedication.",
      date: "February 10, 2024",
      category: "Volunteer Story",
      image: mentorshipImage,
    },
    {
      title: "Youth Leadership Summit Empowers Next Generation",
      excerpt: "Over 200 young leaders gathered for our annual Youth Leadership Summit, participating in workshops on advocacy, community organizing, and social change.",
      date: "February 5, 2024",
      category: "Event",
      image: communityImage,
    },
    {
      title: "Career Fair Connects 150 Youth with Employers",
      excerpt: "Our recent career fair brought together local businesses and job-seeking youth, resulting in over 40 job offers and countless valuable connections.",
      date: "January 30, 2024",
      category: "Program Highlight",
      image: skillsImage,
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
            Stories of Impact
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Read about the lives we're changing, the communities we're building, and the hope we're creating together.
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
