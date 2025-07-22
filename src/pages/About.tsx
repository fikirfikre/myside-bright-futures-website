import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Award, CheckCircle, Globe } from "lucide-react";
import facilityImage from "@/assets/facility-exterior.jpg";

const About = () => {
  const team = [
    {
      name: "Dr. Meron Tadesse",
      role: "Executive Director",
      credentials: "PhD in Special Education",
      experience: "15+ years experience"
    },
    {
      name: "Hana Girma",
      role: "Program Coordinator",
      credentials: "MSc in Occupational Therapy",
      experience: "10+ years experience"
    },
    {
      name: "Daniel Bekele",
      role: "Speech Therapist",
      credentials: "MSc in Speech-Language Pathology",
      experience: "8+ years experience"
    },
    {
      name: "Sara Ahmed",
      role: "Behavioral Specialist",
      credentials: "MSc in Applied Behavior Analysis",
      experience: "7+ years experience"
    }
  ];

  const achievements = [
    "150+ children successfully integrated into mainstream education",
    "90% improvement rate in communication skills",
    "50+ families provided with ongoing support",
    "25+ community awareness programs conducted",
    "100% transparency in fund utilization",
    "5+ international partnerships established"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-care">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MYSIDE</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dedicated to creating a brighter future for children with special needs through comprehensive education and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To establish a comprehensive educational and vocational training facility for children with Down syndrome, ADHD, Sensory Processing Disorder (SPD), Cerebral Palsy (CP), Developmental Coordination Disorder (DCD), Obsessive Compulsive Disorder (OCD), and Autism.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every child deserves the opportunity to learn, grow, and contribute meaningfully to their community, regardless of their abilities or challenges.
              </p>
            </div>
            <div className="relative">
              <img 
                src={facilityImage} 
                alt="MYSIDE facility" 
                className="rounded-xl shadow-warm w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Children with Down syndrome, ADHD, Sensory Processing Disorder (SPD), Cerebral Palsy (CP), Developmental Coordination Disorder (DCD), Obsessive Compulsive Disorder (OCD), and Autism in Addis Ababa face significant barriers to education, social inclusion, and future employment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Stigma, lack of awareness, and limited access to specialized services often result in these children being excluded from mainstream education and denied opportunities for personal and professional development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MYSIDE was founded to address this critical gap by providing a holistic and individualized approach to education and vocational training. Our project creates a safe, inclusive environment where every child can thrive and reach their full potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Leadership Team</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals brings decades of combined experience in special education and therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-gentle transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{member.credentials}</p>
                  <p className="text-sm text-primary font-medium">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Achievements</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over the years, we've made significant impact in the lives of children and families in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-care mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Status Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-hope/10 border-hope/20">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-hope" />
                <CardTitle className="text-2xl">Legal Status & Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Registration</h3>
                  <p className="text-sm text-muted-foreground">
                    Registered Non-Profit<br />
                    Registration #NGO-12345
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tax Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Tax-Exempt Organization<br />
                    All donations are tax-deductible
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Fully compliant with<br />
                    Ethiopian NGO regulations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;