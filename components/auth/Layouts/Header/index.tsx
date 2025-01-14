"use client";

import { Navbar, NavbarContent, NavbarMenuItem } from "@nextui-org/react";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function AuthHeader() {
  const menuItems = [
    {
      name: 'İletişim',
      link: '/'
    },
    {
      name: 'Yardım',
      link: '/'
    }
  ];

  return (
    <Navbar disableAnimation={true} isBlurred={false} position="static" className="p-2" maxWidth="full">
      <NavbarContent justify="start">
        <Logo LogoClass="h-auto w-28 dark:invert" />
      </NavbarContent>

      <NavbarContent justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.link && (<Link className="text-sm" href={item.link}>{item.name}</Link>)}
          </NavbarMenuItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}