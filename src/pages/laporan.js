import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiClipboard, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const laporan = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="w-full h-full p-10">
                <div className="flex flex-row gap-5 items-center justify-between">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiClipboard />
                            </span>
                            Laporan Produksi
                        </div>
                    </div>

                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center items-center rounded-lg border bg-rose-900 px-4 py-2 text-white focus:outline-none hover:bg-rose-800">
                                    Pilih bulan
                                    <FiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    September
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Oktober
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    November
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Desember
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Januari
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
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
                                    Tanggal Produksi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Produksi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Jumlah Produksi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Biaya Produksi
                                </th>
                                <th scope="col" className="py-3">
                                    Karyawan
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
                                <td className="py-3 px-6">
                                    Rp5.000.000
                                </td>
                                <td className="py-3">
                                    Sugi
                                </td>
                            </tr>
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
                                <td className="py-3 px-6">
                                    Rp5.000.000
                                </td>
                                <td className="py-3">
                                    Sugi
                                </td>
                            </tr>
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
                                <td className="py-3 px-6">
                                    Rp5.000.000
                                </td>
                                <td className="py-3">
                                    Sugi
                                </td>
                            </tr>
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
                                <td className="py-3 px-6">
                                    Rp5.000.000
                                </td>
                                <td className="py-3">
                                    Sugi
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default laporan