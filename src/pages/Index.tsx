
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, BookOpen, GraduationCap, Users } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";

const Home = () => {
  const { settings, t } = useSettings();

  // Features data with language-specific content
  const features = settings.language === 'en' 
    ? [
        {
          icon: <BookOpen className="h-10 w-10 text-primary" />,
          title: "Quality Education",
          description: "Modern training programs developed by experts in the trade and economic sphere"
        },
        {
          icon: <GraduationCap className="h-10 w-10 text-primary" />,
          title: "Professional Teachers",
          description: "Experienced specialists and active industry professionals"
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Convenient Learning Format",
          description: "Online courses with 24/7 access to materials and the ability to learn at your own pace"
        }
      ]
    : [
        {
          icon: <BookOpen className="h-10 w-10 text-primary" />,
          title: "Качественное образование",
          description: "Современные программы обучения, разработанные экспертами торгово-экономической сферы"
        },
        {
          icon: <GraduationCap className="h-10 w-10 text-primary" />,
          title: "Профессиональные преподаватели",
          description: "Опытные специалисты и действующие профессионалы отрасли"
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Удобный формат обучения",
          description: "Онлайн-курсы с доступом к материалам 24/7 и возможностью обучаться в своем темпе"
        }
      ];

  // CTA translations
  const ctaContent = {
    en: {
      title: "Start your education today",
      description: "Invest in your future and acquire skills that are in demand in today's job market. Our courses will help you reach new heights in your professional career.",
      cta1: "Choose a course",
      cta2: "Contact us",
      promo: "20% discount for new students",
      promoDesc: "Register now and get a 20% discount on any of our courses. Offer valid until the end of the month.",
      getDiscount: "Get discount"
    },
    ru: {
      title: "Начните свое обучение уже сегодня",
      description: "Инвестируйте в свое будущее и приобретайте навыки, востребованные на современном рынке труда. Наши курсы помогут вам достичь новых высот в профессиональной карьере.",
      cta1: "Выбрать курс",
      cta2: "Связаться с нами",
      promo: "Скидка 20% для новых студентов",
      promoDesc: "Зарегистрируйтесь сейчас и получите скидку 20% на любой из наших курсов. Предложение действует до конца месяца.",
      getDiscount: "Получить скидку"
    }
  };

  const content = settings.language === 'en' ? ctaContent.en : ctaContent.ru;
  const whyUsTitle = settings.language === 'en' ? "Why Choose Us" : "Почему выбирают нас";
  const whyUsDesc = settings.language === 'en' 
    ? "We strive to create ideal conditions for your learning and development in the field of trade and economics"
    : "Мы стремимся создать идеальные условия для вашего обучения и развития в сфере торговли и экономики";

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{whyUsTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {whyUsDesc}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-slide-up rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow hv-effect card-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold sm:text-4xl">{content.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses">{content.cta1}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    {content.cta2}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg bg-white p-8 shadow-lg animate-slide-up [animation-delay:200ms]">
              <div className="absolute -top-4 right-4 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {settings.language === 'en' ? 'Promo' : 'Акция'}
              </div>
              <h3 className="text-2xl font-bold">{content.promo}</h3>
              <p className="mt-2 text-muted-foreground">
                {content.promoDesc}
              </p>
              <Button className="mt-6 w-full" asChild>
                <Link to="/courses">{content.getDiscount}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
