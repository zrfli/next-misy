"use server"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

const data = [
  {
    id: "0",
    name: "Dönem İşlemleri",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 512 512"><path d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z"/><path d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z"/></svg>
    ),
    sub: [
      {
        id: "0",
        link: 'periods',
        name: 'Dönem Bilgileri',
      },
      {
        id: "1",
        link: 'curriculum',
        name: 'Müfredat Listesi',
      },
      {
        id: "2",
        link: 'lesson-selection',
        name: 'Ders Alma',
      }
    ]
  },
  {
    id: "1",
    name: "Sınav İşlemleri",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44" d="M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z"/></svg>
    ),
    sub: [
      {
        id: "0",
        link: 'notes',
        name: 'Sınav Sonuçları',
      }
    ]
  }
];

export async function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="flex items-center p-2 w-full text-sm font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:hover:bg-neutral-800">
            <span className="mr-3">{item.icon}</span>
            <span className="flex-1 text-left whitespace-nowrap dark:text-white">
              {item.name || 'Hata'}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="py-2 space-y-2">
              {item.sub.map((sub) => (
                <li key={sub.id}>
                  <Link href={sub?.link} className="flex items-center p-2 pl-11 w-full text-xs font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:hover:bg-neutral-800 dark:text-white">- {sub?.name || 'Hata'}</Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}