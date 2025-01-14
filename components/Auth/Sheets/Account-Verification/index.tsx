import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaUserShield } from "react-icons/fa6";

export function AccountVerification() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <li>
            <button type="button" className="flex items-center justify-center p-3 border space-x-2 w-full text-base font-medium text-black rounded-lg bg-white hover:bg-neutral-50 group shadow">
                <FaUserShield width={20} height={20} />
                <span className="whitespace-nowrap">Hesap Aktivasyon</span>
            </button>
        </li>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Hesap Aktivasyonu</SheetTitle>
          <SheetDescription>Hesap aktivasyonu, kullanıcıların hizmetlere erişimini sağlar.</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-center">
          <div className="w-auto mt-4 max-w-md rounded-xl border border-neutral-300 shadow-lg bg-white">
            account verification
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}