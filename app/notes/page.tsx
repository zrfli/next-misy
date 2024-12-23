"use server"

const notesData = [
  {
    id: "1. Sınıf",
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
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Reklam Kampanyaları",
    instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
    midterm: 90,
    final: 90,
    grade: "AA",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Halkla İlişkiler ve Reklam Yazarlığı",
    instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
    midterm: 90,
    final: 90,
    grade: "BA",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Marka Yönetimi",
    instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
    midterm: 90,
    final: 90,
    grade: "BA",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Halkla İlişkilerde Kampanya Çalışmaları",
    instructor: "Dr.Öğr.Üyesi NUR GÖZDE TAYFUR",
    midterm: 90,
    final: 90,
    grade: "--",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Halkla İlişkiler ve Reklam Fotoğrafçılığı",
    instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
    midterm: 90,
    final: 90,
    grade: "AA",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Girişimcilik I",
    instructor: "Öğr.Gör. AHMET YALÇINKAYA",
    midterm: 90,
    final: 90,
    grade: "--",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "İş Sağlığı ve Güvenliği",
    instructor: "Öğr.Gör. ALİ KÜÇÜKOSMANOĞLU",
    midterm: 90,
    final: 90,
    grade: "--",
  },
  {
    id: "2. Sınıf",
    code: "MHIT201",
    type: "Zorunlu",
    courseName: "Pazarlama",
    instructor: "Dr.Öğr.Üyesi EBRU HANÇER",
    midterm: 90,
    final: 90,
    grade: "--",
  },
]

function NoteCard({ note }: { note: typeof notesData[0] }) {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-black shadow-sm border border-neutral-300 dark:border-neutral-600">
      <div className={`flex justify-between items-center rounded-t-xl border-b px-3 py-3 ${note?.again ? 'bg-yellow-200/75 border-yellow-300' : 'bg-neutral-200 border-neutral-300'}`}>
        <span className="text-sm font-medium text-neutral-800">{note.id} - {note.code} - {note.type}</span>
      </div>
      <div className="p-3">
        <span className="font-medium text-neutral-800 dark:text-white">{note.courseName}</span>
        <p className="text-neutral-800 text-xs dark:text-gray-400">{note.instructor}</p>
        <p className="mt-2 dark:text-gray-300 text-gray-600 text-xs font-medium">Vize<span className="inline-block align-text-top" style={{ lineHeight: '0.5rem', fontSize: '0.50rem' }}>(%40)</span>: {note.midterm}</p>
        <p className="mt-1 dark:text-gray-300 text-gray-600 text-xs font-medium">Final<span className="inline-block align-text-top" style={{ lineHeight: '0.5rem', fontSize: '0.50rem' }}>(%60)</span>: {note.final}</p>
        <span className="mt-3 inline-flex cursor-pointer items-center gap-x-1 rounded-lg border border-transparent text-xs font-semibold text-blue-500 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50">Detaylar</span>
      </div>
    </div>
  )
}

export default async function Notes() {
  return (
    <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {notesData.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}