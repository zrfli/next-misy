"use server"

import Link from "next/link";
import { DigitalCard } from "@/components/Layouts/Sheets/DigitalCard";
import { AccordionMenu } from "../AccordionMenu";

export async function DashboardSideBar() {
    return (
        <section id="sidebar" className="fixed left-0 w-64 h-full bg-white transition-transform -translate-x-full sm:translate-x-0">
            <div className="overflow-y-auto py-5 px-3 h-full border-r border-neutral-300 dark:border-neutral-600 dark:bg-black">
                <ul className="space-y-1">
                    <li>
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Hesap</span>
                    </li>
                    <li>
                        <div className="flex items-center gap-3">
                            <div className="relative inline-flex items-center justify-center border w-10 h-10 overflow-hidden bg-neutral-100 dark:bg-black border-neutral-400 dark:border-neutral-300 rounded-full">
                                <span className="font-medium text-neutral-600 dark:text-white">ZSK</span>
                            </div>
                            <div>
                                <div className="text-sm dark:text-white font-medium">Zeynep Serra Karaman</div>
                                <div className="text-xs text-neutral-700 font-medium">23151500000</div>
                            </div>
                        </div>
                    </li>
                    <li className="pt-2">
                        <span className="text-sm font-medium dark:text-neutral-400 text-neutral-500">Genel</span>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>
                            <span className="ml-3 dark:text-white">Ana Sayfa</span>
                        </Link>
                    </li>
                    <li><DigitalCard/></li>
                    <li>
                        <Link href="payments" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z"/></svg>
                            <span className="ml-3 dark:text-white">Harç Bilgileri</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="lessons" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 00-17.92 5.33A32 32 0 0016 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 006.94-3V106.82a15.89 15.89 0 00-5.46-12A143 143 0 00202.24 74zM481.92 53.3A31.33 31.33 0 00464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 00-32.31 20.78 15.93 15.93 0 00-5.45 12v337.13a3.93 3.93 0 006.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0032-32v-288a32 32 0 00-14.12-26.61z"/></svg>
                            <span className="ml-3 dark:text-white">Derslerim</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="settings" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"/></svg>
                            <span className="ml-3 dark:text-white">Kullanıcı İşlemleri</span>
                        </Link>
                    </li>
                    <li><AccordionMenu /></li>
                    <li>
                        <Link href="/" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"/><path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"/></svg>
                            <span className="ml-3 dark:text-white">Başvurular</span>
                        </Link>
                    </li>
                    <li>
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Uzaktan Eğitim Merkezi</span>
                    </li>
                    <li>
                        <Link href="/courses" className="flex items-center p-2 text-sm font-medium text-neutral-900 rounded-lg group hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 512 512"><path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"/></svg>
                            <span className="ml-3 dark:text-white">Kurslarım</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}