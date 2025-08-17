import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Battery, 
  Bluetooth, 
  Hand, 
  Settings, 
  TrendingUp, 
  Users, 
  Wifi,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Hand className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">SignGlove AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-success border-success/20">
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
              Connected
            </Badge>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Your SignGlove AI is ready for translation</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
              <Battery className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">87%</div>
              <p className="text-xs text-muted-foreground">~4 hours remaining</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Translations</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">342</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">94.2%</div>
              <p className="text-xs text-muted-foreground">Above average</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">2 group, 1 individual</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Control Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Translation Control</CardTitle>
                <CardDescription>
                  Manage your real-time sign language translation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="hero" size="lg" className="w-32">
                    <Play className="w-5 h-5 mr-2" />
                    Start
                  </Button>
                  <Button variant="outline" size="lg" className="w-32">
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </Button>
                  <Button variant="outline" size="lg" className="w-32">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Reset
                  </Button>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4 min-h-32">
                  <div className="text-sm text-muted-foreground mb-2">Live Translation Output</div>
                  <div className="text-lg font-medium">
                    Hello, how are you doing today?
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Confidence: 94% • Last updated: 2 seconds ago
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>
                  Your latest translation sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "2 hours ago", duration: "45 min", words: 234, accuracy: "95%" },
                    { time: "5 hours ago", duration: "23 min", words: 156, accuracy: "92%" },
                    { time: "1 day ago", duration: "67 min", words: 445, accuracy: "96%" },
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <div className="font-medium">{session.time}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.duration} • {session.words} words
                        </div>
                      </div>
                      <Badge variant="outline" className="text-success border-success/20">
                        {session.accuracy}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Device Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bluetooth className="w-4 h-4 text-primary" />
                    <span className="text-sm">Bluetooth</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Connected</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-primary" />
                    <span className="text-sm">WiFi</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Strong</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Hand className="w-4 h-4 text-primary" />
                    <span className="text-sm">Glove Fit</span>
                  </div>
                  <Badge className="bg-success text-success-foreground">Optimal</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Calibrate Glove
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Training Mode
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Join Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;