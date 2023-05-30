import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const karyawan = () => {
    return (
        <>
            <div className="p-10">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiSettings />
                            </span>
                            Pengaturan
                        </div>

                        <div className="w-64 overflow-y-auto p-3 bg-rose-900 rounded-lg">
                            <ul className="space-y-2">
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Akun</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/hpp" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">HPP</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Karyawan</span>
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            <Link to="/inputProduk">Daftar Karyawan</Link>
                        </button>
                    </div>

                    <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
                        <table className="w-full text-left">
                            <thead className="text-white bg-rose-900 h-16">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Nama Karyawan
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Email
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Nomor HP
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Posisi
                                    </th>
                                    <th scope="col" className="py-3">

                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Sugi
                                    </th>
                                    <td className="py-3 px-6">
                                        sugiberliano@gmail.com
                                    </td>
                                    <td className="py-3 px-6">
                                        081234567890
                                    </td>
                                    <td className="py-3 px-6">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Produksi
                                        </button>
                                    </td>
                                    <td className="py-3">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Sugi
                                    </th>
                                    <td className="py-3 px-6">
                                        sugiberliano@gmail.com
                                    </td>
                                    <td className="py-3 px-6">
                                        081234567890
                                    </td>
                                    <td className="py-3 px-6">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Produksi
                                        </button>
                                    </td>
                                    <td className="py-3">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Sugi
                                    </th>
                                    <td className="py-3 px-6">
                                        sugiberliano@gmail.com
                                    </td>
                                    <td className="py-3 px-6">
                                        081234567890
                                    </td>
                                    <td className="py-3 px-6">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Produksi
                                        </button>
                                    </td>
                                    <td className="py-3">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default karyawan