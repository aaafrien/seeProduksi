import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiPlus, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import api from '../config/api'

const InputBahan = () => {
    const [message, setMessage] = useState('')
    const [materialCategory, setMaterialCategory] = useState('')

    const handleSelectMaterialCategory = (value) => {
        setMaterialCategory(value)
        formik.setFieldValue('material_category', value)
    }

    const token = localStorage.getItem('token')

    const doProduksi = (event) => {
        axios.post(api.urlBahanBaku, event, {
            headers: {
                Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                formik.resetForm()
                setMessage('Data berhasil ditambahkan')
            })
            .catch((error) => {
                console.log(error)
                setMessage('Data gagal ditambahkan')
            })
        formik.setSubmitting(false)
        console.log(event)
    }

    const formik = useFormik({
        initialValues: {
            code: '',
            name: '',
            type: '',
            material_category: '',
            price: '',
            unit: '',
            stock: '',
        },

        validationSchema: Yup.object({
            code: Yup.string()
                .required('Code is required'),
            name: Yup.string()
                .required('Name is required'),
            type: Yup.string()
                .required('Type is required'),
            material_category: Yup.string()
                .required('Material category is required'),
            price: Yup.string()
                .required('Price is required'),
            unit: Yup.string()
                .required('Unit is required'),
            stock: Yup.string()
                .required('Stock is required'),
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
                            Tambah Bahan Baku
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="w-full">
                        <div className="flex flex-col gap-y-5">
                            <div className="flex h-16 pl-4 rounded-lg bg-rose-900 items-center text-white font-bold">
                                Tambah Bahan Baku
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Jenis Bahan
                                </label>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center items-center rounded-lg border bg-rose-900 px-4 py-2 text-white focus:outline-none hover:bg-rose-800">
                                            {materialCategory === '' ? 'Pilih Jenis Bahan' : materialCategory}
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
                                                            onClick={() => handleSelectMaterialCategory('Kulit')}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Kulit
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            onClick={() => handleSelectMaterialCategory('Kain')}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Kain
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            onClick={() => handleSelectMaterialCategory('Aksesoris')}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Akseseoris
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
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter kode bahan"
                                    {...formik.getFieldProps('code')}
                                />
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Nama
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter nama bahan"
                                    {...formik.getFieldProps('name')}
                                />

                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Type
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter type bahan"
                                    {...formik.getFieldProps('type')}
                                />
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Harga
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter harga bahan"
                                    type='number'
                                    {...formik.getFieldProps('price')}
                                />

                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Unit
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter unit bahan"
                                    {...formik.getFieldProps('unit')}
                                />
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Stock
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter stock bahan"
                                    type='number'
                                    {...formik.getFieldProps('stock')}
                                />
                            </div>
                            {message && <div className="">{message}</div>}
                            <div className="pt-5 flex flex-row gap-3 justify-end">
                                <button className="bg-transparent border border-rose-900 p-2 text-rose-900 rounded-lg">
                                    <Link to="/bahanbaku">Cancel</Link>
                                </button>
                                <button type="submit" className="bg-rose-900 rounded-lg p-2 text-white">Tambah</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InputBahan