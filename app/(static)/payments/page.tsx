"use server"

export default async function Payments() {
    return (
        <>
            <div className="ml-4">
                <h3 className="text-xl font-semibold">Harç Bilgileri</h3>
                <p className="text-sm text-gray-600">Sistemdeki ücretler güncel burs oranınız dikkate alınarak hesaplanmaktadır.</p>
            </div>
            <div className="grid grid-cols-1 gap-1 p-4 lg:grid-cols-2 lg:gap-2 space-y-2 lg:space-y-0">
                <div className="rounded-md border border-gray-300 bg-white p-4 shadow-md">
                    <div>
                        <h4 className="text-sm font-medium">Ödenecek Tutar</h4>
                        <p className="text-3xl font-semibold" id="paymentAmount">
                            ₺86.450,55
                            <span className="inline-block align-text-top text-xs">(₺125.000)</span>
                        </p>
                        <div className="mt-2">
                            <button type="button" className="inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/80">Ödeme seçnekleri</button>
                        </div>
                    </div>
                    <hr className="my-4 h-px border-0 bg-gray-400" />
                    <div>
                        <p className="text-base font-medium">Aktif Burslarım</p>
                        <p className="text-xs"><span className="text-red-400">**</span>Tarafıma tanımlanan eğitim bursları.</p>
                        <div className="mt-2 border border-gray-200 bg-gray-100 p-2 text-xs rounded font-medium">
                            <ul className="inline-flex space-x-2" id="grantsList">%50 ÖSYM | %5 Tercih</ul>
                        </div>
                    </div>
                </div>
                <div className="rounded-md border border-gray-300 bg-white p-4 shadow-md">
                    <h4 className="text-base font-medium">Mali Bilgiler</h4>
                    <div className="flex h-full justify-center">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 bg-gray-100 font-medium leading-none text-gray-800">SK</span>
                            <div className="font-medium">
                                <div>Zeynep Serra</div>
                                <div className="text-sm text-gray-500">Mali İşler Sorumlusu</div>
                                <div className="flex items-center space-x-2 mt-2 text-xs font-medium">
                                    <a href="#">+905312687789</a>
                                    <span>-</span>
                                    <a href="#">misy@misy.dev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="rounded-md border border-gray-300 overflow-hidden bg-white shadow-md">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="inline-block min-w-full p-1.5 align-middle">
                                <div className="border-b border-gray-200 px-4 py-4">
                                    <h2 className="text-base font-medium">Ödemeler</h2>
                                    <p className="text-xs text-gray-600">Yapılan ödemeler hakkında bilgiler.</p>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Yıl/Dönem</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Tip</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Tutar</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Sonuç</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200" id="payments">
                                        <tr className="bg-white hover:bg-gray-50">
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="block px-4 py-2">
                                                    <span className="text-xs font-semibold">2024-2025 / Güz</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="block px-3 py-2">
                                                    <span className="text-xs font-medium text-gray-600">Kayıt</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="block px-3 py-2">
                                                    <span className="text-xs font-medium text-gray-600">₺125.000</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="block px-3 py-2">
                                                    <span className="inline-flex items-center gap-x-1 rounded bg-yellow-100 text-yellow-800 px-1.5 py-1 text-xs font-medium">Ödenmedi</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="border-t border-gray-200 px-4 py-4">
                                    <span className="text-xs font-medium text-gray-800">Görüntülenemeyen ödemeler hakkında bilgi almak için mali işler departmanına müracat ediniz.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}