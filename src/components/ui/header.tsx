import { FaLaptopCode } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-1 bg-secondary m-2 rounded-full">
      <div className="flex text-white items-center justify-center gap-2">
        <FaLaptopCode size={26} />
        <div>
          <h2 className="text-[14px] line-clamp-none">Shaker A.</h2>
          <p className="text-[10px] line-clamp-1">Full Stack Web Developer</p>
        </div>
      </div>
      <div className="px-3 flex items-center gap-3">
        <Link to={"/contact-me"} className="text-sm text-white">
          Hire me
        </Link>
        <div className="flex gap-2">
          <Link
            target="_blank"
            className="bg-white text-[#22c55e] p-1 rounded-md"
            to={"https://www.upwork.com/freelancers/~01e87aabb9fd07c884"}
          >
            <SiUpwork size={14} />
          </Link>
          <Link
            target="_blank"
            className="bg-white text-[#10b981] p-1 rounded-md"
            to={"https://www.fiverr.com/shaker_a"}
          >
            <TbBrandFiverr size={14} />
          </Link>
          <Link
            target="_blank"
            className="bg-white text-[#3b82f6] p-1 rounded-md"
            to={"https://www.linkedin.com/in/shaker-ahamed/"}
          >
            <FaLinkedinIn size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
