interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="bg-blue-500 h-screen w-screen">{children}</div>
);

export default MainLayout;
