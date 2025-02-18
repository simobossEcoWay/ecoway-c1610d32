
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal, Bike, ChargingPile, Tree, MapPin } from "lucide-react";

const Sections = () => {
  const leaderboardData = [
    { position: 1, name: "Marco R.", points: 1345, city: "Milano" },
    { position: 2, name: "Laura B.", points: 1298, city: "Roma" },
    { position: 3, name: "Andrea M.", points: 1245, city: "Torino" },
    { position: 4, name: "Sofia C.", points: 1156, city: "Firenze" },
    { position: 5, name: "Giuseppe D.", points: 1089, city: "Bologna" },
    { position: 6, name: "Valentina P.", points: 987, city: "Venezia" },
    { position: 7, name: "Alessandro F.", points: 945, city: "Napoli" },
    { position: 8, name: "Chiara M.", points: 878, city: "Palermo" },
    { position: 9, name: "Roberto L.", points: 834, city: "Genova" },
    { position: 10, name: "Elena G.", points: 789, city: "Bari" }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-700" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center font-medium">{position}</span>;
    }
  };

  const milanLocations = [
    { type: 'charging', name: 'Stazione di Ricarica Centrale', location: 'Via Dante' },
    { type: 'charging', name: 'Charging Point Duomo', location: 'Piazza del Duomo' },
    { type: 'charging', name: 'EV Station Navigli', location: 'Naviglio Grande' },
    { type: 'bike', name: 'BikeMi Centro', location: 'Corso Buenos Aires' },
    { type: 'bike', name: 'Rental Bikes Porta Nuova', location: 'Piazza Gae Aulenti' },
    { type: 'bike', name: 'City Bikes Sempione', location: 'Parco Sempione' },
    { type: 'park', name: 'Parco Sempione', location: 'Centro città' },
    { type: 'park', name: 'Giardini Pubblici', location: 'Porta Venezia' },
    { type: 'park', name: 'Parco Biblioteca degli Alberi', location: 'Porta Nuova' }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'charging':
        return <ChargingPile className="w-6 h-6 text-blue-500" />;
      case 'bike':
        return <Bike className="w-6 h-6 text-green-500" />;
      case 'park':
        return <Tree className="w-6 h-6 text-emerald-500" />;
      default:
        return <MapPin className="w-6 h-6 text-gray-500" />;
    }
  };

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
          <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <div 
                  key={user.position}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors
                    ${user.position === 1 ? 'bg-accent-purple/10' : 'hover:bg-neutral-50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
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
                </div>
              ))}
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
            <h2 className="heading-lg mt-6">Esplora Milano</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Scopri stazioni di ricarica, noleggio bici e parchi nella tua zona
            </p>
          </div>
          <Card className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <ChargingPile className="w-5 h-5 text-blue-500" />
                  <span>Stazioni di ricarica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5 text-green-500" />
                  <span>Noleggio bici</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tree className="w-5 h-5 text-emerald-500" />
                  <span>Parchi</span>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {milanLocations.map((location, index) => (
                      <div
                        key={index}
                        className="relative bg-white/80 backdrop-blur-sm rounded-lg p-4 hover:bg-white transition-colors cursor-pointer"
                      >
                        <div className="absolute top-2 right-2">
                          {getLocationIcon(location.type)}
                        </div>
                        <div className="mt-4">
                          <h3 className="font-medium text-sm">{location.name}</h3>
                          <p className="text-xs text-neutral-600 mt-1">{location.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

      {/* Piani Section */}
      <section id="piani" className="py-24 min-h-screen bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              PIANI
            </span>
            <h2 className="heading-lg mt-6">Scegli il Tuo Piano</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Seleziona il piano più adatto alle tue esigenze
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-panel p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Piano Base</h3>
                <p className="text-neutral-600 mb-6">Inizia il tuo viaggio sostenibile</p>
                <div className="text-4xl font-bold mb-6">Gratis</div>
                <ul className="text-left space-y-4 mb-8">
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
                <h3 className="text-2xl font-bold mb-2">Piano Premium</h3>
                <p className="text-neutral-600 mb-6">Massimizza il tuo impatto</p>
                <div className="text-4xl font-bold mb-6">€4.99<span className="text-lg text-neutral-600">/mese</span></div>
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-accent-purple" />
                    Tutto del piano base
                  </li>
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
    </>
  );
};

export default Sections;
