
import { Link } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Coming soon",
      description: "La funzionalità di registrazione sarà disponibile a breve.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container-padding">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="heading-lg">Registrati</h1>
              <p className="text-neutral-400 mt-4">
                Crea un account per iniziare il tuo viaggio sostenibile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    Nome
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">
                    Cognome
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Conferma Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-white/10 bg-white/5"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-neutral-400">
                  Accetto i{" "}
                  <Link to="#" className="text-accent-purple hover:text-accent-purple/90">
                    termini e condizioni
                  </Link>
                </label>
              </div>

              <button type="submit" className="button-secondary w-full">
                Registrati
              </button>

              <p className="text-center text-sm text-neutral-400">
                Hai già un account?{" "}
                <Link to="/accedi" className="text-accent-purple hover:text-accent-purple/90">
                  Accedi
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
