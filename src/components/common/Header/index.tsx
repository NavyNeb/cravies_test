import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import { SoupIcon, UserCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="px-4 sm:px-10 w-full bg-transparent fixed top-0 z-50 ">
      <nav className="flex items-center justify-between gap-8">
        <Link to="/">
          <img
            src="/cravies_logo.svg"
            alt="Logo"
            className="h-18 w-auto object-center bg-contain"
          />
        </Link>
        <NavLinks />
        <div className="flex items-center gap-3">
          <Button className="h-12" >SUBSCRIBE NOW</Button>
          <Button className="bg-orange-app" size="icon">
            <UserCircleIcon className="size-7" />
          </Button>
          <Button
            className="relative overflow-visible bg-orange-app"
            size="icon"
          >
            <SoupIcon className="size-7" />
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2">
              8
            </Badge>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
