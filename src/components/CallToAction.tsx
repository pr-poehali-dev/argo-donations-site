import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
