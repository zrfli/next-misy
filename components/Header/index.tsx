"use server";

import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { Logo } from "@/components/logo";
import { AvatarCard } from "@/components/(dashboard)/avatar";

export default async function DashboardHeader() {

  return (
    <Navbar disableAnimation isBordered isBlurred={false} className="py-3 border-b border-neutral-300" maxWidth="full" height="auto">
        <NavbarContent justify="start">
          <Logo LogoClass="h-auto w-24 md:w-32 dark:invert" />
        </NavbarContent>
        <NavbarContent className="gap-4" justify="end">
          <AvatarCard />
        </NavbarContent>
    </Navbar>
  );
}