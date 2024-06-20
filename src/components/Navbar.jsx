import { bagImg, rogImg, searchImg, gtrImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width ">
        <div>
          <img src={gtrImg} alt="rog" width={200} height={50} />
        </div>

        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((item, index) => (
            <div
              key={index}
              className="px-5 cursor-pointer pt-12 text-black 
              hover:text-bold transition-all
              "
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex pt-5 items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
        <button className="mt-5 bg-red-700 p-2 w-[200px] transition-all rounded-3xl para">
          Build & Price
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
