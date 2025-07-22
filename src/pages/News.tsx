import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, 
  Heart, 
  Calendar, 
  User, 
  Clock,
  MessageCircle,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const recentUpdates = [
    {
      title: "New Sensory Integration Program Launched",
      date: "February 28, 2024",
      author: "Dr. Meron Tadesse",
      category: "Program Update",
      excerpt: "We're excited to announce the launch of our new sensory integration therapy program, designed specifically for children with SPD and autism.",
      readTime: "3 min read"
    },
    {
      title: "150 Children Successfully Integrated into Mainstream Schools",
      date: "February 20, 2024",
      author: "Hana Girma",
      category: "Milestone", 
      excerpt: "A major achievement as we celebrate 150 children who have successfully transitioned to mainstream education through our programs.",
      readTime: "5 min read"
    },
    {
      title: "Community Awareness Week: Breaking Down Barriers",
      date: "February 15, 2024",
      author: "Sara Ahmed",
      category: "Community",
      excerpt: "Our recent awareness week reached over 2,000 community members, helping to reduce stigma and increase understanding of special needs.",
      readTime: "4 min read"
    },
    {
      title: "New Partnership with International Special Education Foundation",
      date: "February 10, 2024",
      author: "Daniel Bekele",
      category: "Partnership",
      excerpt: "We've partnered with ISEF to bring cutting-edge therapeutic techniques and resources to Ethiopian children with special needs.",
      readTime: "6 min read"
    }
  ];

  const awarenessArticles = [
    {
      title: "Understanding Autism Spectrum Disorder: A Parent's Guide",
      date: "February 25, 2024",
      category: "Education",
      excerpt: "Essential information for parents navigating an autism diagnosis, including early signs, intervention strategies, and support resources.",
      readTime: "8 min read"
    },
    {
      title: "Creating Inclusive Classrooms: Best Practices for Educators",
      date: "February 18, 2024", 
      category: "Education",
      excerpt: "Practical strategies for teachers to create learning environments where children with special needs can thrive alongside their peers.",
      readTime: "6 min read"
    },
    {
      title: "The Power of Early Intervention in Special Needs Education",
      date: "February 12, 2024",
      category: "Research",
      excerpt: "Research-backed insights into why early intervention is crucial and how it can dramatically improve outcomes for children with special needs.",
      readTime: "7 min read"
    },
    {
      title: "Building Communication Skills in Non-Verbal Children",
      date: "February 5, 2024",
      category: "Therapy",
      excerpt: "Innovative approaches and techniques for helping non-verbal children develop communication skills and express themselves effectively.",
      readTime: "9 min read"
    }
  ];

  const testimonials = [
    {
      name: "Almaz Tadesse",
      role: "Parent",
      child: "Dawit, Age 8 (Autism)",
      text: "MYSIDE transformed my son's life. When we first came here, Dawit was completely non-verbal. Today, he's not only speaking but also reading and writing. The individual attention and specialized programs made all the difference.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      role: "Volunteer Coordinator",
      experience: "2 years volunteering",
      text: "Volunteering at MYSIDE has been the most rewarding experience of my life. Watching these amazing children grow and achieve milestones that seemed impossible is truly inspiring. The staff's dedication is unmatched.",
      rating: 5
    },
    {
      name: "Selamawit Bekele",
      role: "Parent",
      child: "Hanna, Age 6 (Down Syndrome)",
      text: "The holistic approach at MYSIDE goes beyond education. They've helped our entire family understand and support Hanna's needs. Today, she's thriving in a mainstream school thanks to the foundation built here.",
      rating: 5
    },
    {
      name: "Dr. Emily Roberts",
      role: "Volunteer Therapist",
      experience: "18 months",
      text: "As a speech therapist, I'm impressed by MYSIDE's evidence-based approach and commitment to each child's unique needs. The progress I've witnessed here surpasses anything I've seen in traditional settings.",
      rating: 5
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Program Update": return "bg-trust text-trust-foreground";
      case "Milestone": return "bg-care text-care-foreground";
      case "Community": return "bg-hope text-hope-foreground";
      case "Partnership": return "bg-primary text-primary-foreground";
      case "Education": return "bg-trust text-trust-foreground";
      case "Research": return "bg-care text-care-foreground";
      case "Therapy": return "bg-hope text-hope-foreground";
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
              <Newspaper className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">News & Blog</h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with our latest activities, educational insights, and inspiring stories from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recent Updates</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest news and developments from MYSIDE Special Needs Charity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(update.category)}>
                      {update.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{update.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{update.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{update.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{update.author}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{update.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Needs Awareness Articles */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Special Needs Awareness</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Educational articles and insights to increase understanding and awareness of special needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awarenessArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-gentle transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Quote className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the parents, volunteers, and professionals who are part of our MYSIDE family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-hope/5 border-hope/20 hover:shadow-gentle transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      {testimonial.child && (
                        <p className="text-sm text-hope font-medium">{testimonial.child}</p>
                      )}
                      {testimonial.experience && (
                        <p className="text-sm text-hope font-medium">{testimonial.experience}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-hope text-hope" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="w-6 h-6 text-hope mb-2" />
                  <p className="text-muted-foreground italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-trust/10 border-trust/20">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-trust mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Share Your Story</h3>
                <p className="text-muted-foreground mb-6">
                  Have a story to share about your experience with MYSIDE? We'd love to hear from you and share your journey with our community.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Share Your Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;