
import { Card } from "@/components/ui/card";
import { Battery, Car, Bike, TreePine, Footprints, Calendar, ShoppingBag, Percent, Gift, ChevronDown, ChevronUp, Info } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import { useState } from "react";

const Rewards = () => {
  const [showAllChallenges, setShowAllChallenges] = useState(false);
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);

  const handlePlusClick = () => {
    const pianiSection = document.getElementById('piani');
    if (pianiSection) {
      pianiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const challenges = [
    {
      icon: Battery,
      title: "Ricarica Completa",
      description: "Ricarica la batteria della tua macchina fino al 100%",
      details: [
        "Effettua una ricarica completa della tua auto elettrica",
        "Assicurati che la batteria raggiunga il 100%",
        "La sfida viene completata una volta raggiunto il 100%",
        "Puoi monitorare lo stato di ricarica dall'app"
      ],
      progress: 0,
      points: 50,
      isPlusOnly: false
    },
    {
      icon: Car,
      title: "Guida Efficiente",
      description: "Mantieni un consumo medio sotto i 15 kWh/100km per una settimana",
      details: [
        "Monitora il tuo consumo energetico durante la guida",
        "Mantieni una media inferiore a 15 kWh/100km",
        "Il periodo di monitoraggio è di 7 giorni consecutivi",
        "Usa uno stile di guida efficiente e pianifica i percorsi"
      ],
      progress: 0,
      points: 100,
      isPlusOnly: false
    },
    {
      icon: Bike,
      title: "Mobilità Alternativa",
      description: "Usa la bici o i mezzi pubblici per 5 giorni consecutivi",
      details: [],
      progress: 0,
      points: 75,
      isPlusOnly: true
    },
    {
      icon: Calendar,
      title: "Mobilità Elettrica",
      description: "Guida una macchina elettrica per 15 giorni di fila",
      details: [
        "Utilizza esclusivamente un veicolo elettrico",
        "Il conteggio si azzera se viene utilizzato un veicolo tradizionale",
        "Periodo di monitoraggio: 15 giorni consecutivi",
        "Registra ogni viaggio nell'app"
      ],
      progress: 0,
      points: 150,
      isPlusOnly: false
    },
    {
      icon: TreePine,
      title: "Amante dei Parchi",
      description: "Frequenta un parco 10 volte in un mese",
      details: [
        "Visita qualsiasi parco pubblico della tua città",
        "Registra la tua presenza tramite l'app",
        "Le visite devono essere in giorni diversi",
        "Hai 30 giorni per completare la sfida"
      ],
      progress: 0,
      points: 80,
      isPlusOnly: false
    },
    {
      icon: Footprints,
      title: "Camminatore Esperto",
      description: "Cammina tre chilometri in una giornata venti volte in un mese",
      details: [],
      progress: 0,
      points: 120,
      isPlusOnly: true
    }
  ];

  const visibleChallenges = showAllChallenges ? challenges : challenges.slice(0, 3);

  const handleChallengeClick = (index: number, isPlusOnly: boolean) => {
    if (isPlusOnly) {
      handlePlusClick();
    } else {
      setExpandedChallenge(expandedChallenge === index ? null : index);
    }
  };

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
        <div className="mb-16" id="sfide">
          <h3 className="text-2xl font-bold text-center mb-8">Sfide Disponibili</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {visibleChallenges.map((challenge, index) => (
              <Card 
                key={index} 
                className={`glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
                onClick={() => handleChallengeClick(index, challenge.isPlusOnly)}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                      {challenge.isPlusOnly && (
                        <span className="bg-[#9b87f5]/10 text-[#9b87f5] px-2 py-0.5 rounded-full text-xs font-medium">
                          Plus
                        </span>
                      )}
                    </div>
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

                    {/* Expanded Details */}
                    {expandedChallenge === index && !challenge.isPlusOnly && challenge.details.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-neutral-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Info className="w-5 h-5 text-accent-purple" />
                          <h4 className="font-semibold text-lg">Dettagli della sfida</h4>
                        </div>
                        <ul className="space-y-2">
                          {challenge.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-neutral-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
        <div id="riscatta">
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
