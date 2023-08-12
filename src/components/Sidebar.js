import { MdCategory, MdDashboard, MdInventory } from "../utils/icons";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const classes =
    "flex justify-start px-1 cursor-pointer bg-slate-100 h-10 rounded-full hover:text-blue-500 group my-2";

  return (
    <div className="col-span-2 p-5">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdDashboard className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/")}>
          Dashboard
        </b>
      </NavLink>
      <NavLink
        to="/department"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdCategory className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/department")}>
          Department
        </b>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdInventory className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/products")}>
          Products
        </b>
      </NavLink>
    </div>
  );
}

export default Sidebar;
