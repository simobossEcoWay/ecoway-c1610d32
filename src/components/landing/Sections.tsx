
import { Card } from "@/components/ui/card";

const Sections = () => {
  return (
    <>
      {/* Classifica Section */}
      <section id="classifica" className="py-24 min-h-screen">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              CLASSIFICA
            </span>
            <h2 className="heading-lg mt-6">Competi con Altri Utenti</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Sfida altri utenti e scala la classifica per diventare il più sostenibile
            </p>
          </div>
          <Card className="glass-panel p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <p className="text-neutral-600">La classifica sarà disponibile a breve!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mappa Section */}
      <section id="mappa" className="py-24 min-h-screen bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              MAPPA
            </span>
            <h2 className="heading-lg mt-6">Esplora la Tua Città</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Scopri punti di interesse e percorsi sostenibili nella tua zona
            </p>
          </div>
          <Card className="glass-panel p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <p className="text-neutral-600">La mappa interattiva sarà disponibile a breve!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Ricompense Section */}
      <section id="ricompense" className="py-24 min-h-screen">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              RICOMPENSE
            </span>
            <h2 className="heading-lg mt-6">Guadagna Ricompense</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Ottieni premi e sconti per il tuo impegno nella sostenibilità
            </p>
          </div>
          <Card className="glass-panel p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <p className="text-neutral-600">Le ricompense saranno disponibili a breve!</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Sections;
