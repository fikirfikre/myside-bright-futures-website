import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import learningImage from "@/assets/learning-success.jpg";

const ImpactSection = () => {
  const stats = [
    { number: "150+", label: "Children Helped", icon: Heart },
    { number: "25", label: "Expert Staff", icon: Users },
    { number: "90%", label: "Success Rate", icon: Star },
    { number: "5", label: "Years Experience", icon: Quote }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creating Real Impact in Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 5 years, MYSIDE has been transforming lives of children with Down syndrome, ADHD, Autism, and other special needs in Addis Ababa. Through our comprehensive programs, we've helped children develop essential skills, gain confidence, and achieve their potential.
            </p>

            {/* Success Story */}
            <Card className="mb-8 bg-hope/10 border-hope/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-hope mt-1" />
                  <div>
                    <p className="text-foreground italic mb-4">
                      "My daughter Sarah has Down syndrome, and when we first came to MYSIDE, she could barely communicate. Now, after two years in their program, she's reading, writing, and has made so many friends. The staff here truly care about each child's individual journey."
                    </p>
                    <p className="text-sm font-medium text-hope">
                      - Almaz T., Parent
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Button size="lg" variant="care" asChild>
              <Link to="/about">
                Read More Success Stories
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-warm">
              <img 
                src={learningImage} 
                alt="Child learning success story" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating achievement badges */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 animate-float">
                <Star className="w-6 h-6 text-hope" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-foreground">Learning Progress: 95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;