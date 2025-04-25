interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Как начать играть на сервере?",
      answer: "Просто запустите Minecraft, перейдите в раздел \"Мультиплеер\", добавьте новый сервер и введите наш IP: play.argoland.ru"
    },
    {
      question: "Какие версии Minecraft поддерживаются?",
      answer: "Наш сервер поддерживает версии от 1.16.5 до 1.20.4. Рекомендуемая версия - 1.19.2."
    },
    {
      question: "Как активировать донат после покупки?",
      answer: "После успешной оплаты привилегия активируется автоматически в течение 5 минут. В случае проблем обратитесь к администрации."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашем сервере и привилегиях
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
