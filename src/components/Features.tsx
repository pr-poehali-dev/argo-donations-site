interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Стабильность 24/7",
      description: "Наш сервер работает на мощном оборудовании, обеспечивая непрерывную игру без лагов и падений."
    },
    {
      icon: "🔥",
      title: "Уникальные режимы",
      description: "Мы разработали эксклюзивные игровые режимы, которых вы не найдете на других серверах."
    },
    {
      icon: "👥",
      title: "Дружное сообщество",
      description: "У нас собрались игроки, которые всегда готовы помочь и поделиться опытом с новичками."
    }
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему ArgoLand?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создали уникальный опыт игры, сочетающий лучшие аспекты Minecraft и нашего видения идеального сервера.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
