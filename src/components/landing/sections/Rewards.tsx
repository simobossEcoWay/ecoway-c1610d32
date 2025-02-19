
import { Card } from "@/components/ui/card";
import { Battery, Car, Bike, Percent, Gift, Tag } from "lucide-react";
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
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 px-4 snap-x snap-mandatory scroll-smooth hide-scrollbar">
              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200 min-w-[300px] flex-shrink-0 snap-center">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto">
                    <Battery className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Ricarica Completa</h3>
                  <p className="text-neutral-600">Ricarica la batteria della tua macchina fino al 100%</p>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-accent-purple">+50</div>
                    <div className="text-sm text-neutral-600">punti</div>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-sm text-neutral-600">75% completato</div>
                </div>
              </Card>

              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200 min-w-[300px] flex-shrink-0 snap-center">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto">
                    <Car className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Guida Efficiente</h3>
                  <p className="text-neutral-600">Mantieni un consumo medio sotto i 15 kWh/100km per una settimana</p>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-accent-purple">+100</div>
                    <div className="text-sm text-neutral-600">punti</div>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="text-sm text-neutral-600">45% completato</div>
                </div>
              </Card>

              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200 min-w-[300px] flex-shrink-0 snap-center">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto">
                    <Bike className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Mobilità Alternativa</h3>
                  <p className="text-neutral-600">Usa la bici o i mezzi pubblici per 5 giorni consecutivi</p>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-accent-purple">+75</div>
                    <div className="text-sm text-neutral-600">punti</div>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-purple h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="text-sm text-neutral-600">30% completato</div>
                </div>
              </Card>
            </div>
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
