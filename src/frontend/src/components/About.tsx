import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Leveraging modern technologies and best practices to deliver robust, scalable solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly exploring new ideas and approaches to solve complex challenges creatively.'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development cycles without compromising quality.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a team of passionate professionals dedicated to creating exceptional digital experiences 
            that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                At Ankur, we believe in the power of technology to transform businesses and improve lives. 
                Our mission is to deliver innovative solutions that not only meet but exceed our clients' expectations.
              </p>
              <p>
                With a focus on quality, reliability, and customer satisfaction, we strive to be your trusted 
                partner in digital transformation. Whether you're a startup or an established enterprise, 
                we're here to help you achieve your goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
