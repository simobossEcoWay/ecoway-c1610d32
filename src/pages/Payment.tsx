
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreditCard, Apple, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Payment = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Coming soon",
      description: "Il sistema di pagamento sarà disponibile a breve.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container-padding">
          <div className="max-w-md mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Torna alla home
            </Link>
            
            <Card className="glass-panel p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h1 className="heading-lg">Piano Premium</h1>
                <p className="text-neutral-400 mt-4">€4.99/mese</p>
              </div>

              <div className="space-y-6">
                <button className="w-full flex items-center justify-center gap-3 bg-white text-black px-4 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium">
                  <Apple className="w-5 h-5" />
                  Paga con Apple Pay
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#121212] px-2 text-neutral-400">oppure paga con carta</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-white">
                      Nome sulla carta
                    </label>
                    <Input
                      id="cardName"
                      placeholder="Mario Rossi"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-white">
                      Numero carta
                    </label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 pl-10"
                      />
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="expiry" className="block text-sm font-medium text-white">
                        Scadenza
                      </label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cvc" className="block text-sm font-medium text-white">
                        CVC
                      </label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <button type="submit" className="button-secondary w-full">
                    Paga €4.99
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Payment;
