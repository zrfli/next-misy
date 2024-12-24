"use server"

export default async function LessonSelection() {
    return (
        <>
        <ol className="flex items-center whitespace-nowrap ml-4" aria-label="">
            <li className="inline-flex items-center">
                <span className="flex items-center text-sm text-neutral-500">Dönem İşlemleri</span>
                <svg className="flex-shrink-0 h-5 w-5 text-neutral-400 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"/>
                </svg>
            </li>
            <li className="inline-flex items-center text-sm font-semibold text-neutral-800 truncate" aria-current="page">Ders Alma</li>
        </ol>

        <div className="px-4 xl:gap-4 mt-4">
            <div className="p-4 mb-4 bg-white border border-neutral-200 rounded-lg shadow-sm 2xl:col-span-2">
                <h3 className="mb-4 text-base font-semibold">Ders Kayıt Aracı</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block mb-1 text-xs font-medium text-neutral-900">Ad Soyad</label>
                        <input type="text" name="fullName" id="fullName" className="shadow-sm bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-xs rounded-lg block w-full p-2.5" value="Zeynep Serra Karaman" disabled />
                    </div>
                    <div>              
                        <label htmlFor="username" className="block mb-1 text-xs font-medium text-neutral-900">Öğrenci Numarası</label>
                        <input type="text" name="username" id="username" className="shadow-sm bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-xs rounded-lg block w-full p-2.5" value="23151503000" disabled />
                    </div>
                    <div>   
                        <label htmlFor="arrivalType" className="block mb-1 text-xs font-medium text-neutral-900">Kayıt Tarihi / Geliş Şekli</label>
                        <input type="text" name="arrivalType" id="arrivalType" className="shadow-sm bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-xs rounded-lg block w-full p-2.5" value="11/07/2024 - YKS" disabled />
                    </div>
                    <div> 
                        <label htmlFor="balance" className="block mb-1 text-xs font-medium text-neutral-900">Genel Bakiye</label>
                        <input type="text" name="balance" id="balance" className="shadow-sm bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-xs rounded-lg block w-full p-2.5" value="Uygun" disabled />
                    </div>
                    <div>
                        <label htmlFor="academicInfo" className="block mb-1 text-xs font-medium text-neutral-900">Fakülte - Program / Sınıf</label>
                        <input type="text" name="academicInfo" id="academicInfo" className="shadow-sm bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-xs rounded-lg block w-full p-2.5" value="Mühendislik - Mimarlık Fakültesi | Bilgisayar Mühendisliği" disabled />
                    </div>
                </div>
                <div id="lessonSelectionContent" className="mt-6">
                    <div className="text-center space-y-1">
                        <p className="text-xl font-semibold text-red-400">Öğrencilerimizin Dikkatine!</p>
                        <p className="text-xs">Lisansüstü; 2023-2024 Eğitim Öğretim yılı Bahar Yarıyılı Ders Kayıtları/ Ders Ekleme/Silme / Danışman Onayı işlemleri 19 Şubat-01 Mart 2024 tarihleri arasında yapılacaktır.</p>
                        <p className="text-xs">Lisans ve Önlisans; 2023-2024 Eğitim Öğretim yılı Bahar Yarıyılı Ders Kayıtları/ Ders Ekleme/Silme / Danışman Onayı işlemleri 13 Şubat-23 Şubat 2024 tarihleri arasında yapılacaktır.</p>
                        <p className="text-xs">Lisans ve Ön Lisans 1.Sınıf Bahar Dönemi ders seçimleri öğrencilerimiz tarafından seçilip, Danışmanı tarafından onay yapılması gerekmektedir.</p>
                        <p className="text-xs">Mali Uygunluğu olmayan öğrenciler ders seçim işlemlerini yapamazlar.</p>
                        <p className="text-xs">Ders bölümünüz tarafından açılmamıştır’’ uyarısı için Bölümünüz/Programınız sekreterliği ile iletişime geçebilirsiniz.</p>
                        <p className="text-xs">2023-2024 Eğitim Öğretim yılı Bahar yarıyılında Yatay Geçiş ve DGS  ile kayıt yaptıran öğrencilerimizin, Muafiyet İşlemleri tamamlandıktan sonra ders seçimlerini yapabileceklerdir.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}