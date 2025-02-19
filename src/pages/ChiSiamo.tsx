
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
                [Titolo Paragrafo 1]
              </h2>
              <p className="text-neutral-400">
                [Il testo del primo paragrafo andrà qui]
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
                [Titolo Paragrafo 2]
              </h2>
              <p className="text-neutral-400">
                [Il testo del secondo paragrafo andrà qui]
              </p>
            </div>
          </div>

          {/* Third Paragraph Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                [Titolo Paragrafo 3]
              </h2>
              <p className="text-neutral-400">
                [Il testo del terzo paragrafo andrà qui]
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-panel p-6 rounded-2xl order-2 md:order-1">
              {/* Placeholder for fourth image */}
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400">
                Immagine 4
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white">
                [Titolo Paragrafo 4]
              </h2>
              <p className="text-neutral-400">
                [Il testo del quarto paragrafo andrà qui]
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
