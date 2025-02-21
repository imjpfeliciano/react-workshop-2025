import { Header, MainLayout } from "../components";
import Sidebar from "../components/Sidebar";

const ItemsPage = () => (
  <MainLayout>
    <Header />
    <div className="flex flex-row flex-grow gap-4">
      <div className="grid grid-cols-12 gap-4 w-full">
        <Sidebar />
        <div>Items</div>
      </div>
    </div>
  </MainLayout>
);

export default ItemsPage;
