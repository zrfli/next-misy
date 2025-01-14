"use server";

import AuthForm from "@/components/Auth/AuthForm";

const auth:boolean = false;

function AuthenticatedView() {
    return (
        <div className="px-4 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card title="Aktif Akademik Dönem Bilgileri" description="2024-2025 Güz" />
                <Card title="Danışman Bilgileri" description="Dr.Öğr.Üyesi NUR GÖZDE TAYFUR" />
                <Card title="Öğrenim Bilgileri" description="MESLEK YÜKSEKOKULU/Halkla İlişkiler ve Tanıtım" />
            </div>
        </div>
    );
}

function Card({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl border-neutral-300">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
                <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-800 font-semibold">{title}</p>
                    <div className="mt-1 flex items-center gap-x-2">
                        <h3 className="text-sm font-medium text-neutral-600">{description}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default async function Main() {
    return auth ? <AuthenticatedView /> : <AuthForm />;
}