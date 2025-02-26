import { Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./components";
import ItemsPage from "./pages/ItemsPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonPage from "./pages/PokemonPage";
import { roles } from "./utils/userRoles";

interface RouteItem {
  path: string;
  pathName: string;
  element: React.ReactNode;
  visible?: boolean;
}

const routesMapping: RouteItem[] = [
  {
    path: "/",
    pathName: "pokemon-page",
    element: <PokemonPage />,
  },
  {
    path: "/pokemon",
    pathName: "pokemon-page",
    element: <PokemonPage />,
  },
  {
    path: "/pokemon/:pokemonId",
    pathName: "pokemon-detail-page",
    element: <PokemonDetailsPage />,
  },
  {
    path: "/favorites",
    pathName: "favorites-page",
    element: <ItemsPage />,
    visible: Boolean(roles.includes("can-see-items")),
  },
];

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      {routesMapping.map((item) => {
        if (item.visible === false) return null;

        return (
          <Route path={item.path} element={item.element} key={item.pathName} />
        );
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default AppRouter;
