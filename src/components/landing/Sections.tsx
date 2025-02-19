
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal, User, Battery, Car, Bike, Percent, Gift, Tag } from "lucide-react";
import CityMap from "@/components/map/CityMap";

const Sections = () => {
  const leaderboardData = [{
    position: 1,
    name: "Marco R.",
    points: 1345,
    city: "Milano"
  }, {
    position: 2,
    name: "Laura B.",
    points: 1298,
    city: "Roma"
  }, {
    position: 3,
    name: "Andrea M.",
    points: 1245,
    city: "Torino"
  }, {
    position: 4,
    name: "Sofia C.",
    points: 1156,
    city: "Firenze"
  }, {
    position: 5,
    name: "Giuseppe D.",
    points: 1089,
    city: "Bologna"
  }, {
    position: 6,
    name: "Valentina P.",
    points: 987,
    city: "Venezia"
  }, {
    position: 7,
    name: "Alessandro F.",
    points: 945,
    city: "Napoli"
  }, {
    position: 8,
    name: "Chiara M.",
    points: 878,
    city: "Palermo"
  }, {
    position: 9,
    name: "Roberto L.",
    points: 834,
    city: "Genova"
  }, {
    position: 10,
    name: "Elena G.",
    points: 789,
    city: "Bari"
  }];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-700" />;
      default:
        return <User className="w-5 h-5 text-neutral-600" />;
    }
  };

  return <>
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
          <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              {leaderboardData.map(user => <div key={user.position} className={`flex items-center justify-between p-4 rounded-lg transition-colors
                    ${user.position === 1 ? 'bg-accent-purple/10' : 'hover:bg-neutral-50'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center
                      ${user.position <= 3 ? 'bg-gradient-to-br from-accent-purple/20 to-accent-purple/10' : 'bg-neutral-100'}`}>
                      {getPositionIcon(user.position)}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{user.name}</h3>
                      <p className="text-sm text-neutral-600">{user.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{user.points}</span>
                    <span className="text-sm text-neutral-600">punti</span>
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
      </section>

      {/* Mappa Section */}
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

          {/* Challenges Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Sfide Disponibili</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200">
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
                </div>
              </Card>

              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200">
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
                </div>
              </Card>

              <Card className="glass-panel p-8 rounded-2xl hover:scale-105 transition-transform duration-200">
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
                </div>
              </Card>
            </div>
          </div>

          {/* Store Discounts Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Sconti nei Negozi</h3>
            <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                      <Tag className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sconto Colombo</h3>
                      <p className="text-neutral-600">10% di sconto su tutti i prodotti da Colombo</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-purple">500</div>
                    <div className="text-sm text-neutral-600">punti necessari</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                      <Percent className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sconto Lanzarotti</h3>
                      <p className="text-neutral-600">20% di sconto da Lanzarotti</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-purple">750</div>
                    <div className="text-sm text-neutral-600">punti necessari</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Buono Regalo</h3>
                      <p className="text-neutral-600">Buono regalo da 50€ per il tuo negozio preferito</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-purple">1000</div>
                    <div className="text-sm text-neutral-600">punti necessari</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Piani Section */}
      <section id="piani" className="py-24 min-h-screen bg-[#121212]">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              PIANI
            </span>
            <h2 className="heading-lg mt-6 text-slate-50">Scegli il Tuo Piano</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
              Seleziona il piano più adatto alle tue esigenze
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-panel p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Piano Base</h3>
                <p className="text-neutral-400 mb-6">Inizia il tuo viaggio sostenibile</p>
                <div className="text-4xl font-bold mb-6 text-white">Gratis</div>
                <ul className="text-left space-y-4 mb-8 text-neutral-200">
                  <li className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-accent-purple" />
                    Accesso alla classifica
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent-purple" />
                    Sfide base
                  </li>
                </ul>
                <button className="button-primary w-full">Inizia Ora</button>
              </div>
            </Card>
            <Card className="glass-panel p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Piano Premium</h3>
                <p className="text-neutral-400 mb-6">Massimizza il tuo impatto</p>
                <div className="text-4xl font-bold mb-6 text-white">€4.99<span className="text-lg text-neutral-400">/mese</span></div>
                <ul className="text-left space-y-4 mb-8 text-neutral-200">
                  <li className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent-purple" />
                    Sfide premium
                  </li>
                  <li className="flex items-center gap-2">
                    <Medal className="w-5 h-5 text-accent-purple" />
                    Ricompense esclusive
                  </li>
                </ul>
                <button className="button-primary w-full">Abbonati Ora</button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>;
};

export default Sections;
