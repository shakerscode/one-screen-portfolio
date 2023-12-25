import { navMenu } from "@/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBlog } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { GrContact } from "react-icons/gr";

function Footer() {
  const { pathname } = useLocation();
  const icons = [
    <FaHome size={16} />,
    <AiOutlineProject size={16} />,
    <MdReviews size={16} />,
    <GrContact size={16} />,
    <FaBlog size={16} />,
  ];
  return (
    <footer className="px-4 flex items-center justify-center fixed bottom-2 left-0 right-0">
      <div className="w-fit bg-secondary py-1 px-4 text-white flex items-center gap-2 rounded-full border-2 border-solid border-white">
        {navMenu.map((menu, i) => (
          <Link to={menu.path} key={i}>
            <button
              className={
                menu.path === pathname
                  ? "hover:bg-lightBlue bg-primary border-2 border-solid border-white text-white p-2 rounded-full hover:text-primary transition-all"
                  : "hover:bg-lightBlue p-2 rounded-full hover:text-primary transition-all"
              }
            >
              {icons[i]}
            </button>
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
