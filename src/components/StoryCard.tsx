import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface StoryCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
}

const StoryCard = ({ title, excerpt, date, image, category }: StoryCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group h-full flex flex-col">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary opacity-30" />
          {category && (
            <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
              {category}
            </div>
          )}
        </div>
      )}
      <CardHeader className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="link" className="px-0 text-primary" asChild>
          <Link to="/stories">Read More →</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
