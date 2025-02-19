
import { Card } from "@/components/ui/card";
import { Battery, Car, Bike, TreePine, Footprints, Calendar, ShoppingBag, Percent, Gift, ChevronDown, ChevronUp } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import { useState } from "react";

const Rewards = () => {
  const [showAllChallenges, setShowAllChallenges] = useState(false);

  const challenges = [
    {
      icon: Battery,
      title: "Ricarica Completa",
      description: "Ricarica la batteria della tua macchina fino al 100%",
      progress: 75,
      points: 50
    },
    {
      icon: Car,
      title: "Guida Efficiente",
      description: "Mantieni un consumo medio sotto i 15 kWh/100km per una settimana",
      progress: 45,
      points: 100
    },
    {
      icon: Bike,
      title: "Mobilità Alternativa",
      description: "Usa la bici o i mezzi pubblici per 5 giorni consecutivi",
      progress: 30,
      points: 75
    },
    {
      icon: Calendar,
      title: "Mobilità Elettrica",
      description: "Guida una macchina elettrica per 15 giorni di fila",
      progress: 20,
      points: 150
    },
    {
      icon: TreePine,
      title: "Amante dei Parchi",
      description: "Frequenta un parco 10 volte in un mese",
      progress: 40,
      points: 80
    },
    {
      icon: Footprints,
      title: "Camminatore Esperto",
      description: "Cammina tre chilometri in una giornata venti volte in un mese",
      progress: 60,
      points: 120
    }
  ];

  const visibleChallenges = showAllChallenges ? challenges : challenges.slice(0, 3);

  return (
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

        {/* Challenges Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Sfide Disponibili</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {visibleChallenges.map((challenge, index) => (
              <Card key={index} className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
                    <p className="text-neutral-600 mb-4">{challenge.description}</p>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-accent-purple h-full rounded-full" 
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-neutral-600">{challenge.progress}% completato</span>
                      <span className="text-sm font-bold text-accent-purple">+{challenge.points} punti</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <button
              onClick={() => setShowAllChallenges(!showAllChallenges)}
              className="w-full py-4 px-6 rounded-xl glass-panel hover:bg-accent-purple/5 
                transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span className="text-accent-purple font-medium">
                {showAllChallenges ? "Mostra meno sfide" : "Mostra altre sfide"}
              </span>
              {showAllChallenges ? (
                <ChevronUp className="w-5 h-5 text-accent-purple group-hover:transform group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 text-accent-purple group-hover:transform group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </div>

        {/* Store Discounts Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Riscatta le tue ricompense</h3>
          <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer
                  group hover:bg-accent-purple/5 active:bg-accent-purple/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center 
                      group-hover:bg-accent-purple/20">
                    <ShoppingBag className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">Sconto Colombo</h3>
                    <p className="text-neutral-600 group-hover:text-neutral-800">10% di sconto su tutti i prodotti da Colombo</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-purple">500</div>
                  <div className="text-sm text-neutral-600 group-hover:text-neutral-800">punti necessari</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer
                  group hover:bg-accent-purple/5 active:bg-accent-purple/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center 
                      group-hover:bg-accent-purple/20">
                    <Percent className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">Sconto Lanzarotti</h3>
                    <p className="text-neutral-600 group-hover:text-neutral-800">20% di sconto da Lanzarotti</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-purple">750</div>
                  <div className="text-sm text-neutral-600 group-hover:text-neutral-800">punti necessari</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer
                  group hover:bg-accent-purple/5 active:bg-accent-purple/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center 
                      group-hover:bg-accent-purple/20">
                    <Gift className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">Buono Regalo</h3>
                    <p className="text-neutral-600 group-hover:text-neutral-800">Buono regalo da 50€ per il tuo negozio preferito</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-purple">1000</div>
                  <div className="text-sm text-neutral-600 group-hover:text-neutral-800">punti necessari</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Rewards;
