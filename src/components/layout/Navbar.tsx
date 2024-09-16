import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "/pie-chart", text: "Pie Chart" },
    { id: 3, url: "/donut", text: "Donut" },
  ];

  // Function to handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbarElement = document.getElementById("navbar");

      if (
        isOpenMenu &&
        navbarElement &&
        !navbarElement.contains(event.target as Node)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div className="px-4 md:px-0 py-4 md:py-4 shadow-myShadow z-[999]">
      <div className="container-class">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link to="/">
            <h2 className="font-semibold text-[24px] text-primary uppercase">
              Charts
            </h2>
          </Link>

          {/* Nav items section */}
          <ul className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <Link to={item.url} key={item.id}>
                <li className=" hover:text-[#0095CF] md:text-[17px] active:text-primary transition-all duration-500 p-4 cursor-pointer">
                  <ActiveLink to={item.url}>{item.text}</ActiveLink>
                </li>
              </Link>
            ))}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNavToggle} className="block md:hidden ">
            {isOpenMenu ? <X /> : <Menu />}
          </div>

          {/* Mobile menu */}
          <div
            id="navbar"
            className={`fixed md:hidden top-0 left-0 w-[70%] h-screen bg-white ease-in-out duration-700 z-[999] p-[20px] ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            } shadow-myShadow px-10 py-14`}
          >
            {/* logo and close toggle icon */}
            <div className="mb-[24px]">
              <Link to="/">
                <h2 className="font-semibold text-[24px] text-primary uppercase">
                  Charts
                </h2>
              </Link>
            </div>

            {/* mobile nav items */}
            <nav>
              <ul className="space-y-[3px]">
                {navItems.map((item) => (
                  <Link to={item.url} key={item.id}>
                    <li className=" hover:text-[#0095CF] md:text-[17px] active:text-primary transition-all duration-500 p-4 cursor-pointer">
                      <ActiveLink to={item.url}>{item.text}</ActiveLink>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Navlinks end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <li className="font-medium md:text-[18px] hover:text-[#0095CF] transition-all duration-500">
  <ActiveLink href="/flashsale">Flash Sale</ActiveLink>
</li>; */
}
