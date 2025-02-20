interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="w-screen h-screen flex flex-col bg-slate-50">{children}</div>
);

export default MainLayout;
