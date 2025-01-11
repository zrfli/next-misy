"use server"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

export async function DigitalCard() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span id="digitalCardCall" data-modal-target="card-modal" data-modal-toggle="card-modal" className="flex cursor-pointer items-center p-2 text-sm font-medium text-gray-900 rounded-lg group hover:bg-gray-100 dark:hover:bg-neutral-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 512 512"><path d="M368 16H144a64.07 64.07 0 00-64 64v352a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zm-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0129.48 12.51zM192 80a16 16 0 0116-16h96a16 16 0 010 32h-96a16 16 0 01-16-16zm189 363.83a12.05 12.05 0 01-9.31 4.17H236.31a12.05 12.05 0 01-9.31-4.17 13 13 0 01-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 01-2.76 10.92z"/></svg>
          <span className="ml-3 dark:text-white">Digital Öğrenci Kartım</span>    
        </span>
      </SheetTrigger>
      <SheetContent side='top'>
        <SheetHeader>
          <SheetTitle>Dijital Kartım</SheetTitle>
          <SheetDescription>Dijital kart, kimlik bilgilerini dijital ortamda güvenli şekilde saklayan sanal bir karttır.</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-center">
          <div className="h-56 w-96 rounded-xl border p-2 shadow-xl">
            <div className="flex h-full flex-col">
              <div className="flex justify-center">
                <Image src="/logo_text.webp" className="h-full w-80" alt="" width={400} height={400}loading="lazy" decoding="async" />
              </div>
              <div className="flex space-x-5 ml-2">
                <div className="min-w-0">
                    <Image src="/logo_small.png" className="mb-2 w-14" alt="" width={400} height={400}loading="lazy" decoding="async" />
                    <Image src="/qr.png" className="w-14 h-14" width={250} height={250} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-black">
                    <span className="font-bold">ÖĞRENCİ KİMLİK KARTI</span>
                    <span> / Student ID</span>
                  </div>
                  <div className="pt-1">
                    <div>
                        <p className="text-xs font-medium text-black">Adı - Soyadı / Name - Surname</p>
                        <p className="border-b border-black text-xs font-medium text-black">Zeynep Serra Karaman</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-black">Öğrenci No / Student Number</p>
                        <p className="border-b border-black text-xs font-medium text-black">2315150300</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-black">Birim / Administrative Unit</p>
                        <p className="border-b border-black text-xs font-medium text-black">Mühendislik - Mimarlık Fakültesi</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-black">Bölümü / Department</p>
                        <p className="border-b border-black text-xs font-medium text-black">Bilgisayar Mühendisliği</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </SheetContent>
    </Sheet>
  )
}