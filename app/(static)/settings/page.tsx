"use server";

import Image from 'next/image'

export default async function Settings() {
  const misyAvatar =  '/0misy.jpg';
  const misy2faStatus = false;
  const misyTag = '';
  const misyUsername = '2315150300';
  const misyFullName = 'Zeynep Serra Karaman';
  const misyIdenityNumber = '';
  const misyBirthDay = '';
  const misyGender = 'Kadın';
  const misyAddress = '';
  const misyEmail = '';
  const misyPhoneNumber = '';

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
                alt=""
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="mb-1 text-base font-semibold dark:text-white">Fotoğraf</h3>
                <div id="pictureStatus" className="font-medium">
                  <div className="mb-2 w-48 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></div>
                  <div className="w-24 h-2 bg-gray-300 dark:bg-neutral-800 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm">
            <h3 className="mb-2 text-base font-semibold dark:text-white">İki Faktörlü Kimlik Doğrulama</h3>
            <button
              id="2faAuthenticationBtn"
              className={`text-white ${misy2faStatus ? 'bg-red-500' : 'bg-black hover:bg-black/80'} dark:hover:bg-neutral-800/80 dark:bg-neutral-800 font-medium rounded-lg text-xs w-full px-5 py-2.5 text-center`}
              type="button"
            >
              {misy2faStatus ? 'Devre dışı bırak' : 'Kurulum yap'}
            </button>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:bg-black dark:border-neutral-700 rounded-lg shadow-sm">
            <h3 className="mb-4 text-base font-semibold dark:text-white">Sicil Bilgileri</h3>
            <div className="mb-2">
              <label htmlFor="unit" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Birim</label>
              <input
                type="text"
                name="unit"
                id="unit"
                className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                value={misyTag}
                disabled
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Sicil Numarası</label>
              <input
                type="text"
                name="username"
                id="username"
                className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.55"
                value={misyUsername}
                autoComplete="off"
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
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyFullName}
                  disabled
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="idenityNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">T.C. Kimlik No</label>
                <input
                  type="text"
                  name="idenityNumber"
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
                  name="birthDay"
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
                  name="gender"
                  id="gender"
                  className="shadow-sm bg-gray-100 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyGender}
                  disabled
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="address" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyAddress}
                  autoComplete="on"
                  maxLength={100}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-0 focus:border-black border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyEmail}
                  autoComplete="on"
                  maxLength={64}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phoneNumber" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Telefon Numarası</label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="shadow-sm border focus:ring-0 focus:border-black border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5"
                  value={misyPhoneNumber}
                  pattern="/^-?\d+\.?\d*$/"
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

          <div className="p-4 mb-4 bg-white border border-gray-200 dark:border-neutral-700 dark:bg-black rounded-lg shadow-sm 2xl:col-span-2">
            <h3 className="mb-4 text-base font-semibold dark:text-white">Parola Güncelleme</h3>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300">Parola</label>
                <input
                  type="password"
                  name="password"
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
                  name="rePassword"
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