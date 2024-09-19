import React from "react";
import {IoMdMenu} from "react-icons/io";
import {Link} from "react-router-dom"; // Import Link from react-router-dom
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Artikel",
    path: "/all-articles",
  },
  {
    id: 4,
    title: "Testimonial",
    path: "/testimonial",
  },
];

const Navbar = () => {
  return (
    <nav className="container shadow-xl border-b border-gray-200 rounded-3xl">
      <div className="p-5 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">SerenityHub</h1>
        </div>

        {/* Menu Section for Desktop */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="mr-4">
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 bg-secondary absolute left-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <div className="border-l-2">
              <Button
                variant="primary"
                className="ml-[40px] bg-black text-white rounded-[100px] w-[120px] p-[20px]"
              >
                Get Help ?
              </Button>
            </div>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <IoMdMenu className="text-3xl" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white p-4">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <ul className="mt-4">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id} className="mb-4">
                    <Link
                      to={menu.path}
                      className="text-lg hover:text-secondary"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <Button
                  variant="primary"
                  className=" bg-black text-white rounded-[100px] w-[120px] p-[20px]"
                >
                  Get Help ?
                </Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
