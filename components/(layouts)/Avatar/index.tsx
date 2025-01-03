"use server"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    CreditCard,
    LogOut,
    Settings,
  } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export async function AvatarCard() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="border border-neutral-400 dark:border-neutral-300 cursor-pointer">
            <AvatarFallback>ZSK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2" align="end">
        <DropdownMenuGroup className="flex flex-col p-2 gap-1">
            <span className="font-medium text-sm">Zeynep Serra Karaman</span>
            <span className="text-xs text-neutral-500">serrakaraman@nisantasi.edu.tr</span>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Harç Bilgileri</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Kullanıcı İşlemleri</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Çıkış yap</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/*<DropdownMenuTrigger >
        <IoIosArrowDown />
      </DropdownMenuTrigger>*/}
    </DropdownMenu>
  )
}
