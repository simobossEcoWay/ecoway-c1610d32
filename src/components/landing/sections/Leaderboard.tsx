
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal, UserRound, UserCheck, UserPlus, UserMinus } from "lucide-react";

const Leaderboard = () => {
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
      case 4:
      case 5:
        return <UserRound className="w-5 h-5 text-neutral-600" />;
      case 6:
      case 7:
        return <UserCheck className="w-5 h-5 text-neutral-600" />;
      case 8:
      case 9:
        return <UserPlus className="w-5 h-5 text-neutral-600" />;
      case 10:
        return <UserMinus className="w-5 h-5 text-neutral-600" />;
      default:
        return <UserRound className="w-5 h-5 text-neutral-600" />;
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
