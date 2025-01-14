"use server"

import { NoteDetails } from "@/components/Layouts/Sheets/NoteDetails"

const notesData = [
  {
    id: 0,
    class: "1. Sınıf",
    code: "MHIT124",
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

async function NoteCard({ note }: { note: typeof notesData[0] }) {
  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-black shadow-sm border border-neutral-300 dark:border-neutral-600">
      <div className={`flex justify-between items-center rounded-t-xl border-b px-2 py-2 ${note?.again ? 'bg-yellow-200/75 border-yellow-300' : 'bg-neutral-200 border-neutral-300'}`}>
        <span className="text-sm font-medium text-neutral-800">{note.class} - {note.code} - {note.type}</span>
      </div>
      <div className="p-2">
        <span className="font-medium text-neutral-800 dark:text-white">{note.courseName}</span>
        <p className="text-neutral-800 text-xs dark:text-neutral-400">{note.instructor}</p>
        <p className="mt-2 dark:text-neutral-300 text-neutral-600 text-xs font-medium">Vize<span className="inline-block align-text-top" style={{ lineHeight: '0.5rem', fontSize: '0.50rem' }}>(%40)</span>: {note.midterm}</p>
        <p className="mt-1 mb-1 dark:text-neutral-300 text-neutral-600 text-xs font-medium">Final<span className="inline-block align-text-top" style={{ lineHeight: '0.5rem', fontSize: '0.50rem' }}>(%60)</span>: {note.final}</p>
        <NoteDetails Lesson={note} />
      </div>
    </div>
  )
}

export default async function Notes() {
  return (
    <>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Notlar</h3>
        <p className="text-sm text-neutral-600">Bu bölümdeki notlar, sistemdeki önemli bilgileri ve güncellemeleri içermektedir.</p>
      </div>
      <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {notesData.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>    
    </>
  )
}