
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Clock, GraduationCap, Users, Heart, CheckCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Анна Петрова",
      role: "Ректор, Профессор экономики",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
      description: "Доктор экономических наук с 15-летним опытом в сфере образования и бизнес-консультирования."
    },
    {
      name: "Иван Смирнов",
      role: "Заведующий кафедрой менеджмента",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "Специалист по стратегическому планированию и автор нескольких учебников по менеджменту."
    },
    {
      name: "Елена Козлова",
      role: "Руководитель отдела онлайн-обучения",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      description: "Эксперт в области образовательных технологий с опытом разработки инновационных учебных программ."
    },
    {
      name: "Алексей Иванов",
      role: "Профессор финансов",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      description: "Финансовый аналитик с богатым опытом работы в крупных банках и инвестиционных компаниях."
    },
  ];

  const achievements = [
    {
      year: "2010",
      title: "Основание колледжа",
      description: "Торгово-Экономический Колледж был основан группой ведущих преподавателей и экспертов в области экономики."
    },
    {
      year: "2015",
      title: "Аккредитация образовательных программ",
      description: "Все основные программы колледжа получили государственную аккредитацию и международное признание."
    },
    {
      year: "2018",
      title: "Запуск онлайн-платформы",
      description: "Разработка и внедрение современной онлайн-платформы для дистанционного обучения студентов."
    },
    {
      year: "2020",
      title: "Расширение образовательных программ",
      description: "Значительное расширение образовательных программ, включая новые направления в цифровой экономике."
    },
    {
      year: "2023",
      title: "Международное сотрудничество",
      description: "Установление партнерских отношений с ведущими мировыми образовательными учреждениями и бизнес-школами."
    }
  ];

  const values = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Качество образования",
      description: "Мы гарантируем высокое качество образовательных программ, соответствующих современным требованиям рынка труда."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Студентоцентрированный подход",
      description: "В центре нашего внимания - студенты, их потребности и интересы. Мы создаем условия для максимальной реализации их потенциала."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Этика и профессионализм",
      description: "Мы придерживаемся высоких этических стандартов и профессионального подхода во всех аспектах нашей деятельности."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Инновации и развитие",
      description: "Мы постоянно стремимся к совершенствованию образовательного процесса и внедрению инновационных методик обучения."
    }
  ];

  return (
    <Layout>
      <div className="mt-16 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-slide-up">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                О нашем колледже
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Торгово-Экономический Колледж (САОК-2024)
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Мы являемся современным образовательным учреждением, специализирующимся на подготовке квалифицированных 
                специалистов в области экономики, торговли, финансов и менеджмента. Наша миссия - обеспечить студентов 
                знаниями и навыками, необходимыми для успешной карьеры в быстро меняющемся мире.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5,000+</p>
                    <p className="text-sm text-muted-foreground">Выпускников</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-sm text-muted-foreground">Лет опыта</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">25+</p>
                    <p className="text-sm text-muted-foreground">Наград</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl p-2 shadow-lg animate-slide-up [animation-delay:200ms]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Фото колледжа"
                className="rounded-xl"
              />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-100 opacity-70 blur-2xl"></div>
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-indigo-100 opacity-70 blur-2xl"></div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-16">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="mission">Миссия</TabsTrigger>
                <TabsTrigger value="values">Ценности</TabsTrigger>
                <TabsTrigger value="history">История</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="animate-fade-in">
                <div className="mx-auto max-w-3xl text-center">
                  <GraduationCap className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h2 className="mb-4 text-3xl font-bold">Наша миссия</h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Наша миссия заключается в предоставлении качественного образования в области экономики и торговли, 
                    которое соответствует современным требованиям рынка труда и способствует профессиональному и 
                    личностному росту студентов. Мы стремимся подготовить квалифицированных специалистов, способных 
                    эффективно работать в условиях быстро меняющейся экономической среды и вносить значительный вклад в 
                    развитие общества.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Мы верим, что образование должно быть доступным, актуальным и ориентированным на практическое применение 
                    полученных знаний. Наша цель - стать лидером в области экономического образования, признанным за высокое 
                    качество образовательных программ и инновационные методы обучения.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="values" className="animate-fade-in">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {values.map((value, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-4">{value.icon}</div>
                        <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="history" className="animate-fade-in">
                <div className="relative mx-auto max-w-3xl">
                  <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="relative mb-8 pl-8 md:ml-6">
                      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div className="absolute -left-20 top-0 hidden w-16 text-right text-lg font-bold text-primary md:block">
                        {achievement.year}
                      </div>
                      <div className="rounded-lg border bg-card p-4 shadow-sm">
                        <div className="mb-1 text-sm font-semibold text-primary md:hidden">
                          {achievement.year}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Наша команда</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Познакомьтесь с нашими профессионалами, которые делятся своими знаниями и опытом для вашего успеха
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
