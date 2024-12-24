"use server"

export default async function Courses() {
    return (
        <>
            <div className="w-full bg-gradient-to-bl mt-0 from-purple-800 to-black text-white">
                <div className="flex items-center p-10 shadow-md">
                    <div>
                        <span className="rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium uppercase text-purple-800">Seçmeli</span>
                        <h1 className="mt-1 text-2xl font-bold uppercase text-white">Genel Ekonomi 1</h1>
                        <div className="mt-2 space-y-1 text-gray-200 text-sm">
                            <p>Created by <span className="font-medium text-white">Nur Gözde Tayfur</span></p>
                            <p>Last updated 10/2019</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto lg:w-8/12 p-4">
                <div className="border mt-6 bg-white p-4">
                    <p className="text-lg font-semibold mb-3">Genel</p>
                    <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
                    </div>
                </div>
            </div>

            <div className="mx-auto lg:w-8/12 p-4">
                <div id="accordion-open" data-accordion="collapse" className="bg-white p-4 border">
                    <p className="mb-4 text-lg font-semibold">Haftalık Akış</p>
                    <div className="space-y-4">
                        <h2 id="accordion-open-heading-1">
                            <button type="button" className="flex items-center justify-between w-full p-4 text-sm font-medium border-2 border-dashed border-black text-black" data-accordion-target="#accordion-open-body-1" aria-expanded="false" aria-controls="accordion-open-body-1">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                1.Hafta    
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                            <div className="p-4 border border-black border-dashed">
                                <p className="mb-2 text-gray-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p className="text-gray-500">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}