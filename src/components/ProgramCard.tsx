import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const ProgramCard = ({ title, description, icon: Icon, image }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary opacity-30" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
          <Link to="/programs">Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
