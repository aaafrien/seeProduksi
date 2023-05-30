import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiPlus, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const InputProduk = () => {
    const doProduksi = (event) => {
        formik.setSubmitting(false)
        console.log(event)
    }
    const formik = useFormik({
        initialValues: {
            code: '',
            name: '',
            category: '',
            price: '',
            material: ''
        },

        validationSchema: Yup.object({
            code: Yup.string()
                .required('Code is required'),
            name: Yup.string()
                .required('Name is required'),
            category: Yup.string()
                .required('Category is required'),
            price: Yup.string()
                .required('Price is required'),
            material: Yup.string()
                .required('Material is required'),
        }),

        onSubmit: doProduksi
    })

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="p-10">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiPlus />
                            </span>
                            Tambah Produk
                        </div>
                    </div>

                    <form className="w-full">
                        <div className="flex flex-col gap-y-3">
                            <div className="flex h-16 pl-4 rounded-lg bg-rose-900 items-center text-white font-bold">
                                Tambah Produk
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Jenis Produk
                                </label>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center items-center rounded-lg border bg-rose-900 px-4 py-2 text-white focus:outline-none hover:bg-rose-800">
                                            Pilih jenis produk
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
                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Tas Wanita
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
                                                            Tas Pria
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
                                                            Dompet
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
                                                            Pouch
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Kode
                                </label>
                                <input
                                    {...formik.getFieldProps('code')}
                                    className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter kode produk">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Nama
                                </label>
                                <input
                                    {...formik.getFieldProps('name')}
                                    className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter nama produk">
                                </input>
                            </div>
                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Harga
                                </label>
                                <input 
                                    {...formik.getFieldProps('price')}
                                    className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter harga produk">
                                </input>
                            </div>
                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Material
                                </label>
                                <input 
                                    {...formik.getFieldProps('material')}
                                    className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter material produk">
                                </input>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-end pt-5">
                            <button className="bg-transparent border border-rose-900 p-2 text-rose-900 rounded-lg">
                                <Link to="/produk">Cancel</Link>
                            </button>
                            <button type="submit" className="bg-rose-900 rounded-lg p-2 text-white">Tambah</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default InputProduk