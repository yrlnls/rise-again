import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel className="relative" opts={{ loop: true }}>
        <CarouselContent className="flex">
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-96 object-contain rounded-lg shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10" />
        <CarouselNext className="z-10" />
      </Carousel>
      <div className="flex justify-center mt-4 space-x-4">
        {images.map((image, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => {
              // Scroll to the selected slide
              // This requires access to carousel API, which can be added later if needed
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} className="h-10 w-10 object-cover rounded" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
