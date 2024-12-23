"use server"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Cloud,
    CreditCard,
    Github,
    LifeBuoy,
    LogOut,
    Settings,
    User,
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
            <AvatarImage src="/misy.jpg" className="object-cover w-full h-full" height={100} width={100} alt="" loading="lazy" decoding="async" />
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
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/*<DropdownMenuTrigger >
        <IoIosArrowDown />
      </DropdownMenuTrigger>*/}
    </DropdownMenu>
  )
}
