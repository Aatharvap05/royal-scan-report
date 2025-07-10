
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Bell, Shield, Trash2, Save } from 'lucide-react';

export function SettingsPanel() {
  const [userSettings, setUserSettings] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    company: 'My Digital Store',
    timezone: 'UTC-5',
    notifications: {
      email: true,
      browser: false,
      weekly: true,
      critical: true,
    },
    reportFrequency: 'weekly',
  });

  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved! ✨",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Requested",
      description: "Please check your email to confirm account deletion.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-poppins bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Account Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your account preferences and notification settings
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-green-600" />
            <span>Profile Information</span>
          </CardTitle>
          <CardDescription>
            Update your personal information and account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={userSettings.fullName}
                onChange={(e) => setUserSettings({
                  ...userSettings,
                  fullName: e.target.value
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={userSettings.email}
                onChange={(e) => setUserSettings({
                  ...userSettings,
                  email: e.target.value
                })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company/Website</Label>
              <Input
                id="company"
                value={userSettings.company}
                onChange={(e) => setUserSettings({
                  ...userSettings,
                  company: e.target.value
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={userSettings.timezone} onValueChange={(value) => 
                setUserSettings({ ...userSettings, timezone: value })
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                  <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
                  <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
                  <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                  <SelectItem value="UTC+0">UTC</SelectItem>
                  <SelectItem value="UTC+1">Central Europe (UTC+1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-green-600" />
            <span>Notification Preferences</span>
          </CardTitle>
          <CardDescription>
            Control how and when you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive scan results and updates via email
                </p>
              </div>
              <Switch
                checked={userSettings.notifications.email}
                onCheckedChange={(checked) => setUserSettings({
                  ...userSettings,
                  notifications: { ...userSettings.notifications, email: checked }
                })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Browser Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get instant notifications in your browser
                </p>
              </div>
              <Switch
                checked={userSettings.notifications.browser}
                onCheckedChange={(checked) => setUserSettings({
                  ...userSettings,
                  notifications: { ...userSettings.notifications, browser: checked }
                })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Summaries</p>
                <p className="text-sm text-muted-foreground">
                  Receive weekly reports of all your websites
                </p>
              </div>
              <Switch
                checked={userSettings.notifications.weekly}
                onCheckedChange={(checked) => setUserSettings({
                  ...userSettings,
                  notifications: { ...userSettings.notifications, weekly: checked }
                })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Critical Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Get immediate alerts for critical issues
                </p>
              </div>
              <Switch
                checked={userSettings.notifications.critical}
                onCheckedChange={(checked) => setUserSettings({
                  ...userSettings,
                  notifications: { ...userSettings.notifications, critical: checked }
                })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reportFrequency">Report Frequency</Label>
            <Select value={userSettings.reportFrequency} onValueChange={(value) => 
              setUserSettings({ ...userSettings, reportFrequency: value })
            }>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>Security & Privacy</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                placeholder="Enter current password"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="mt-1"
              />
            </div>
          </div>
          <Button 
            variant="outline" 
            className="border-green-200 hover:bg-green-50"
          >
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* API Settings */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle>API Access</CardTitle>
          <CardDescription>
            Manage your API keys for third-party integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-green-200 rounded-lg">
            <div>
              <p className="font-medium">API Key</p>
              <p className="text-sm text-muted-foreground font-mono">
                sk_••••••••••••••••••••••••••••••••••••••••••
              </p>
            </div>
            <Badge variant="outline">Active</Badge>
          </div>
          <Button variant="outline" className="border-green-200 hover:bg-green-50">
            Generate New Key
          </Button>
        </CardContent>
      </Card>

      {/* Save and Danger Zone */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Button 
          onClick={handleSaveSettings}
          className="royal-gradient hover:glow-green transition-all duration-300"
        >
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
        
        <Button 
          onClick={handleDeleteAccount}
          variant="destructive"
          className="hover:bg-red-600"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete Account
        </Button>
      </div>
    </div>
  );
}
