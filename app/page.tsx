"use server"

export default async function Home () {
    return ( 
        <div className="px-4 py-10 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Total users</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">72,540</h3>
                            </div>
                        </div>
                    </div>
                    <a className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl" href="#">
                        View reports
                    </a>
                </div>

                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Total users</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">72,540</h3>
                            </div>
                        </div>
                    </div>
                    <a className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl" href="#">
                        View reports
                    </a>
                </div>

                <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5 flex justify-between gap-x-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Total users</p>
                            <div className="mt-1 flex items-center gap-x-2">
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">72,540</h3>
                            </div>
                        </div>
                    </div>
                    <a className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl" href="#">
                        View reports
                    </a>
                </div>
            </div>
        </div>
    )
}