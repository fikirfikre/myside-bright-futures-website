import { Button } from "@/components/ui/button";
import { Heart, Users, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Special Needs Children –{" "}
            <span className="text-hope">Your Support Changes Lives!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Join us in creating a brighter future for children with Down syndrome, ADHD, Autism, and other special needs through education, therapy, and community support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button size="lg" variant="donate" asChild className="text-lg px-8 py-4">
              <Link to="/donate">
                <Gift className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link to="/programs">
                <Heart className="mr-2 h-5 w-5" />
                Meet Our Children
              </Link>
            </Button>
            
            <Button size="lg" variant="hope" asChild className="text-lg px-8 py-4">
              <Link to="/volunteer">
                <Users className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Link>
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm md:text-base">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm md:text-base">Programs Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
              <div className="text-white/80 text-sm md:text-base">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-8 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;