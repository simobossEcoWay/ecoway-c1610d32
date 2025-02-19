import { Card } from "@/components/ui/card";
import { Battery, Car, Bike, Park, Footprints, Calendar } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";

const Rewards = () => {
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
            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Battery className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Ricarica Completa</h3>
                  <p className="text-neutral-600 mb-4">Ricarica la batteria della tua macchina fino al 100%</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">75% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+50 punti</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Guida Efficiente</h3>
                  <p className="text-neutral-600 mb-4">Mantieni un consumo medio sotto i 15 kWh/100km per una settimana</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">45% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+100 punti</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bike className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Mobilità Alternativa</h3>
                  <p className="text-neutral-600 mb-4">Usa la bici o i mezzi pubblici per 5 giorni consecutivi</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">30% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+75 punti</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Mobilità Elettrica</h3>
                  <p className="text-neutral-600 mb-4">Guida una macchina elettrica per 15 giorni di fila</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">20% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+150 punti</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Park className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Amante dei Parchi</h3>
                  <p className="text-neutral-600 mb-4">Frequenta un parco 10 volte in un mese</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">40% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+80 punti</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Footprints className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Camminatore Esperto</h3>
                  <p className="text-neutral-600 mb-4">Cammina tre chilometri in una giornata venti volte in un mese</p>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-600">60% completato</span>
                    <span className="text-sm font-bold text-accent-purple">+120 punti</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Store Discounts Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Sconti nei Negozi</h3>
          <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer
                  group hover:bg-accent-purple/5 active:bg-accent-purple/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center 
                      group-hover:bg-accent-purple/20">
                    <Tag className="w-6 h-6 text-accent-purple" />
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
