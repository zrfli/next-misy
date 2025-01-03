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

async function LessonCard({ lesson }: { lesson: typeof lessonsData[0] }) {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-sm border border-neutral-300">
        <div className={`flex justify-between items-center rounded-t-xl border-b px-2 py-2 ${lesson?.again ? 'bg-yellow-200/75 border-yellow-300' : 'bg-neutral-200 border-neutral-300'}`}>
            <span className="text-sm font-medium text-neutral-800">{lesson.class} - {lesson.code} - {lesson.type}</span>
            <span className="inline-flex items-center rounded border border-neutral-500 '.$bg_color.' px-2.5 py-0.5 text-xs font-semibold text-neutral-800">{lesson.grade}</span>
        </div>
        <div className="p-2">
            <span className="font-medium text-neutral-800">{lesson.courseName}</span>
            <p className="text-neutral-800 text-xs">{lesson.instructor}</p>
        </div>
    </div>
  )
}

export default async function Lessons() {
  return (
    <>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Derslerim</h3>
        <p className="text-sm text-neutral-600">Dönem içerisinde alınan dersler.</p>
      </div>
      <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {lessonsData.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>    
    </>
  )
}