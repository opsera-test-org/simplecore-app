import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast", description: "Built for speed and performance" },
  { icon: Shield, title: "Secure", description: "Your data stays protected" },
  { icon: BarChart3, title: "Insights", description: "Track what matters most" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold text-foreground tracking-tight">myapp</span>
        <Button variant="outline" size="sm">Get Started</Button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-24 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Simple tools,<br />
          <span className="text-primary">big results.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-md">
          Everything you need to build, launch, and grow — all in one place.
        </p>
        <div className="mt-8 flex gap-3">
          <Button size="lg">Start Free</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {features.map((f) => (
          <Card key={f.title} className="border-border bg-card">
            <CardContent className="pt-6">
              <f.icon className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
        © 2026 myapp. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
