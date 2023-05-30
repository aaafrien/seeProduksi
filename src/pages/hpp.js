import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiDollarSign, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Hpp = () => {
    return (
        <>
            <div className="p-10">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiDollarSign />
                            </span>
                            HPP
                        </div>

                        <div className="w-64 overflow-y-auto p-3 bg-rose-900 rounded-lg">
                            <ul className="space-y-2">
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Bahan Baku</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Aksesoris</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/hpp" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Produk</span>
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            <Link to="/hpp">Tambah HPP</Link>
                        </button>
                    </div>

                    <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
                        <table className="w-full text-left">
                            <thead className="text-white bg-rose-900 h-16">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Bahan Baku
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Harga Beli
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        HPP
                                    </th>
                                    <th scope="col" className="py-3">

                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Kulit
                                    </th>
                                    <td className="py-3 px-6">
                                        Rp25.000
                                    </td>
                                    <td className="py-3 px-6">
                                        Rp30.000
                                    </td>
                                    <td className="py-3">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Kain Swead
                                    </th>
                                    <td className="py-3 px-6">
                                        Rp12.500
                                    </td>
                                    <td className="py-3 px-6">
                                        Rp15.000
                                    </td>
                                    <td className="py-3">
                                        <button className="bg-rose-900 p-2 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                <tr className="text-black border-b">
                                    <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                        Kain Eroe
                                    </th>
                                    <td className="py-3 px-6">
                                        Rp12.500
                                    </td>
                                    <td className="py-3 px-6">
                                        Rp15.000
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
                <div className="pt-5 flex flex-row gap-3 justify-end">
                    <button className="bg-transparent border border-rose-900 p-2 text-rose-900 rounded-lg">
                        <Link to="/setting">Kembali</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hpp