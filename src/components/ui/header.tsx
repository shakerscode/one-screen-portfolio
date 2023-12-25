import {
  FaLaptopCode,
  FaAngleDoubleDown,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiCloudArrowDown } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center px-4 py-1 bg-secondary m-2 rounded-full">
      <div className="flex text-white items-center justify-center gap-2">
        <FaLaptopCode size={26} />
        <div>
          <h2 className="text-[14px] line-clamp-none">Shaker A.</h2>
          <p className="text-[10px] line-clamp-1">Full Stack Web Developer</p>
        </div>
      </div>
      <div className="px-3 flex items-center gap-2 md:gap-3 relative">
        <button
          onClick={() => setShow(!show)}
          className="block md:hidden text-white rounded-full border-[1px] border-solid border-white p-1"
        >
          {show ? <IoClose /> : <FaAngleDoubleDown size={14} />}
        </button>
        {show && (
          <div className="bg-white absolute top-9 right-8 rounded-md md:hidden z-50 w-44 p-2 shadow-xl">
            <ul className="text-sm flex flex-col">
              <Link
                to={"/contact-me"}
                className="hover:bg-gray400 px-2 py-1 rounded-md"
              >
                Hire me
              </Link>
              <Link
                target="_blank"
                to={"https://www.upwork.com/freelancers/~01e87aabb9fd07c884"}
                className="hover:bg-gray400 px-2 py-1 rounded-md"
              >
                Upwork
              </Link>
              <Link
                target="_blank"
                to={"https://www.fiverr.com/shaker_a"}
                className="hover:bg-gray400 px-2 py-1 rounded-md"
              >
                Fiverr
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/shaker-ahamed/"}
                className="hover:bg-gray400 px-2 py-1 rounded-md"
              >
                LinkedIn
              </Link>
            </ul>
          </div>
        )}
        <Link
          to={"/contact-me"}
          className="text-sm items-center gap-2 text-white hidden md:flex"
        >
          Hire me{" "}
          <p>
            <FaLongArrowAltRight size={16} />
          </p>
        </Link>
        <div className="hidden md:flex gap-2">
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
        <button className="text-xs flex items-center gap-2 text-white border-[1px] border-solid rounded-full px-3 py-1">
          Resume <HiCloudArrowDown size={16} />
        </button>
      </div>
    </header>
  );
}

export default Header;
