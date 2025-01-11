"use server"

export default async function AuthFooter() { 
    return (
        <footer className="border-gray-700 dark:border-neutral-700 bg-black border-t">
  <div className="lg:-10 max-w-screen-xl md:p-8 mx-auto p-4 py-6">
    <div className="gap-8 grid grid-cols-2 lg:grid-cols-6">
      <div className="col-span-2" id="contactInformation">
        <p className="my-4 text-gray-400" id="layoutContact">Maslak Mahalesi, Taşyoncası Sokak, No: 1V ve No:1Y Sarıyer-İstanbul <a href="tel:+902122101010" className="text-white underline">+90 (212) 210 10 10</a>
        </p>
        <ul className="flex mt-5 space-x-6">
          <li>
            <a className="text-gray-400 hover:text-gray-500" href="https://www.facebook.com/nisantasiedu" aria-hidden="true" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-500" href="https://www.instagram.com/nisantasiedu" aria-hidden="true" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748s-.566.683-.748 1.15c-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748s.566-.683.748-1.15c.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058M12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27m0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-500" href="https://x.com/nisantasiedu" aria-hidden="true" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 21.68" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.88 0h3.68l-8.08 9.2 9.44 12.48h-7.408l-5.8-7.584-6.64 7.584H.392l8.56-9.84L-.088 0h7.592l5.24 6.928zm-1.288 19.52h2.04L6.432 2.08H4.24z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-500" href="https://www.linkedin.com/school/nisantasiuniversity" aria-hidden="true" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 57.6 57.6" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.04 18.04v2.249c2.169-1.348 4.674-2.133 8.479-2.133 12.386 0 13.971 9.258 13.971 17.323v21.996l-14.32.125V36.562c0-3.532-1.265-4.202-3.604-4.202-2.223 0-3.604.703-3.604 4.202V57.6l-14.508-.126V18.04zm-20.626-.024v39.568H0V18.016zM10.81 21.62H3.604v32.36h7.207V21.619Zm20.626.024h-6.378v32.259l7.301.065V36.563c0-6.793 4.515-7.805 7.207-7.805 3.286 0 7.207 1.355 7.207 7.805v17.405l7.114-.065V35.478c0-10-2.807-13.719-10.368-13.719-4.544 0-6.512 1.348-8.44 2.969l-.501.425h-3.142zM7.207 0c3.975 0 7.207 3.232 7.207 7.207s-3.232 7.207-7.207 7.207A7.214 7.214 0 0 1 0 7.207 7.214 7.214 0 0 1 7.207 0m0 3.604c-1.986 0-3.604 1.618-3.604 3.604s1.618 3.604 3.604 3.604 3.604-1.618 3.604-3.604-1.618-3.604-3.604-3.604" fillRule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-gray-500" href="https://api.whatsapp.com/send?phone=905312986235&amp;text=Merhaba" aria-hidden="true" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 9.24 9.24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.837 5.309a22 22 0 0 0-.811-.383.5.5 0 0 0-.157-.035q-.137 0-.227.134c-.067.1-.271.338-.334.409-.008.009-.019.021-.026.021s-.11-.043-.142-.057c-.723-.314-1.271-1.069-1.346-1.196-.011-.018-.011-.027-.011-.027.003-.01.027-.034.039-.047.037-.036.076-.084.115-.13l.054-.065a.7.7 0 0 0 .109-.174l.015-.03c.07-.14.01-.258-.009-.296-.016-.032-.3-.718-.331-.79-.073-.174-.169-.255-.302-.255l-.052.002c-.063.003-.408.048-.56.144-.161.104-.434.428-.434.999 0 .514.326.999.466 1.184l.019.028c.536.783 1.205 1.363 1.882 1.634.652.261.961.291 1.137.291q.109-.002.185-.011l.033-.003c.225-.02.721-.277.833-.59.089-.247.112-.516.053-.614-.04-.066-.11-.1-.198-.142"></path>
                <path d="M4.702 0C2.2 0 .164 2.021.164 4.504c0 .803.215 1.59.622 2.278l-.78 2.299a.12.12 0 0 0 .15.153l2.398-.762a4.6 4.6 0 0 0 2.148.536c2.502 0 4.538-2.02 4.538-4.504S7.204 0 4.702 0m0 8.07c-.706 0-1.39-.204-1.978-.59a.12.12 0 0 0-.102-.014l-1.201.382.388-1.144a.12.12 0 0 0-.017-.109 3.5 3.5 0 0 1-.684-2.09c0-1.966 1.613-3.566 3.595-3.566s3.594 1.6 3.594 3.566-1.612 3.566-3.594 3.566"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:mx-auto">
        <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Kurumsal</h2>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="tarhice" rel="noopener noreferrer" className="hover:underline">Yatay Geçiş</a>
          </li>
          <li className="mb-2">
            <a href="misyon-vizyon" rel="noopener noreferrer" className="hover:underline">Misyon ve Vizyon</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">Kişisel Veriler (kVKK)</a>
          </li>
        </ul>
      </div>
      <div className="lg:mx-auto">
        <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Kampüslerimiz</h2>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="neotech-campus" rel="noopener noreferrer" className="hover:underline">NeoTech Campus</a>
          </li>
          <li className="mb-2">
            <a href="silivri-campus" rel="noopener noreferrer" className="hover:underline">Silivri Kampüsü</a>
          </li>
        </ul>
      </div>
      <div className="lg:mx-auto">
        <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Tanıtım</h2>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="fotograflar" rel="noopener noreferrer" className="hover:underline">Fotoğraflar</a>
          </li>
        </ul>
      </div>
      <div className="lg:mx-auto">
        <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Bilgilendirme</h2>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="misyon-vizyon" rel="noopener noreferrer" className="hover:underline">Dikey Geçiş</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">Özel Yetenek</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">Bologna / Ders İçerikleri</a>
          </li>
        </ul>
      </div>
      <div className="lg:mx-auto">
        <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Erişim</h2>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="tarhice" rel="noopener noreferrer" className="hover:underline">İletişim</a>
          </li>
          <li className="mb-2">
            <a href="misyon-vizyon" rel="noopener noreferrer" className="hover:underline">İhaleler</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">OBİS</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">Online Ödeme</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">Sanal Kampüs</a>
          </li>
          <li className="mb-2">
            <a href="kvkk" rel="noopener noreferrer" className="hover:underline">EBYS</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-gray-700 dark:border-neutral-700 lg:my-8 my-6 sm:mx-auto"></div>
    <span className="text-gray-400 block text-center text-sm">© 2018 İstanbul Yeni Yüzyıl Üniversitesi Bilgi İşlem Daire Başkanlığı - Tüm Hakları Saklıdır.</span>
    <span className="text-gray-400 block text-center text-sm">Developed by <a className="hover:text-purple-400 text-purple-300 underline" href="https://misyy.vercel.app" target="_blank">Misy</a>
    </span>
  </div>
</footer>
    )
}