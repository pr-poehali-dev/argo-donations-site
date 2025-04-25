import DonatCard from "@/components/DonatCard";

export interface DonatPackage {
  title: string;
  price: number;
  features: string[];
  icon: string;
  popular: boolean;
}

const DonateSection = () => {
  const donatPackages: DonatPackage[] = [
    {
      title: "STARTER",
      price: 99,
      features: [
        "Базовый префикс в чате",
        "Доступ к /kit starter",
        "Возможность установки 2 точек дома"
      ],
      icon: "🌱",
      popular: false
    },
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
    },
    {
      title: "ELITE",
      price: 899,
      features: [
        "Все преимущества DELUXE",
        "Полный доступ ко всем командам",
        "Эксклюзивные эффекты частиц"
      ],
      icon: "🏆",
      popular: false
    },
    {
      title: "LEGEND",
      price: 1499,
      features: [
        "Все преимущества ELITE",
        "Персональный питомец с кастомизацией",
        "Возможность смены погоды и времени"
      ],
      icon: "⚡",
      popular: false
    },
    {
      title: "IMMORTAL",
      price: 2499,
      features: [
        "Все преимущества LEGEND",
        "Бессмертие в PvE зонах",
        "Личный остров размером 500x500"
      ],
      icon: "🔮",
      popular: false
    },
    {
      title: "GOD",
      price: 4999,
      features: [
        "Все преимущества IMMORTAL",
        "Консультации с администрацией",
        "Персональные запросы на обновления"
      ],
      icon: "🌌",
      popular: false
    }
  ];

  return (
    <section id="donate" className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Поддержи наш сервер</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Получи особые привилегии и возможности, которые сделают твою игру еще интереснее! 
            Мы предлагаем разные пакеты с уникальными преимуществами.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
  );
};

export default DonateSection;
