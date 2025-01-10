"use client"

import { AuthFormSkeleton } from "@/components/ui/skeleton";
import { Maintenance } from "@/components/maintenance";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TiLockClosedOutline } from "react-icons/ti";

const authEnabled:boolean = true;

const authMethod = [
    {
        serviceName: 'e-devlet',
        serviceText: 'e-Devlet ile Giriş',
        serviceLogo: '/img/auth/icon/e-devlet-icon.svg',
        serviceActive: true,
        category: 'service'
    },
    {
        serviceName: 'mobile-qr',
        serviceText: 'Mobil (QR) ile Giriş',
        serviceLogo: '/img/auth/icon/mobile-qr-auth-icon.svg',
        serviceActive: true,
        category: 'service'
    }
]

function AuthServiceMethod({ serviceText, serviceLogo }: { serviceText: string, serviceLogo: string }) {
    return (
        <li>
            <button type="button" className="flex items-center justify-center p-3 border border-neutral-800 space-x-2 w-full text-base font-medium text-white rounded-lg bg-black hover:bg-neutral-800 group shadow">
                <Image src={serviceLogo} alt="" width={20} height={20} />
                <span className="whitespace-nowrap">{serviceText || 'Error'}</span>
            </button>
        </li>
    )
}

function LoginWithCredentials() {
    return (<div>credentials</div>);
}

function AuthFormView() {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="flex justify-center items-center w-full h-full min-h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-3xl font-semibold text-neutral-900 text-center">Log in to Nisantasi University</h1>
                    <div className="w-full max-w-80 space-y-6">
                        {!credentials && authEnabled && loading ? (
                            <>
                                <ul className="space-y-2" onClick={() => setLoading(false)}>
                                    {authMethod.filter((method) => method.serviceActive).map((method, index) => (
                                        <AuthServiceMethod key={index} serviceText={method.serviceText} serviceLogo={method.serviceLogo} />
                                    ))}
                                </ul>
                                <span className="block w-full bg-neutral-300 h-[1px]"></span>
                                <ul className="space-y-2" onClick={() => setLoading(true)}>
                                    <li>
                                        <button type="button" onClick={() => setCredentials(true)} className="flex items-center justify-center p-3 border space-x-2 w-full text-base font-medium text-black rounded-lg bg-white hover:bg-neutral-50 group shadow">
                                            <TiLockClosedOutline width={20} height={20} />
                                            <span className="whitespace-nowrap">Kullanıcı Adı ile Giriş</span>
                                        </button>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            !credentials ? (<AuthFormSkeleton />) : ''
                        )}
                        
                        {credentials && (<LoginWithCredentials />)}
                    </div>
                    {loading && authEnabled && (
                    <div className="mt-4" onClick={() => setCredentials(false)}>
                        <span className="inline-flex items-center text-sm font-normal text-blue-500 hover:underline">Continue with Email →</span>
                    </div>
                    )}
                </div>
            </div>
        </div>    
    )    
}

export default function AuthForm() {
    return authEnabled ? <AuthFormView /> : <Maintenance />
}