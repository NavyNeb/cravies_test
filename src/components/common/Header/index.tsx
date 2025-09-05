import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SoupIcon, UserCircleIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
  const { pathname } = useLocation();
  const isProductPage = pathname.includes('product-details');
  return (
    <header className="px-4 sm:px-10 w-full bg-transparent fixed top-0 z-50 ">
      <nav className="flex items-center justify-between gap-8">
        <Link to="/">
          <img
            src={isProductPage ? "/cravies_logo_white.svg" : "/cravies_logo.svg"}
            alt="Logo"
            className="h-18 w-auto object-center bg-contain"
          />
        </Link>
        <NavLinks />
        <div className="flex items-center gap-3">
          <Link to={"/product-details"} className="hidden lg:block" >
            <Button className="h-12" >SUBSCRIBE NOW</Button>
          </Link>
          <div className="hidden lg:block" >
          <Button className="bg-orange-app" size="icon">
            <UserCircleIcon className="size-7" />
          </Button>
          </div>
          <Button
            className="relative overflow-visible bg-orange-app"
            size="icon"
          >
            <SoupIcon className="size-7" />
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2">
              8
            </Badge>
          </Button>
          <div className="block lg:hidden" >
          <Button className="h-12" >menu</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
