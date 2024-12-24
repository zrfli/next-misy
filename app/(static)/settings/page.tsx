"use server";

import Image from 'next/image';

export default async function Settings() {
  const misyAvatar = '/0misy.jpg';
  const misy2faStatus = false;
  const misyTag = 'Öğrenci';
  const misyUsername = '2315150300';
  const misyFullName = 'Zeynep Serra Karaman';
  const misyIdenityNumber = '11111111111';
  const misyBirthDay = '11/01/2004';
  const misyGender = 'Kadın';
  const misyAddress = 'Sarıyer';
  const misyEmail = 'zeynep.serra@nisantasi.edu.tr';
  const misyPhoneNumber = '5387986648';

  return (
    <>
      <div className="mb-4 col-span-full ml-4 xl:mb-2">
        <h1 className="font-semibold text-gray-900 text-xl dark:text-white">Ayarlar</h1>
      </div>
      <div className="grid grid-cols-1 pt-2 px-4 xl:grid-cols-3 xl:gap-4">
        <div className="col-span-full xl:col-auto">
          <div className="p-4 mb-4 bg-white dark:bg-black border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm">
            <div className="flex space-x-4">
              <Image
                className="rounded w-28 h-28 dark:border-neutral-700 border object-cover"
                src={misyAvatar}
                alt="Profil Fotoğrafı"
                loading="lazy"
                decoding="async"
                height={250}
                width={250}
              />
              <div>
                <h3 className="mb-1 text-base font-semibold dark:text-white">Fotoğraf</h3>
              </div>
            </div>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm">
            <h3 className="mb-2 text-base font-semibold dark:text-white">İki Faktörlü Kimlik Doğrulama</h3>
            <button
              id="2faAuthenticationBtn"
              className={`text-white ${
                misy2faStatus ? 'bg-red-500' : 'bg-black hover:bg-black/80'
              } dark:hover:bg-neutral-800/80 dark:bg-neutral-800 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center`}
              type="button"
            >
              {misy2faStatus ? 'Devre dışı bırak' : 'Kurulum yap'}
            </button>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm">
            <h3 className="mb-4 text-base font-semibold dark:text-white">Sicil Bilgileri</h3>
            <div className="mb-2">
              <label htmlFor="unit" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Birim</label>
              <input
                type="text"
                id="unit"
                className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                value={misyTag}
                readOnly
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Sicil Numarası</label>
              <input
                type="text"
                id="username"
                className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                value={misyUsername}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm">
            <h3 className="mb-4 text-base font-semibold dark:text-white">Genel Bilgiler</h3>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="fullName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Ad Soyad</label>
                <input
                  id="fullName"
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyFullName}
                  disabled
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="idenityNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">T.C. Kimlik No</label>
                <input
                  type="text"
                  id="idenityNumber"
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyIdenityNumber}
                  disabled
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="birthDay" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Doğum Tarihi</label>
                <input
                  type="text"
                  id="birthDay"
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyBirthDay}
                  disabled
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="gender" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Cinsiyet</label>
                <input
                  type="text"
                  id="gender"
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyGender}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="address" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Adres</label>
                <input
                  type="text"
                  id="address"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  defaultValue={misyAddress}
                  autoComplete="on"
                  maxLength={100}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  defaultValue={misyEmail}
                  autoComplete="on"
                  maxLength={64}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phoneNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Telefon Numarası</label>
                <input
                  type="number"
                  id="phoneNumber"
                  className="shadow-sm border focus:ring-0 focus:border-black border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  defaultValue={misyPhoneNumber}
                />
              </div>
              <div className="col-span-6 sm:col-full">
                <button
                  className="text-white bg-black hover:bg-black/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:hover:bg-neutral-800/80 dark:bg-neutral-800"
                  type="button"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm">
            <h3 className="mb-4 text-base font-semibold dark:text-white">Parola Güncelleme</h3>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Parola</label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="rePassword" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Parola Tekrar</label>
                <input
                  type="password"
                  id="rePassword"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-full">
                <button
                  className="text-white bg-black hover:bg-black/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:hover:bg-neutral-800/80 dark:bg-neutral-800"
                  type="button"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}