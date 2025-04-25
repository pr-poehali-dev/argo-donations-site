
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="feature-icon mb-4">
      <span>{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "🏆",
      title: "Уникальные события",
      description: "Регулярные события, турниры и конкурсы с ценными призами и наградами."
    },
    {
      icon: "🚀",
      title: "Быстрый сервер",
      description: "Мощное серверное оборудование обеспечивает стабильную игру без лагов и задержек."
    },
    {
      icon: "🛡️",
      title: "Защита территории",
      description: "Система приватов позволяет защитить свои постройки и ресурсы от других игроков."
    },
    {
      icon: "🧙‍♂️",
      title: "Уникальные плагины",
      description: "Эксклюзивные плагины и модификации, которые делают игровой процесс более увлекательным."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Дружелюбное сообщество",
      description: "Активное и дружелюбное сообщество игроков, всегда готовых помочь новичкам."
    },
    {
      icon: "⚙️",
      title: "Постоянные обновления",
      description: "Регулярные обновления сервера с новым контентом и улучшениями игрового процесса."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают ArgoLand?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наш сервер предлагает уникальный игровой опыт с множеством возможностей и преимуществ для всех игроков.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
