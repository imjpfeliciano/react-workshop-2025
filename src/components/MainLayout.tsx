import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => (
  <div className="w-screen h-screen flex flex-col bg-slate-50">
    <Header />
    <div className="flex flex-row flex-grow gap-4">
      <div className="grid grid-cols-12 gap-4 w-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainLayout;
