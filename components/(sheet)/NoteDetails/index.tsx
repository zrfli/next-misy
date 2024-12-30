"use server"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Lesson {
  code: string;
  courseName: string;
  instructor: string;
}

interface Props { Lesson: Lesson }

export async function NoteDetails({ Lesson } : Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="cursor-pointer text-xs font-semibold text-neutral-600 hover:text-neutral-800">Detaylar</span>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>{Lesson?.code + " - " + Lesson?.courseName}</SheetTitle>
          <SheetDescription>{Lesson?.instructor}</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-center">
          <div className="w-full mt-4 max-w-md rounded-xl border border-neutral-300 shadow-lg bg-white">
            <div className="relative overflow-x-auto">
              <table className="w-full text-xs text-left text-neutral-500 border border-neutral-100">
                <thead className="text-neutral-700 uppercase border-b border-neutral-300 bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3">Harf</th>
                    <th className="px-6 py-3">Baş</th>
                    <th className="px-6 py-3">Bit</th>
                    <th className="px-6 py-3">Kişi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">AA</td>
                    <td className="px-6 py-1">90</td>
                    <td className="px-6 py-1">100</td>
                    <td className="px-6 py-1">2</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-blue-100">
                    <td className="px-6 py-1 font-medium text-neutral-900">BB</td>
                    <td className="px-6 py-1">80</td>
                    <td className="px-6 py-1">89</td>
                    <td className="px-6 py-1">3</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-6 py-1 font-medium text-neutral-900">CC</td>
                    <td className="px-6 py-1">70</td>
                    <td className="px-6 py-1">79</td>
                    <td className="px-6 py-1">5</td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full text-xs text-left text-neutral-500 border border-neutral-100">
                <thead className="text-neutral-700 uppercase bg-neutral-50 border-b border-neutral-300">
                  <tr>
                    <th className="px-3 py-3">Sınav</th>
                    <th className="px-3 py-3">Not</th>
                    <th className="px-3 py-3">Ort</th>
                    <th className="px-3 py-3">İlan Tarihi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="px-3 py-1 font-medium text-neutral-900">Vize (40%)</td>
                    <td className="px-3 py-1">90</td>
                    <td className="px-3 py-1">85</td>
                    <td className="px-3 py-1">01.01.2024</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-3 py-1 font-medium text-neutral-900">Final (60%)</td>
                    <td className="px-3 py-1">70</td>
                    <td className="px-3 py-1">75</td>
                    <td className="px-3 py-1">15.01.2024</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-3 py-1 font-medium text-neutral-900">Bütünleme (100%)</td>
                    <td className="px-3 py-1">50</td>
                    <td className="px-3 py-1">60</td>
                    <td className="px-3 py-1">01.02.2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}