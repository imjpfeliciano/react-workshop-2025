import { Header, MainLayout } from "../components";
import PokemonDetailsCard from "../components/PokemonDetailsCard/PokemonDetailsCard";
import Sidebar from "../components/Sidebar";

const PokemonDetailsPage = () => {
  return (
    <MainLayout>
      <Header />
      <div className="flex flex-row flex-grow gap-4">
        <div className="grid grid-cols-12 gap-4 w-full">
          <Sidebar />
          <PokemonDetailsCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default PokemonDetailsPage;
