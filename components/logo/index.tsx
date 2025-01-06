"use client";

import Image from 'next/image';
import Link from 'next/link';
import LogoPath from "@/public/logo.png";

interface LogoProps { LogoClass?: string }

export function Logo({ LogoClass }: LogoProps) {
    return (
        <Link href="/" rel="noopener noreferrer">
            <Image priority={true} className={LogoClass} src={LogoPath} height={400} width={400} alt="" />
        </Link>
    );
}