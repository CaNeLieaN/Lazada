import Image from "next/image";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-start
            gap-3
            md:gap-5
          "
          >
            <Logo />
            <Search />
            <LuShoppingCart size={20} />
            <Image
              className="hidden md:block cursor-pointer"
              src="/images/promotionfirsttime.jpg"
              height="200"
              width="200"
              alt="Logo"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
