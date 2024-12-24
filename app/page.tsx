"use server"

export default async function Home () {
    return ( 
        <div className="px-4 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-neutral-800 font-semibold">Aktif Akademik Dönem Bilgileri</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-sm font-medium text-neutral-600">2024-2025 Güz</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-neutral-800 font-semibold">Danışman Bilgileri</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-sm font-medium text-neutral-600">Dr.Öğr.Üyesi NUR GÖZDE TAYFUR</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-neutral-800 font-semibold">Öğrenim Bilgileri</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-sm font-medium text-neutral-600">MESLEK YÜKSEKOKULU/Halkla İlişkiler ve Tanıtım</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}