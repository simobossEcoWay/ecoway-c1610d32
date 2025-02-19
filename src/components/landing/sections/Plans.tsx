
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Medal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  return (
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
              <button onClick={() => navigate('/accedi')} className="button-primary w-full">
                Inizia Ora
              </button>
            </div>
          </Card>
          <Card className="glass-panel p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">Piano Premium</h3>
              <p className="text-neutral-400 mb-6">Massimizza il tuo impatto</p>
              <div className="text-4xl font-bold mb-6 text-white">€2.99<span className="text-lg text-neutral-400">/mese</span></div>
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
              <button onClick={() => navigate('/payment')} className="button-primary w-full">
                Abbonati Ora
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Plans;
