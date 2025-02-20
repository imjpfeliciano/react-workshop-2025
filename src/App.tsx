import { Content, Header, MainLayout } from "./components";
import Sidebar from "./components/Sidebar";

const App = () => (
  <MainLayout>
    <Header label="Primary header" />
    <div className="flex flex-row flex-grow gap-4">
      <div className="grid grid-cols-12 gap-4 w-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  </MainLayout>
);

export default App;
