import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Calendar, 
  UserPlus, 
  DollarSign, 
  GraduationCap,
  Briefcase,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  const volunteerRoles = [
    {
      title: "Teaching Assistants",
      description: "Support our educators in delivering specialized programs for children with special needs.",
      icon: GraduationCap,
      requirements: ["Patient and caring nature", "Experience with children preferred", "Commitment to 2+ hours per week"],
      time: "Flexible hours"
    },
    {
      title: "Fundraising Coordinators", 
      description: "Help organize and manage fundraising campaigns to support our programs.",
      icon: DollarSign,
      requirements: ["Strong communication skills", "Event planning experience", "Social media savvy"],
      time: "10-15 hours/month"
    },
    {
      title: "Event Organizers",
      description: "Plan and coordinate community events, workshops, and awareness programs.",
      icon: Calendar,
      requirements: ["Organizational skills", "Leadership abilities", "Team collaboration"],
      time: "Varies by event"
    },
    {
      title: "Professional Partnerships",
      description: "Internship and partnership opportunities for therapists and special education professionals.",
      icon: Briefcase,
      requirements: ["Professional qualifications", "Relevant experience", "Commitment to our mission"],
      time: "Flexible arrangements"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Charity Run",
      date: "March 15, 2024",
      time: "7:00 AM",
      location: "Meskel Square, Addis Ababa",
      description: "Join hundreds of supporters in our annual 5K run to raise funds for special needs education.",
      type: "Fundraising"
    },
    {
      title: "Special Needs Awareness Workshop",
      date: "March 22, 2024", 
      time: "2:00 PM",
      location: "MYSIDE Center",
      description: "Educational workshop for parents, educators, and community members.",
      type: "Education"
    },
    {
      title: "Spring Donation Drive",
      date: "April 5-12, 2024",
      time: "All Week",
      location: "Multiple locations",
      description: "Week-long drive collecting educational materials, toys, and supplies.",
      type: "Collection"
    },
    {
      title: "Volunteer Appreciation Dinner",
      date: "April 20, 2024",
      time: "6:00 PM", 
      location: "Sheraton Addis",
      description: "Celebrating our amazing volunteers and their contributions to our mission.",
      type: "Appreciation"
    }
  ];

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "Fundraising": return "bg-care text-care-foreground";
      case "Education": return "bg-trust text-trust-foreground";
      case "Collection": return "bg-hope text-hope-foreground";
      case "Appreciation": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Volunteer & Get Involved</h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join our mission to create a brighter future for children with special needs. Every helping hand makes a difference.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Volunteer Opportunities</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from various volunteer roles that match your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="hover:shadow-gentle transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{role.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-care mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-hope/10 border-hope/20">
              <CardContent className="p-8">
                <UserPlus className="w-12 h-12 text-hope mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out our volunteer application form and we'll match you with the perfect opportunity based on your skills and interests.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Apply to Volunteer</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Events</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us at our upcoming events and help make a difference in the lives of children with special needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl flex-1">{event.title}</CardTitle>
                    <Badge className={getEventBadgeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                      <Clock className="w-4 h-4 ml-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Learn More About Events</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Volunteer;