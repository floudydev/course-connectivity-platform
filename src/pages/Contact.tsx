
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  // Contact info cards
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Телефон",
      details: ["+7 (123) 456-7890", "+7 (123) 456-7891"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@saok2024.ru", "support@saok2024.ru"],
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Адрес",
      details: ["ул. Примерная, д. 123", "г. Москва, 123456"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Часы работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 15:00"],
    },
  ];

  return (
    <Layout>
      <div className="mt-16 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Свяжитесь с нами</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              У вас есть вопросы о наших курсах или вы хотите получить дополнительную информацию? 
              Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="animate-slide-up border bg-card shadow-sm transition-all hover:shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="overflow-hidden border bg-card shadow-sm animate-slide-up">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Отправить сообщение</h2>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="animate-slide-up [animation-delay:200ms]">
              <h2 className="mb-6 text-2xl font-bold">Мы на карте</h2>
              <div className="overflow-hidden rounded-lg border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347142668687!2d37.617765316010005!3d55.755863980551624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1646458234841!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
