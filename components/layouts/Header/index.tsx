"use server";

import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Logo } from "@/components/Logo";
import { AvatarCard } from "@/components/layouts/Avatar";
import Link from "next/link";

export default async function DashboardHeader() {
  const menuItems = [
    {
      name: 'Anasayfa',
      link: '/'
    },
    {
      name: 'Harç Bilgileri',
      link: 'payments'
    },
    {
      name: 'Derslerim',
      link: 'lessons'
    },
    {
      name: 'Kullanıcı İşlemleri',
      link: 'settings'
    },
    {
      name: 'Sınav Sonuçları',
      link: 'notes'
    }
  ];

  return (
    <Navbar disableAnimation={true} isBordered={true} isBlurred={true} className="lg:py-2 border-b border-neutral-300" maxWidth="full">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="center">
        <Logo LogoClass="h-auto w-24 md:w-32 dark:invert" />
      </NavbarContent>

      <NavbarContent justify="end">
        <AvatarCard />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.link && (<Link className="w-full" href={item.link}>{item.name}</Link>)}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}