
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-[#5a8f67]/20 text-[#5a8f67] px-4 py-1.5 rounded-full text-sm font-medium">
              LA NOSTRA STORIA
            </span>
            <h1 className="heading-lg mt-6">Chi Siamo</h1>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
              Scopri la squadra dietro EcoWay e la nostra missione per un futuro più sostenibile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">La Nostra Missione</h2>
              <p className="text-neutral-400">
                In EcoWay, crediamo che ogni piccolo gesto conti nel creare un futuro più sostenibile.
                La nostra missione è rendere la sostenibilità accessibile e gratificante per tutti,
                trasformando le azioni quotidiane in impatti positivi per il nostro pianeta.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <img 
                src="/placeholder.svg"
                alt="La nostra missione"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-white">I Nostri Valori</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 text-white">Sostenibilità</span>
                  <p className="text-neutral-400">Promuoviamo scelte eco-sostenibili in ogni aspetto della vita quotidiana.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 text-white">Innovazione</span>
                  <p className="text-neutral-400">Utilizziamo la tecnologia per rendere la sostenibilità accessibile a tutti.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 text-white">Comunità</span>
                  <p className="text-neutral-400">Creiamo una rete di persone impegnate per un futuro migliore.</p>
                </li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-2xl order-1 md:order-2 flex items-center justify-center">
              <img 
                src="/lovable-uploads/8171377e-e3b3-49b9-bf17-ded32afcdc3e.png"
                alt="I nostri valori - Logo EcoWay"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
