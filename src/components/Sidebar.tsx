interface SidebarItem {
  title: string;
  icon: string;
  route: string;
}

interface SidebarProps {
  items?: SidebarItem[];
}

const MockSidebarItems: SidebarItem[] = [
  {
    title: "Pokemon",
    icon: "pokemon",
    route: "/",
  },
  {
    title: "Abilities",
    icon: "abilities",
    route: "/abilities",
  },
  {
    title: "Items",
    icon: "items",
    route: "/items",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ items = MockSidebarItems }) => (
  <div className="bg-indigo-900 col-span-2 text-white">
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="p-4 hover:bg-indigo-800 hover:cursor-pointer"
        >
          {item.title}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
