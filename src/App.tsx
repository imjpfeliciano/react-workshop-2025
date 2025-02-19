import { Header, MainLayout } from "./components";

const App = () => (
  <MainLayout>
    <Header label="Primary header" />

    <Header variant="secondary" />

    <Header />

    <Header variant="secondary" />
  </MainLayout>
);

export default App;
