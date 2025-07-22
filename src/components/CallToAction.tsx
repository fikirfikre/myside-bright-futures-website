import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Every child deserves the opportunity to reach their full potential. Your support helps us provide the education, therapy, and care that transforms lives. Join our mission today.
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-white/80 mb-4">Your financial support directly funds our programs and helps us reach more children in need.</p>
              <Button variant="secondary" size="lg" asChild className="w-full">
                <Link to="/donate">
                  Donate Now
                </Link>
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-white/80 mb-4">Share your skills and time to directly impact the lives of our special needs children.</p>
              <Button variant="secondary" size="lg" asChild className="w-full">
                <Link to="/volunteer">
                  Join Us
                </Link>
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
              <p className="text-white/80 mb-4">Get updates on our programs, success stories, and upcoming events.</p>
              <Button variant="secondary" size="lg" asChild className="w-full">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Registered Non-Profit</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Tax-Deductible Donations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">100% Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;