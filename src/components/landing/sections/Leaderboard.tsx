
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal, Leaf, Trees, Palmtree, Car, Home, Sprout, Coffee } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [{
    position: 1,
    name: "Marco R.",
    points: 27000,
    city: "Milano"
  }, {
    position: 2,
    name: "Laura B.",
    points: 24567,
    city: "Roma"
  }, {
    position: 3,
    name: "Andrea M.",
    points: 22345,
    city: "Torino"
  }, {
    position: 4,
    name: "Sofia C.",
    points: 19876,
    city: "Firenze"
  }, {
    position: 5,
    name: "Giuseppe D.",
    points: 17654,
    city: "Bologna"
  }, {
    position: 6,
    name: "Valentina P.",
    points: 15432,
    city: "Venezia"
  }, {
    position: 7,
    name: "Alessandro F.",
    points: 13210,
    city: "Napoli"
  }, {
    position: 8,
    name: "Chiara M.",
    points: 11987,
    city: "Palermo"
  }, {
    position: 9,
    name: "Roberto L.",
    points: 10765,
    city: "Genova"
  }, {
    position: 10,
    name: "Elena G.",
    points: 9543,
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
      case 4:
        return <Trees className="w-5 h-5 text-neutral-600" />;
      case 5:
        return <Palmtree className="w-5 h-5 text-neutral-600" />;
      case 6:
        return <Leaf className="w-5 h-5 text-neutral-600" />;
      case 7:
        return <Car className="w-5 h-5 text-neutral-600" />;
      case 8:
        return <Home className="w-5 h-5 text-neutral-600" />;
      case 9:
        return <Sprout className="w-5 h-5 text-neutral-600" />;
      case 10:
        return <Coffee className="w-5 h-5 text-neutral-600" />;
      default:
        return <Leaf className="w-5 h-5 text-neutral-600" />;
    }
  };

  return (
    <section id="classifica" className="py-12 min-h-screen">
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
            {leaderboardData.map(user => (
              <div key={user.position} className={`flex items-center justify-between p-4 rounded-lg transition-colors
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
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Leaderboard;
