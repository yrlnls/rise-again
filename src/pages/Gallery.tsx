import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import communityImage from "@/assets/community.jpg";
import heroImage from "@/assets/hero-image.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";
import skillsImage from "@/assets/skills-training.jpg";

const images = [
  { src: communityImage, alt: "Community Development" },
  { src: heroImage, alt: "Youth Empowerment" },
  { src: mentorshipImage, alt: "Mentorship Program" },
  { src: skillsImage, alt: "Skills Training" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-lg shadow-lg w-full h-48 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary opacity-30" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
