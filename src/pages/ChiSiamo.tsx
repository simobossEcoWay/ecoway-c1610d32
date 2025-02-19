
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
              Un viaggio attraverso la nostra storia e la nostra missione
            </p>
          </div>

          {/* First Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Chi siamo
              </h2>
              <p className="text-neutral-400">
                EcoWay è un'innovativa piattaforma digitale che incentiva comportamenti sostenibili attraverso un sistema di sfide green. La nostra missione è promuovere uno stile di vita più ecologico e responsabile, trasformando ogni azione quotidiana in un'opportunità per premiare gli utenti e generare un impatto positivo sul pianeta. Grazie alla nostra app, gli utenti possono accumulare punti completando sfide legate alla mobilità sostenibile, al risparmio energetico e ad altre pratiche ecologiche, convertendoli in sconti e vantaggi esclusivi presso ristoranti, negozi e attività commerciali partner.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              {/* Placeholder for first image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 1
              </div>
            </div>
          </div>

          {/* Second Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="glass-panel p-6 rounded-2xl order-2 md:order-1">
              {/* Placeholder for second image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 2
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white">
                Come funziona EcoWay
              </h2>
              <p className="text-neutral-400">
                EcoWay rende semplice e coinvolgente l'adozione di comportamenti eco-friendly. L'app propone agli utenti una serie di sfide quotidiane e settimanali, come utilizzare mezzi di trasporto a basse emissioni, ridurre il consumo di plastica o partecipare ad attività di riforestazione. Una volta completata una sfida, l'utente guadagna punti che possono essere riscattati per ottenere premi e sconti presso un'ampia rete di partner commerciali. Il nostro sistema si basa su un meccanismo di gamification, rendendo la sostenibilità non solo un dovere, ma anche un'esperienza divertente e gratificante.
              </p>
            </div>
          </div>

          {/* Third Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Il nostro impatto
              </h2>
              <p className="text-neutral-400">
                EcoWay non è solo un'app, ma un vero e proprio movimento per il cambiamento. Collaboriamo con aziende, enti pubblici e associazioni per creare un ecosistema virtuoso in cui la sostenibilità diventi un vantaggio per tutti: per gli utenti, che ottengono premi; per le aziende, che attraggono nuovi clienti sensibili all'ambiente; e per il pianeta, che beneficia di una riduzione delle emissioni e di un maggiore impegno collettivo per la sua tutela. Grazie a un sistema di monitoraggio dell'impatto ambientale, possiamo misurare i benefici concreti generati dalla nostra community e incentivare ulteriormente l'adozione di pratiche sostenibili.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              {/* Placeholder for third image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 3
              </div>
            </div>
          </div>

          {/* Fourth Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="glass-panel p-6 rounded-2xl order-2 md:order-1">
              {/* Placeholder for fourth image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 4
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white">
                Visione e sviluppo futuro
              </h2>
              <p className="text-neutral-400">
                Il nostro obiettivo è far crescere EcoWay fino a renderla un punto di riferimento internazionale per la sostenibilità digitale. Prevediamo di ampliare le sfide disponibili, integrare nuove tecnologie come la blockchain per la tracciabilità delle azioni green e sviluppare partnership con istituzioni locali e globali. Crediamo che ogni piccolo gesto possa fare la differenza e vogliamo offrire a tutti la possibilità di contribuire attivamente alla salvaguardia del pianeta, ricevendo al tempo stesso benefici tangibili.
              </p>
            </div>
          </div>

          {/* Fifth Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Perché scegliere EcoWay
              </h2>
              <p className="text-neutral-400">
                EcoWay rappresenta un modo innovativo e accessibile per incentivare comportamenti sostenibili, con un modello win-win che premia utenti e aziende, mentre genera un impatto positivo per l'ambiente. Crediamo che il futuro della sostenibilità passi attraverso la tecnologia, la gamification e la collaborazione tra individui e imprese. Unisciti a noi e trasforma le tue azioni quotidiane in un'opportunità per cambiare il mondo, un punto alla volta.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              {/* Placeholder for fifth image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 5
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
