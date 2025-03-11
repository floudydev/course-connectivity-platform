
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, value: "5,000+", label: "Выпускников" },
    { icon: <BookOpen className="h-8 w-8 text-primary" />, value: "50+", label: "Курсов" },
    { icon: <Award className="h-8 w-8 text-primary" />, value: "15+", label: "Лет опыта" },
  ];

  return (
    <section className="relative overflow-hidden bg-secondary/30 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="О колледже"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-64 w-64 rounded-full bg-primary/5 animate-blur-in"></div>
          </div>

          <div className="animate-slide-up [animation-delay:200ms]">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              О нас
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Торгово-Экономический Колледж (САОК-2024)
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Мы являемся одним из ведущих образовательных учреждений в области экономики и торговли, предлагая современные онлайн-курсы, 
              разработанные экспертами индустрии. Наша миссия - предоставить качественное образование, которое поможет вам стать 
              востребованным специалистом на рынке труда.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">{stat.icon}</div>
                  <p className="mt-3 text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild>
                <Link to="/about">Подробнее о колледже</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
