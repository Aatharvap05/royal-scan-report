
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Zap, CheckCircle, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function PricingPlans() {
  const { toast } = useToast();

  const handleUpgrade = (plan: string) => {
    toast({
      title: `Upgrading to ${plan} Plan! 👑`,
      description: "Redirecting to secure payment portal...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-poppins bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Choose Your Royal Plan
        </h2>
        <p className="text-muted-foreground">
          Select the perfect plan to monitor and optimize your digital kingdom
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="glass-card border-green-200 rounded-2xl relative">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-poppins">Free Plan</CardTitle>
            <CardDescription>Perfect for getting started</CardDescription>
            <div className="text-center mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                '1 website scan per week',
                'Basic SEO analysis',
                'Email report summaries',
                'Mobile-friendly interface',
                'Community support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-6 border-green-200 hover:bg-green-50"
            >
              Current Plan
            </Button>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card className="glass-card border-gold-200 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 royal-gradient text-white px-4 py-1 text-sm font-medium">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>Most Popular</span>
            </div>
          </div>
          <CardHeader className="text-center">
            <div className="w-16 h-16 royal-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-green">
              <Crown className="w-8 h-8 text-white animate-crown-pulse" />
            </div>
            <CardTitle className="text-2xl font-poppins">Pro Plan</CardTitle>
            <CardDescription>For serious website owners</CardDescription>
            <div className="text-center mt-4">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                'Monitor up to 3 websites',
                'Unlimited scans anytime',
                'Advanced SEO insights',
                'Broken link detection',
                'Speed optimization tips',
                'Priority email support',
                'Custom reporting schedules',
                'White-label reports'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              onClick={() => handleUpgrade('Pro')}
              className="w-full mt-6 royal-gradient hover:glow-green transition-all duration-300"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Billing Mock-up */}
      <Card className="glass-card border-green-200 rounded-2xl max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Billing Information</CardTitle>
          <CardDescription className="text-center">
            Secure payment processing with 30-day money-back guarantee
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Card Number</label>
              <div className="p-3 border border-green-200 rounded-lg bg-green-50/50 text-muted-foreground">
                •••• •••• •••• 1234
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Expiry Date</label>
              <div className="p-3 border border-green-200 rounded-lg bg-green-50/50 text-muted-foreground">
                MM/YY
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Cardholder Name</label>
            <div className="p-3 border border-green-200 rounded-lg bg-green-50/50 text-muted-foreground">
              Your Full Name
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <Badge variant="outline" className="text-xs">
              🔒 256-bit SSL Encryption
            </Badge>
            <Badge variant="outline" className="text-xs">
              💳 Stripe Secure
            </Badge>
            <Badge variant="outline" className="text-xs">
              🛡️ PCI Compliant
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-center mb-8 font-poppins">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Shopify Store Owner",
              text: "ScanAlert helped me identify 15 SEO issues I never knew existed. My organic traffic increased 40% in 2 months!",
              rating: 5
            },
            {
              name: "Mike Chen",
              role: "Blogger & Content Creator",
              text: "The weekly reports are a game-changer. I love getting detailed insights without having to remember to check manually.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <Card key={index} className="glass-card border-green-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
