import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "#home", href: "#home" },
  { name: "#projects", href: "#projects" },
  { name: "#about", href: "#about-me" },
  { name: "#contacts", href: "#contacts" },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="absolute w-full top-0 sm:right-[80px]  z-50 bg-transparent"
    >
      {({ open }) => (
        <>
          {/* Solid overlay */}
          {open && <div className="fixed inset-0 bg-[#1e1e2e]/95 z-40"></div>}

          <div className="flex h-16 items-center justify-end relative z-50 w-full px-4 sm:px-0">
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-2 text-accent">
                {open ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </DisclosureButton>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex space-x-7">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-grey-300 font-second font-light hover:text-accent transition-colors duration-300"
                >
                  <span className="text-accent">#</span>
                  {item.name.replace("#", "")}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu panel */}
          <DisclosurePanel className="sm:hidden mt-4 flex flex-col items-center gap-4 z-50 relative">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="text-grey-300 text-lg hover:text-accent transition"
              >
                <span className="text-accent">#</span>
                {item.name.replace("#", "")}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
