import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiBox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../config/api'

const BahanBaku = () => {
    const [bahanbaku, setBahanBaku] = useState([])
    const [category, setCategory] = useState('Kulit')
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(api.urlBahanBaku, {
            headers: {
                Authorization: 'bearer ' + token
            }
        })
            .then((res) => {
                console.log(res.data.data)
                setBahanBaku(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="p-10">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiBox />
                            </span>
                            Bahan Baku
                        </div>

                        <div className="w-64 overflow-y-auto p-3 bg-rose-900 rounded-lg">
                            <ul className="space-y-2">
                                <li
                                    className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer"
                                    onClick={() => setCategory('Kulit')}>

                                    <span className="ml-3">Kulit</span>

                                </li>
                                <li
                                    className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer"
                                    onClick={() => setCategory('Kain')}
                                >

                                    <span className="ml-3">Kain</span>

                                </li>
                                <li
                                    className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer"
                                    onClick={() => setCategory('Aksesoris')}
                                >

                                    <span className="ml-3">Aksesoris</span>

                                </li>
                            </ul>
                        </div>

                        <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            <Link to="/inputBahan">Tambah bahan baku</Link>
                        </button>
                    </div>

                    <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
                        {bahanbaku.filter((value) => value.material_category === category).length > 0 && (
                            <table className="w-full text-left">
                                <thead className="text-white bg-rose-900 h-16">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Jenis Bahan Baku
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Stock
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Update
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            History
                                        </th>
                                        <th scope="col" className="py-3">

                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bahanbaku.filter((value) => value.material_category === category).map((item, index) => (
                                        <tr className="text-black border-b" key={index}>
                                            <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                                                {item.name}
                                            </th>
                                            <td className="py-3 px-6">
                                                {item.stock}
                                            </td>
                                            <td className="py-3 px-6">
                                                {item.updatedAt}
                                            </td>
                                            <td className="py-3 px-6">
                                                <button className="bg-rose-900 p-2 rounded-lg text-white">
                                                    History
                                                </button>
                                            </td>
                                            <td className="py-3">
                                                <button className="bg-rose-900 p-2 rounded-lg text-white">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        )}
                        {bahanbaku.filter((value) => value.material_category === category).length === 0 && (
                            <div className="h-64 flex items-center justify-center">
                                Tidak ada data
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BahanBaku