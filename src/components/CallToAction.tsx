
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-minecraft-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-minecraft-accent/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Готов начать приключение?</h2>
              <p className="text-muted-foreground max-w-lg">
                Присоединяйся к тысячам игроков на нашем сервере и стань частью дружного сообщества ArgoLand прямо сейчас!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="minecraft-btn">Начать играть</Button>
              <Button variant="outline">Discord сообщество</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
