interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="w-screen h-screen flex flex-col gap-4">{children}</div>
);

export default MainLayout;
