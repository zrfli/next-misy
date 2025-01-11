import Image from "next/image";
import { QRCodeCanvas } from 'qrcode.react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ServiceProps {
  serviceLogo?: string
  serviceText?: string
  serviceDescription?: string
}

const QRCodeWithLogo = () => {
  return (
    <div className="relative" style={{ width: 150, height: 150 }}>
      <QRCodeCanvas value="bb22a30b45417313f7630dde835412d2f9e63286c2fc0e86257d6012183f1f88" size={150} bgColor="#ffffff" fgColor="#000000" />
    </div>
  );
};

export default function ServiceAuth({ serviceLogo, serviceText, serviceDescription }: ServiceProps ) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <li>
          <button type="button" className="flex items-center justify-center p-3 border border-neutral-800 space-x-2 w-full text-base font-medium text-white rounded-lg bg-black hover:bg-neutral-800 group shadow">
            {serviceLogo && (<Image src={serviceLogo} alt="" width={20} height={20} />)}
            <span className="whitespace-nowrap">{serviceText || "Error"}</span>
          </button>
        </li>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>{serviceText || ''}</SheetTitle>
          {serviceDescription && (<SheetDescription>{serviceDescription}</SheetDescription>)}
        </SheetHeader>
        <div className="flex items-center justify-center">
          <div className="w-auto mt-4 max-w-md rounded-xl border border-neutral-300 shadow-lg bg-white">
              <QRCodeWithLogo />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}