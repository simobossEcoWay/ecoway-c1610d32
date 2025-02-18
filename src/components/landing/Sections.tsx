import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal } from "lucide-react";
import Map from "./Map";

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
            <h2 className="heading-lg mt-6">Esplora la Tua Città</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Scopri punti di interesse e percorsi sostenibili nella tua zona
            </p>
          </div>
          <Card className="glass-panel p-8 rounded-2xl">
            <Map />
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
