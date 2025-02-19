
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Check if the user is on iOS or Android
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      // Replace with your actual App Store URL when available
      window.location.href = "https://apps.apple.com/app/YOUR_APP_ID";
    } else if (isAndroid) {
      // Replace with your actual Play Store URL when available
      window.location.href = "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
    } else {
      // If on desktop or unsupported device, show a toast message
      toast({
        title: "Download EcoWay",
        description: "Visita l'App Store o il Play Store dal tuo dispositivo mobile per scaricare EcoWay.",
        duration: 5000,
      });
    }
  };

  return <header className="container-padding py-12">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 className="heading-xl mb-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          Migliora il mondo, un livello alla volta
        </motion.h1>
        <motion.p className="text-xl text-neutral-600 mb-8" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          Monitora il tuo impatto ambientale, riduci l'inquinamento e contribuisci a un futuro più verde
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          <button 
            className="button-primary flex items-center gap-2"
            onClick={handleDownload}
          >
            Scarica
            <Download size={20} />
          </button>
        </motion.div>
      </div>
    </header>;
};
export default Hero;
