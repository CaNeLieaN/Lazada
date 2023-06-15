import Image from "next/image";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-slate-50 z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex items-center justify-center gap-5">
            <Logo />
            <div className="hidden gap-5 md:flex md:items-center">
              <Search />
              <LuShoppingCart className="cursor-pointer" size={40} />
            </div>
            <div className="md:hidden">
              <Search />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/promotionfirsttime.jpg"
                height={200}
                width={200}
                alt="Logo"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
