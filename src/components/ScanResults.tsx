
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, XCircle, Zap, Globe, Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function ScanResults() {
  const scanData = [
    { name: 'SEO Score', value: 85, color: '#10B981' },
    { name: 'Speed Score', value: 72, color: '#F59E0B' },
    { name: 'Meta Score', value: 91, color: '#3B82F6' },
  ];

  const issues = [
    { type: 'success', icon: CheckCircle, text: 'All meta titles are present', count: 12 },
    { type: 'warning', icon: AlertCircle, text: 'Some images missing alt text', count: 3 },
    { type: 'error', icon: XCircle, text: 'Broken internal links found', count: 2 },
    { type: 'success', icon: CheckCircle, text: 'SSL certificate is valid', count: 1 },
    { type: 'warning', icon: AlertCircle, text: 'Page load time could be improved', count: 1 },
  ];

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Scores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card border-green-200 rounded-2xl">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-green-600">SEO Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">85/100</div>
            <Progress value={85} className="w-full h-3" />
            <Badge className="mt-2 bg-green-100 text-green-800">Good</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card border-yellow-200 rounded-2xl">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <CardTitle className="text-yellow-600">Speed Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">72/100</div>
            <Progress value={72} className="w-full h-3" />
            <Badge className="mt-2 bg-yellow-100 text-yellow-800">Needs Work</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card border-blue-200 rounded-2xl">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-600">Meta Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">91/100</div>
            <Progress value={91} className="w-full h-3" />
            <Badge className="mt-2 bg-blue-100 text-blue-800">Excellent</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Chart Visualization */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Score Breakdown</CardTitle>
          <CardDescription>Visual representation of your website's health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scanData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {scanData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Issues Checklist */}
      <Card className="glass-card border-green-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Detailed Issues</CardTitle>
          <CardDescription>Complete checklist of found issues and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${getIssueColor(issue.type)}`}
              >
                <div className="flex items-center space-x-3">
                  <issue.icon className="w-5 h-5" />
                  <span className="font-medium">{issue.text}</span>
                </div>
                <Badge variant="outline" className="font-bold">
                  {issue.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
