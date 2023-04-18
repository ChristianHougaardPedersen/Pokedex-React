import PokeballImage from "../images/pokeball.svg";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-blue">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <img className="h-8 w-auto" src={PokeballImage} alt="" />
          </div>
          <div className="flex lg:flex-1">
            <NavLink
              to={"/"}
              className={
                "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
              }
            >
              Pokédex
            </NavLink>
          </div>
          <div className="flex lg:flex-1">
            <NavLink
              to={"/about"}
              className={
                "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
              }
            >
              About
            </NavLink>
          </div>

          <div className="flex lg:flex-1">
            <NavLink
              to={"/history"}
              className={
                "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
              }
            >
              History
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
     
    </>
  );
}
