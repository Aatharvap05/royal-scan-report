
import { useState } from 'react';
import { Crown, Plus, Zap, BarChart3, Mail, Settings, LogOut, Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ScanResults } from '@/components/ScanResults';
import { PricingPlans } from '@/components/PricingPlans';
import { SettingsPanel } from '@/components/SettingsPanel';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newWebsiteUrl, setNewWebsiteUrl] = useState('');
  const [newWebsiteEmail, setNewWebsiteEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const { toast } = useToast();

  const scanHistory = [
    { id: 1, url: 'mystore.com', score: 85, date: '2025-01-09', status: 'completed' },
    { id: 2, url: 'blog.example.com', score: 72, date: '2025-01-08', status: 'completed' },
    { id: 3, url: 'portfolio.dev', score: 91, date: '2025-01-07', status: 'completed' },
    { id: 4, url: 'ecommerce.shop', score: 68, date: '2025-01-06', status: 'issues' },
    { id: 5, url: 'creative.agency', score: 94, date: '2025-01-05', status: 'excellent' },
  ];

  const handleAddWebsite = () => {
    if (!newWebsiteUrl || !newWebsiteEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in both website URL and email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Website Added Successfully! 👑",
      description: `${newWebsiteUrl} has been added to your monitoring list.`,
    });
    setNewWebsiteUrl('');
    setNewWebsiteEmail('');
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Complete! ✨",
        description: "Your website has been thoroughly analyzed.",
      });
    }, 3000);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-green-100 text-green-800',
      issues: 'bg-yellow-100 text-yellow-800',
      excellent: 'bg-blue-100 text-blue-800',
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-teal-900/20">
      {/* Header */}
      <header className="glass-card border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 royal-gradient rounded-xl flex items-center justify-center glow-green">
                <Crown className="w-6 h-6 text-white animate-crown-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  ScanAlert
                </h1>
                <p className="text-sm text-muted-foreground">Royal Website Guardian</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="hover:glow-green transition-all duration-300"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Badge variant="outline" className="border-green-200 text-green-700 px-3 py-1">
                Free Plan
              </Badge>
              <Button variant="ghost" size="sm" className="hover:glow-green">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Motivational Banner */}
      <div className="container mx-auto px-6 py-4">
        <Card className="glass-card border-gold-200 royal-gradient-light">
          <CardContent className="p-4">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Sparkles className="w-5 h-5 animate-sparkle" />
              <p className="font-medium">A healthy website builds trust and grows your kingdom 👑</p>
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-6 pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 space-y-2">
            <nav className="glass-card p-4 rounded-2xl">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                  { id: 'pricing', label: 'Pricing', icon: Crown },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    className={`w-full justify-start transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'royal-gradient text-white glow-green' 
                        : 'hover:glow-green hover:bg-green-50'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {activeTab === 'dashboard' && (
              <>
                {/* Add Website Section */}
                <Card className="glass-card border-green-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="w-5 h-5 text-green-600" />
                      <span>Add New Website</span>
                    </CardTitle>
                    <CardDescription>
                      Add a website to monitor for SEO health and performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="website-url">Website URL</Label>
                        <Input
                          id="website-url"
                          placeholder="https://yourwebsite.com"
                          value={newWebsiteUrl}
                          onChange={(e) => setNewWebsiteUrl(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email for Reports</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={newWebsiteEmail}
                          onChange={(e) => setNewWebsiteEmail(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleAddWebsite} 
                      className="royal-gradient hover:glow-green transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Website
                    </Button>
                  </CardContent>
                </Card>

                {/* Scan Action */}
                <Card className="glass-card border-green-200 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 royal-gradient rounded-full flex items-center justify-center mx-auto glow-green">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">Run Website Scan</h3>
                      <p className="text-muted-foreground">
                        Analyze your website for SEO issues, performance, and metadata
                      </p>
                      <Button
                        size="lg"
                        onClick={handleRunScan}
                        disabled={isScanning}
                        className="royal-gradient hover:glow-green transition-all duration-300 px-8"
                      >
                        {isScanning ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Scanning...
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Run New Scan
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Reports Toggle */}
                <Card className="glass-card border-green-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>Weekly Reports</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Weekly Reports</p>
                        <p className="text-sm text-muted-foreground">
                          Receive automated SEO health reports every week
                        </p>
                      </div>
                      <Switch
                        checked={weeklyReports}
                        onCheckedChange={setWeeklyReports}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Scan History */}
                <Card className="glass-card border-green-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle>Recent Scans</CardTitle>
                    <CardDescription>Your last 5 website scans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scanHistory.map((scan) => (
                        <div
                          key={scan.id}
                          className="flex items-center justify-between p-4 border border-green-100 rounded-xl hover:bg-green-50/50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{scan.url}</p>
                              <p className="text-sm text-muted-foreground">{scan.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge className={getStatusBadge(scan.status)}>
                              {scan.status}
                            </Badge>
                            <div className="text-right">
                              <p className={`font-bold ${getScoreColor(scan.score)}`}>
                                {scan.score}/100
                              </p>
                              <Progress value={scan.score} className="w-20 h-2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Sample Scan Results */}
                <ScanResults />
              </>
            )}

            {activeTab === 'pricing' && <PricingPlans />}
            {activeTab === 'settings' && <SettingsPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}
