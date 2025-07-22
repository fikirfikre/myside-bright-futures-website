import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Heart, 
  Shield, 
  FileText, 
  PieChart,
  CreditCard,
  Building,
  Smartphone,
  Gift,
  Users,
  BookOpen,
  Stethoscope
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const impactExamples = [
    {
      amount: 25,
      impact: "Provides learning materials for one child for a month",
      icon: BookOpen
    },
    {
      amount: 50,
      impact: "Funds one therapy session for a child",
      icon: Stethoscope
    },
    {
      amount: 100,
      impact: "Supports one child's education for a week",
      icon: Heart
    },
    {
      amount: 250,
      impact: "Sponsors specialized equipment for therapy",
      icon: Gift
    },
    {
      amount: 500,
      impact: "Funds teacher training and development",
      icon: Users
    },
    {
      amount: 1000,
      impact: "Supports one child's full monthly program",
      icon: Shield
    }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      toast({
        title: "Please enter a valid amount",
        description: "Please select or enter a donation amount greater than $0.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your donation!",
      description: `Your ${donationType} donation of $${amount} will make a real difference in a child's life.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hope to-care">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your donation directly supports children with special needs and helps us provide the education and therapy they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Heart className="w-6 h-6 text-primary mr-2" />
                    Make Your Donation
                  </CardTitle>
                  <CardDescription>
                    Choose your donation amount and help us transform lives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-base font-medium">Donation Type</Label>
                    <div className="flex space-x-4 mt-2">
                      <Button
                        variant={donationType === "one-time" ? "default" : "outline"}
                        onClick={() => setDonationType("one-time")}
                        className="flex-1"
                      >
                        One-time
                      </Button>
                      <Button
                        variant={donationType === "monthly" ? "default" : "outline"}
                        onClick={() => setDonationType("monthly")}
                        className="flex-1"
                      >
                        Monthly
                      </Button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-medium">Select Amount (USD)</Label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className="h-12"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <Label htmlFor="custom-amount" className="text-base font-medium">
                      Or enter custom amount
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="mt-2"
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Donor Information</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First name" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Leave a message of support..." />
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Button 
                    onClick={handleDonate}
                    variant="donate" 
                    size="lg" 
                    className="w-full text-lg py-6"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    Donate ${selectedAmount || customAmount || "0"} {donationType === "monthly" ? "Monthly" : "Now"}
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mt-6">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Secure
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      Tax-deductible
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      100% goes to programs
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Examples */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Impact</h2>
                <p className="text-muted-foreground mb-6">
                  See how your donation directly transforms the lives of children with special needs.
                </p>
              </div>

              <div className="space-y-4">
                {impactExamples.map((example, index) => {
                  const Icon = example.icon;
                  return (
                    <Card key={index} className="bg-muted/20 hover:bg-muted/30 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="text-lg font-bold">
                                ${example.amount}
                              </Badge>
                            </div>
                            <p className="text-foreground">{example.impact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Give
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the donation method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-gentle transition-all duration-300">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Online Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Secure online payments via credit card or PayPal</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gentle transition-all duration-300">
              <CardHeader>
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Bank Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Direct bank transfer to our organization account</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gentle transition-all duration-300">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Mobile Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Convenient mobile payment options</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gentle transition-all duration-300">
              <CardHeader>
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Equipment, supplies, and other material donations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <PieChart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Where Your Money Goes
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in complete transparency about how donations are used.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-care/10 border-care/20">
              <CardHeader>
                <div className="text-4xl font-bold text-care">80%</div>
                <CardTitle>Direct Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Education, therapy, and direct services for children
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-primary/10 border-primary/20">
              <CardHeader>
                <div className="text-4xl font-bold text-primary">15%</div>
                <CardTitle>Administration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operational costs and administrative expenses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-hope/10 border-hope/20">
              <CardHeader>
                <div className="text-4xl font-bold text-hope">5%</div>
                <CardTitle>Fundraising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Costs associated with raising funds for our mission
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              Download Annual Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;