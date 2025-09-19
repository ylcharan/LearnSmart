"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Voice-Agents", href: "/companions" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href
              ? "text-black font-semibold"
              : "text-gray-600 hover:text-black",
            "text-lg"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
