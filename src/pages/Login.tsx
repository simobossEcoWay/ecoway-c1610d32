
import { Link } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Coming soon",
      description: "La funzionalità di login sarà disponibile a breve.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container-padding">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="heading-lg">Accedi</h1>
              <p className="text-neutral-400 mt-4">
                Accedi al tuo account per iniziare a guadagnare punti
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/10 bg-white/5"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-neutral-400">
                    Ricordami
                  </label>
                </div>

                <Link to="#" className="text-sm text-accent-purple hover:text-accent-purple/90">
                  Password dimenticata?
                </Link>
              </div>

              <button type="submit" className="button-secondary w-full">
                Accedi
              </button>

              <p className="text-center text-sm text-neutral-400">
                Non hai un account?{" "}
                <Link to="/registrati" className="text-accent-purple hover:text-accent-purple/90">
                  Registrati
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

export default Login;
