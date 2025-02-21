import { Link } from "react-router";
import { roles } from "../utils/userRoles";
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
    route: "/pokemon",
  },
  // {
  //   title: "Abilities",
  //   icon: "abilities",
  //   route: "/abilities",
  // },
];

if (roles.includes("can-see-items")) {
  MockSidebarItems.push({
    title: "Items",
    icon: "items",
    route: "/items",
  });
}

const Sidebar: React.FC<SidebarProps> = ({ items = MockSidebarItems }) => (
  <div className="bg-indigo-900 col-span-2 text-white">
    <ul>
      {items.map((item) => (
        <Link to={item.route} key={item.route}>
          <li className="p-4 hover:bg-indigo-800 hover:cursor-pointer">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Sidebar;
