import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Stethoscope, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import therapyImage from "@/assets/therapy-programs.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Individualized Education",
      description: "Tailored learning programs designed specifically for each child's unique needs and abilities.",
      features: ["One-on-one instruction", "Adaptive curriculum", "Progress tracking"]
    },
    {
      icon: Stethoscope,
      title: "Therapeutic Services",
      description: "Comprehensive therapy programs including speech, occupational, and behavioral therapy.",
      features: ["Speech therapy", "Occupational therapy", "Behavioral counseling"]
    },
    {
      icon: GraduationCap,
      title: "Vocational Training",
      description: "Practical skills training to prepare our children for future employment and independence.",
      features: ["Life skills training", "Job readiness", "Workplace preparation"]
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Supporting families with resources, counseling, and community connections.",
      features: ["Parent support groups", "Family counseling", "Resource sharing"]
    },
    {
      icon: MessageCircle,
      title: "Community Awareness",
      description: "Building understanding and acceptance of special needs in our community.",
      features: ["Public education", "Stigma reduction", "Advocacy programs"]
    },
    {
      icon: Heart,
      title: "Care & Development",
      description: "Nurturing each child's emotional, social, and personal development.",
      features: ["Social skills", "Emotional support", "Personal growth"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support through education, therapy, and community programs designed specifically for children with special needs.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-warm">
            <img 
              src={therapyImage} 
              alt="Children in therapy programs" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Transforming Lives Through Care</h3>
                <p className="text-white/90">Every child deserves the opportunity to reach their full potential</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="h-full hover:shadow-gentle transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="default" asChild>
            <Link to="/programs">
              Learn More About Our Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;