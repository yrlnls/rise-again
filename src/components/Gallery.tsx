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
              <div className="relative max-h-96 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-96 object-contain"
                />
                <div className="absolute inset-0 bg-primary opacity-30" />
              </div>
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
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="relative h-10 w-10 rounded overflow-hidden">
              <img src={image.src} alt={image.alt} className="h-10 w-10 object-cover" />
              <div className="absolute inset-0 bg-primary opacity-30" />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
