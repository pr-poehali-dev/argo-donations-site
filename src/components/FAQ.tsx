
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => (
  <AccordionItem value={value}>
    <AccordionTrigger className="text-left font-medium">{question}</AccordionTrigger>
    <AccordionContent>
      <p className="text-muted-foreground">{answer}</p>
    </AccordionContent>
  </AccordionItem>
);

const FAQ = () => {
  const faqItems = [
    {
      question: "Как начать играть на сервере?",
      answer: "Для начала игры вам нужно скачать лицензионную версию Minecraft, запустить игру, перейти в раздел 'Мультиплеер', нажать 'Добавить сервер' и ввести IP-адрес play.argoland.ru.",
      value: "item-1"
    },
    {
      question: "Как приобрести донат на сервере?",
      answer: "Для покупки доната выберите подходящий пакет привилегий на нашем сайте, нажмите 'Купить', введите свой игровой ник и выберите удобный способ оплаты. После оплаты привилегии будут активированы автоматически.",
      value: "item-2"
    },
    {
      question: "Можно ли перенести донат на другой аккаунт?",
      answer: "Да, перенос доната на другой аккаунт возможен. Для этого необходимо связаться с администрацией сервера через Discord или VK и предоставить доказательства владения обоими аккаунтами.",
      value: "item-3"
    },
    {
      question: "Как защитить свою территорию от других игроков?",
      answer: "На сервере используется система приватов. Для создания привата используйте деревянную лопату (получить можно командой /claim), выделите территорию и следуйте инструкциям в чате. Количество доступных для привата блоков зависит от игрового времени и вашей привилегии.",
      value: "item-4"
    },
    {
      question: "Как связаться с администрацией сервера?",
      answer: "Связаться с администрацией можно через нашу группу ВКонтакте, Discord-сервер или прямо в игре, используя команду /help с описанием вашей проблемы.",
      value: "item-5"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о сервере ArgoLand и игровом процессе.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <FAQItem
                key={item.value}
                question={item.question}
                answer={item.answer}
                value={item.value}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
