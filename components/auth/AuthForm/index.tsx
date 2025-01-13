"use client"

import { AuthFormSkeleton } from "@/components/ui/skeleton";
import { Maintenance } from "@/components/maintenance";
import { useState, useEffect } from "react";
import { FaUserLock } from "react-icons/fa6";
import { ServiceAuth } from "../Sheets/Service-Auth";
import { AccountVerification } from "../Sheets/Account-Verification";

const authEnabled:boolean = true;

const authMethod = [
    {
        serviceName: 'e-devlet',
        serviceText: 'e-Devlet ile Giriş',
        serviceLogo: '/img/auth/icon/e-devlet-icon.svg',
        serviceActive: true,
        category: 'service',
        serviceDescription: 'e-Devlet hesabınızla hızlı ve güvenli giriş yapabilirsiniz.'
    },
    {
        serviceName: 'mobile-qr',
        serviceText: 'Mobil (QR) ile Giriş',
        serviceLogo: '/img/auth/icon/mobile-qr-auth-icon.svg',
        serviceActive: true,
        category: 'service',
        serviceDescription: 'QR kodu ile mobil cihazlardan kolayca giriş yapın.'
    }
]

function LoginWithCredentials() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="space-y-4">
            <div>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className="p-3 border space-x-2 w-full text-base font-medium text-black rounded-lg hover:bg-neutral-50 shadow" placeholder="Kullanıcı Adı ile Giriş"></input>
            </div>
            <div>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="p-3 border space-x-2 w-full text-base font-medium text-black rounded-lg hover:bg-neutral-50 shadow" placeholder="********"></input>
            </div>
            <div>
                <button type="button" className="flex items-center justify-center p-3 border border-neutral-800 space-x-2 w-full text-base font-medium text-white rounded-lg bg-black hover:bg-neutral-800 group shadow">
                    <span className="whitespace-nowrap">Giriş yap</span>
                </button>
            </div>
            <div>
                <span>{username + " - " + password}</span>
            </div>
        </div>
    );
}

function AuthFormView() {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="flex justify-center items-center w-full sm:pt-24 pt-20 pb-20">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-3xl font-semibold text-neutral-900 text-center">Log in to Nisantasi University</h1>
                    <div className="w-full max-w-80 space-y-6">
                        {!credentials && authEnabled && loading ? (
                            <>
                                <ul className="space-y-2">
                                    {authMethod.filter((method) => method.serviceActive).map((method, index) => (
                                        <ServiceAuth key={index} serviceLogo={method.serviceLogo} serviceText={method.serviceText} serviceDescription={method.serviceDescription} />
                                    ))}
                                </ul>
                                <span className="block w-full bg-neutral-300 h-[1px]"></span>
                                <ul className="space-y-2">
                                    <li>
                                        <button type="button" onClick={() => setCredentials(true)} className="flex items-center justify-center p-3 border space-x-2 w-full text-base font-medium text-black rounded-lg bg-white hover:bg-neutral-50 group shadow">
                                            <FaUserLock  width={20} height={20} />
                                            <span className="whitespace-nowrap">Kullanıcı Adı ile Giriş</span>
                                        </button>
                                    </li>
                                    <AccountVerification />
                                </ul>
                            </>
                        ) : (
                            !credentials ? (<AuthFormSkeleton />) : ''
                        )}
                        
                        {credentials && (<LoginWithCredentials />)}
                    </div>
                    {loading && authEnabled && (
                    <div className="mt-4" onClick={() => setCredentials(false)}>
                        <span className="text-sm font-normal text-blue-500 hover:underline hover:cursor-pointer">Parolanızı mı unuttunuz?</span>
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