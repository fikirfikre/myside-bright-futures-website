import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Stethoscope, 
  GraduationCap, 
  Users, 
  MessageCircle, 
  Heart,
  Clock,
  Target,
  Award,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import therapyImage from "@/assets/therapy-programs.jpg";
import learningImage from "@/assets/learning-success.jpg";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { usePrograms } from "@/hooks/usePrograms";

const Programs = () => {
  // const {programs, loading} = usePrograms();

  const programs = [
    {
      icon: BookOpen,
      title: "Individualized Education Programs",
      description: "Tailored learning experiences designed specifically for each child's unique needs, abilities, and learning style.",
      features: [
        "One-on-one instruction",
        "Adaptive curriculum development",
        "Progress tracking and assessment",
        "Special learning materials",
        "Flexible pacing"
      ],
      ageGroup: "3-18 years",
      duration: "Ongoing",
      capacity: "30 children"
    },
    {
      icon: Stethoscope,
      title: "Therapeutic Services",
      description: "Comprehensive therapy programs delivered by licensed professionals to address various developmental needs.",
      features: [
        "Speech and language therapy",
        "Occupational therapy",
        "Physical therapy",
        "Behavioral therapy",
        "Family counseling sessions"
      ],
      ageGroup: "2-18 years",
      duration: "Weekly sessions",
      capacity: "50 children"
    },
    {
      icon: GraduationCap,
      title: "Vocational Training",
      description: "Practical skills training programs designed to prepare our students for future employment and independent living.",
      features: [
        "Life skills development",
        "Job readiness training",
        "Workplace preparation",
        "Communication skills",
        "Financial literacy"
      ],
      ageGroup: "14-21 years",
      duration: "6-12 months",
      capacity: "20 participants"
    },
    {
      icon: Users,
      title: "Family Support Programs",
      description: "Comprehensive support services for families to help them navigate challenges and access resources.",
      features: [
        "Parent support groups",
        "Family counseling",
        "Resource navigation",
        "Sibling support programs",
        "Educational workshops"
      ],
      ageGroup: "All families",
      duration: "Monthly meetings",
      capacity: "100 families"
    },
    {
      icon: MessageCircle,
      title: "Community Awareness",
      description: "Educational initiatives to build understanding and acceptance of special needs within our community.",
      features: [
        "Public education campaigns",
        "School awareness programs",
        "Community workshops",
        "Advocacy training",
        "Media outreach"
      ],
      ageGroup: "All ages",
      duration: "Ongoing",
      capacity: "Community-wide"
    },
    {
      icon: Heart,
      title: "Early Intervention",
      description: "Critical early support services for young children to maximize their developmental potential.",
      features: [
        "Developmental screening",
        "Early therapy services",
        "Parent training",
        "Home visit programs",
        "Transition planning"
      ],
      ageGroup: "0-5 years",
      duration: "Ongoing",
      capacity: "25 children"
    }
  ];

  const successStories = [
    {
      name: "Sarah's Journey",
      age: "8 years old",
      condition: "Down Syndrome",
      achievement: "Successfully integrated into mainstream education after 2 years in our program",
      quote: "Sarah now reads at grade level and has many friends at school."
    },
    {
      name: "Michael's Progress",
      age: "12 years old", 
      condition: "Autism",
      achievement: "Developed strong communication skills through our speech therapy program",
      quote: "Michael can now express his needs clearly and participates in group activities."
    },
    {
      name: "Hanan's Success",
      age: "16 years old",
      condition: "Cerebral Palsy",
      achievement: "Completed vocational training and secured part-time employment",
      quote: "Hanan is now working at a local business and living more independently."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
       <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-care to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs & Impact</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive services designed to empower children with special needs and support their families.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-warm">
              <img 
                src={therapyImage} 
                alt="Therapy programs" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Therapeutic Excellence</h3>
                  <p className="text-white/90">Professional therapy services tailored to each child</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-warm">
              <img 
                src={learningImage} 
                alt="Educational programs" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Educational Innovation</h3>
                  <p className="text-white/90">Individualized learning that celebrates every achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Comprehensive Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each program is designed with evidence-based practices and delivered by qualified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => {
              const Icon = Heart;
              return (
                <Card key={index} className="h-full hover:shadow-gentle transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {program.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          {program.ageGroup}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Target className="w-3 h-3 mr-1" />
                          {program.capacity}
                        </Badge>
                      </div> */}
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Program Features:</h4>
                        <ul className="space-y-1">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-care mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Success Stories</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of transformation and achievement from our program participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-hope/10 border-hope/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <Badge variant="secondary">{story.age}</Badge>
                  </div>
                  <CardDescription className="text-sm font-medium text-primary">
                    {story.condition}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{story.achievement}</p>
                  <blockquote className="text-sm italic text-foreground border-l-4 border-hope pl-4">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="care" asChild>
              <Link to="/contact">
                Learn How to Enroll Your Child
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Measuring Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Children Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-care mb-2">90%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-hope mb-2">25</div>
              <div className="text-muted-foreground">Expert Staff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-trust mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;