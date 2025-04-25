
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center relative">
      <div 
        className="absolute inset-0 z-[-1] bg-minecraft-pattern bg-cover bg-center opacity-20"
        style={{ backgroundBlendMode: 'overlay' }}
      />
      
      <div className="container mx-auto py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-minecraft-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-minecraft-primary">Minecraft сервер</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Добро пожаловать на <span className="text-minecraft-primary">ArgoLand</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Исследуйте огромный мир, создавайте невероятные постройки и найдите новых друзей 
            на нашем Minecraft сервере с уникальными возможностями и дружелюбным сообществом!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="minecraft-btn text-lg py-6 px-8">Начать играть</Button>
            <div className="flex items-center justify-center bg-card/50 border border-border py-3 px-6 rounded-lg">
              <span className="mr-3 text-muted-foreground">IP сервера:</span>
              <code className="font-bold">play.argoland.ru</code>
            </div>
          </div>
          
          <div className="mt-12 animate-float">
            <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto text-muted-foreground">
              <path 
                fill="currentColor" 
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
