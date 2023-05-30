import React from 'react'
import { FiClipboard } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const faktur = () => {
    return (
        <>
            <div className="w-full h-full p-10 flex flex-col gap-5">
                <div className="flex flex-row gap-5 items-center justify-between">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiClipboard />
                            </span>
                            Faktur
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
                    <table className="w-full text-left">
                        <thead className="text-white bg-rose-900 h-16">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tanggal
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Produksi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Jumlah Produksi
                                </th>
                                <th scope="col" className="py-3">
                                    Biaya Produksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-black border-b">
                                <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                    1
                                </th>
                                <td className="py-3 px-6">
                                    21/11/2022
                                </td>
                                <td className="py-3 px-6">
                                    Sydney S+
                                </td>
                                <td className="py-3 px-6">
                                    30
                                </td>
                                <td className="py-3">
                                    Rp5.000.000
                                </td>
                            </tr>
                            <tr className="text-black border-b">
                                <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                    2
                                </th>
                                <td className="py-3 px-6">
                                    21/11/2022
                                </td>
                                <td className="py-3 px-6">
                                    Sydney S+
                                </td>
                                <td className="py-3 px-6">
                                    30
                                </td>
                                <td className="py-3">
                                    Rp5.000.000
                                </td>
                            </tr>
                            <tr className="text-black border-b">
                                <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                    3
                                </th>
                                <td className="py-3 px-6">
                                    21/11/2022
                                </td>
                                <td className="py-3 px-6">
                                    Sydney S+
                                </td>
                                <td className="py-3 px-6">
                                    30
                                </td>
                                <td className="py-3">
                                    Rp5.000.000
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex p-2 justify-end items-center">
                        <div className="px-6">
                            Total Biaya Produksi
                        </div>
                        <div className="px-6">
                            Rp5.000.000
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button class="w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                        <Link to="/">Cetak faktur</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default faktur