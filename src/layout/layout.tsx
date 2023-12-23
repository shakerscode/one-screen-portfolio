import { navMenu } from "@/constants/constants";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaLaptopCode, FaBlog } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { GrContact } from "react-icons/gr";

function Layout() {
  const { pathname } = useLocation();
  const icons = [
    <FaHome size={20} />,
    <AiOutlineProject size={20} />,
    <MdReviews size={20} />,
    <GrContact size={20} />,
    <FaBlog size={20} />,
  ];
  return (
    <div className="bg-primary w-full h-[100vh] overflow-hidden overflow-x-hidden relative">
      <div className="bg-white w-[100%] mx-auto max-w-[1380px] m-4 h-[95vh] rounded-3xl  overflow-hidden overflow-x-hidden">
        <header className="flex justify-between items-center px-4 py-1 bg-secondary m-2 rounded-full">
          <div className="flex text-white items-center justify-center gap-2">
            <FaLaptopCode size={26} />
            <div>
              <h2 className="text-[14px] line-clamp-none">Shaker A.</h2>
              <p className="text-[10px] line-clamp-1">
                Full Stack Web Developer
              </p>
            </div>
          </div>
          <div className="px-3 flex gap-3">
            {navMenu.map((nav, i) => (
              <Link to={nav.path} key={i} className="text-white text-[13px]">
                {nav.name}
              </Link>
            ))}
          </div>
        </header>
        <main className="px-4">
          <Outlet />
        </main>
        <footer className="px-4 flex items-center justify-center absolute bottom-2 left-0 right-0">
          <div className="w-fit bg-primary py-2 px-4 text-white flex gap-2 rounded-full border-2 border-solid border-white">
            {navMenu.map((menu, i) => (
              <Link to={menu.path} key={i}>
                <button
                  className={
                    menu.path === pathname
                      ? "hover:bg-lightBlue bg-secondary border-2 border-solid border-white text-white p-2 rounded-full hover:text-primary transition-all"
                      : "hover:bg-lightBlue p-2 rounded-full hover:text-primary transition-all"
                  }
                >
                  {icons[i]}
                </button>
              </Link>
            ))} 
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
