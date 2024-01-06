import { Redressed } from "next/font/google";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const redressed = Redressed({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  // {
  //   name: "About",
  //   href: "/",
  // },
];

export default function Navigation() {
  return (
    <nav
      className={
        redressed.className +
        " dark:bg-brown-950 w-full h-16 sm:h-20 px-4 flex items-center justify-between"
      }
    >
      {/* Title */}
      <h1 className={" text-3xl sm:text-4xl md:text-5xl font-normal"}>
        Historia Haven
      </h1>

      {/* Links */}
      <ul className="hidden sm:flex">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="px-2 md:px-6 text-2xl hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* TODO: Theme Switches */}
      <div className="hidden sm:flex w-10"></div>

      {/* Mobile Drawer */}
      <div className="flex sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="p-0">
              <HamburgerMenuIcon className="w-10" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <ul className={redressed.className + " w-full py-6"}>
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex justify-center py-4 w-full text-2xl"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
