
import Leaderboard from "./sections/Leaderboard";
import MapSection from "./sections/MapSection";
import Rewards from "./sections/Rewards";
import Plans from "./sections/Plans";

const Sections = () => {
  return <>
    <Rewards /> {/* Missioni (include sia Sfide che Ricompense) */}
    <Leaderboard /> {/* Classifica */}
    <MapSection /> {/* Mappa */}
    <Plans />
  </>;
};

export default Sections;
