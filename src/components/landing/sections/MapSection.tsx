
import { Card } from "@/components/ui/card";
import CityMap from "@/components/map/CityMap";

const MapSection = () => {
  return (
    <section id="mappa" className="py-24 min-h-screen bg-zinc-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            MAPPA
          </span>
          <h2 className="heading-lg mt-6 text-zinc-950">Esplora la Tua Città</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Scopri punti di interesse e percorsi sostenibili nella tua zona
          </p>
        </div>
        <Card className="glass-panel p-8 rounded-2xl max-w-5xl mx-auto">
          <CityMap />
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
