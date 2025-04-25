import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
            <Button 
              variant="ghost" 
              className="ml-2" 
              onClick={() => navigator.clipboard.writeText('play.argoland.ru')}
            >
              📋
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
