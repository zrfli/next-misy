"use server"

const lessonsData = [
    {
      id: 0,
      class: "1. Sınıf",
      code: "MHIT201",
      type: "Alttan",
      courseName: "Halkla İlişkilere Giriş",
      instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
      midterm: 90,
      final: 90,
      grade: "--",
      again: true,
    },
    {
      id: 1,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Reklam Kampanyaları",
      instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
      midterm: 90,
      final: 90,
      grade: "AA",
    },
    {
      id: 2,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Halkla İlişkiler ve Reklam Yazarlığı",
      instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
      midterm: 90,
      final: 90,
      grade: "BA",
    },
    {
      id: 3,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Marka Yönetimi",
      instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
      midterm: 90,
      final: 90,
      grade: "BA",
    },
    {
      id: 4,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Halkla İlişkilerde Kampanya Çalışmaları",
      instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
      midterm: 90,
      final: 90,
      grade: "--",
    },
    {
      id: 5,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Halkla İlişkiler ve Reklam Fotoğrafçılığı",
      instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
      midterm: 90,
      final: 90,
      grade: "AA",
    },
    {
      id: 6,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Girişimcilik I",
      instructor: "Öğr.Gör. AHMET YALÇINKAYA",
      midterm: 90,
      final: 90,
      grade: "--",
    },
    {
      id: 7,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "İş Sağlığı ve Güvenliği",
      instructor: "Öğr.Gör. ALİ KÜÇÜKOSMANOĞLU",
      midterm: 90,
      final: 90,
      grade: "--",
    },
    {
      id: 8,
      class: "2. Sınıf",
      code: "MHIT201",
      type: "Zorunlu",
      courseName: "Pazarlama",
      instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
      midterm: 90,
      final: 90,
      grade: "--",
    },
  ]
  
  export default async function Curriculum() {
    return (
        <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col rounded-xl bg-white shadow-sm border">
                <div className="flex justify-between items-center rounded-t-xl border-b bg-neutral-100 px-3 py-3">
                    <span className="text-sm font-semibold text-neutral-800">2024-2025 - Güz</span>
                    <span className="text-sm font-semibold text-neutral-800 hidden"></span>
                </div>
                <div className="p-2">
                    <div className="flex border">
                        <div className="grow">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-xs text-left text-neutral-500">
                                    <thead className="text-neutral-700 uppercase bg-neutral-50">
                                        <tr>
                                            <th scope="col" className="px-1 py-1">Ders Kodu</th>
                                            <th scope="col" className="px-1 py-1">Ders Adı</th>
                                            <th scope="col" className="px-1 py-1">Z/S</th>
                                            <th scope="col" className="px-1 py-1">Kredi</th>
                                            <th scope="col" className="px-1 py-1">Akts</th>
                                            <th scope="col" className="px-1 py-1">Not</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lessonsData.map((data) => (
                                        <tr className="border-b" key={data.id}>
                                            <th scope="row" className="px-1 py-1 font-medium text-neutral-900">{data.code}</th>
                                            <td className="px-1 py-1">{data.courseName}</td>
                                            <td className="px-1 py-1">{data.type}</td>
                                            <td className="px-1 py-1">2</td>
                                            <td className="px-1 py-1">4</td>
                                            <td className="px-1 py-1">{data.grade}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}