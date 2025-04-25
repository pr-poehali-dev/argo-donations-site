import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import DonatCard from "@/components/DonatCard";
import Footer from "@/components/Footer";

const Index = () => {
  const donatPackages = [
    {
      title: "VIP",
      price: 149,
      features: [
        "Префикс VIP в чате",
        "Доступ к VIP-командам",
        "Уникальный набор предметов"
      ],
      icon: "👑",
      popular: false
    },
    {
      title: "PREMIUM",
      price: 349,
      features: [
        "Все преимущества VIP",
        "Уникальные предметы и скины",
        "Расширенные права на сервере"
      ],
      icon: "💎",
      popular: true
    },
    {
      title: "DELUXE",
      price: 599,
      features: [
        "Все преимущества PREMIUM",
        "Эксклюзивные плащи и питомцы",
        "Доступ к приватным серверам"
      ],
      icon: "🌟",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-minecraft-pattern opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background -z-10"></div>
        
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-minecraft-primary">ArgoLand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальным игровым опытом и шикарными привилегиями!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="minecraft-btn text-lg px-8 py-6">
              Начать играть
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-16 bg-card/30 backdrop-blur-sm p-4 rounded-lg border border-border max-w-md mx-auto">
            <p className="font-bold">IP сервера:</p>
            <div className="flex items-center justify-center mt-2">
              <code className="bg-muted px-4 py-2 rounded font-mono text-lg">play.argoland.ru</code>
              <Button variant="ghost" className="ml-2" onClick={() => navigator.clipboard.writeText('play.argoland.ru')}>
                📋
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Донат секция */}
      <section id="donate" className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Поддержи наш сервер</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Получи особые привилегии и возможности, которые сделают твою игру еще интереснее! 
              Мы предлагаем разные пакеты с уникальными преимуществами.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donatPackages.map((pkg, index) => (
              <DonatCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                icon={pkg.icon}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Раздел преимуществ */}
      <section id="about" className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему ArgoLand?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создали уникальный опыт игры, сочетающий лучшие аспекты Minecraft и нашего видения идеального сервера.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Стабильность 24/7</h3>
              <p className="text-muted-foreground">
                Наш сервер работает на мощном оборудовании, обеспечивая непрерывную игру без лагов и падений.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">Уникальные режимы</h3>
              <p className="text-muted-foreground">
                Мы разработали эксклюзивные игровые режимы, которых вы не найдете на других серверах.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Дружное сообщество</h3>
              <p className="text-muted-foreground">
                У нас собрались игроки, которые всегда готовы помочь и поделиться опытом с новичками.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ секция */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о нашем сервере и привилегиях
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-2">Как начать играть на сервере?</h3>
              <p className="text-muted-foreground">
                Просто запустите Minecraft, перейдите в раздел "Мультиплеер", добавьте новый сервер и введите наш IP: play.argoland.ru
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-2">Какие версии Minecraft поддерживаются?</h3>
              <p className="text-muted-foreground">
                Наш сервер поддерживает версии от 1.16.5 до 1.20.4. Рекомендуемая версия - 1.19.2.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-2">Как активировать донат после покупки?</h3>
              <p className="text-muted-foreground">
                После успешной оплаты привилегия активируется автоматически в течение 5 минут. В случае проблем обратитесь к администрации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-minecraft-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готов присоединиться?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Не упусти шанс стать частью нашего сообщества. Тысячи игроков уже выбрали ArgoLand!
          </p>
          <Button className="bg-white text-minecraft-primary hover:bg-white/90 text-lg px-8 py-6">
            Начать играть сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
