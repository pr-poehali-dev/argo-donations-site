
import DonatCard from '@/components/DonatCard';

const DonateSection = () => {
  const donatPackages = [
    {
      title: "VIP",
      price: 199,
      features: [
        "Префикс [VIP] в чате",
        "Доступ к команде /fly в мирном мире",
        "Возможность установить 2 точки дома",
        "Доступ к эксклюзивным эмодзи в чате"
      ],
      color: "bg-emerald-500"
    },
    {
      title: "PREMIUM",
      price: 499,
      features: [
        "Префикс [PREMIUM] в чате",
        "Все возможности VIP",
        "Доступ к команде /heal и /feed",
        "Возможность установить 3 точки дома",
        "+5 claim-блоков для приватов"
      ],
      color: "bg-blue-500",
      isPopular: true
    },
    {
      title: "DELUXE",
      price: 999,
      features: [
        "Префикс [DELUXE] в чате",
        "Все возможности PREMIUM",
        "Полный доступ к /fly на всех мирах",
        "Возможность установить 5 точек дома",
        "+10 claim-блоков для приватов"
      ],
      color: "bg-purple-600"
    },
    {
      title: "STARTER",
      price: 99,
      features: [
        "Префикс [STARTER] в чате",
        "Набор стартовых ресурсов",
        "Доступ к /kit starter",
        "Возможность установить 1 точку дома"
      ],
      color: "bg-green-400"
    },
    {
      title: "ELITE",
      price: 1499,
      features: [
        "Префикс [ELITE] в чате",
        "Все возможности DELUXE",
        "Доступ к команде /workbench",
        "Возможность установить 7 точек дома",
        "+15 claim-блоков для приватов"
      ],
      color: "bg-amber-500"
    },
    {
      title: "LEGEND",
      price: 2499,
      features: [
        "Префикс [LEGEND] в чате",
        "Все возможности ELITE",
        "Доступ к /enderchest из любой точки",
        "Возможность установить 10 точек дома",
        "+25 claim-блоков для приватов"
      ],
      color: "bg-indigo-600"
    },
    {
      title: "IMMORTAL",
      price: 3499,
      features: [
        "Префикс [IMMORTAL] в чате",
        "Все возможности LEGEND",
        "Доступ к команде /god (временное бессмертие)",
        "Доступ к эксклюзивным предметам",
        "+50 claim-блоков для приватов"
      ],
      color: "bg-fuchsia-600"
    },
    {
      title: "GOD",
      price: 4999,
      features: [
        "Префикс [GOD] в чате",
        "Все возможности остальных групп",
        "Безлимитные точки дома",
        "Доступ к VIP разделам сервера",
        "+100 claim-блоков для приватов"
      ],
      color: "bg-red-600"
    }
  ];

  return (
    <section id="donate" className="py-20 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Поддержи сервер и получи привилегии</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбери подходящий пакет привилегий и получи эксклюзивные возможности на сервере ArgoLand.
            Каждый донат помогает нам развивать сервер и делать его еще лучше!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donatPackages.map((pkg, index) => (
            <DonatCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
              color={pkg.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
