import { FiBox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ListProduct from '../components/list_product'
import { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../config/api'

const Produk = () => {
    const [produk, setProduk] = useState([])
    const [category, setCategory] = useState('Tas Wanita')
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(api.urlProduct, {
            headers: {
                Authorization: 'bearer ' + token
            }
        }).then((res) => {
            console.log(res.data.data)
            setProduk(res.data.data)
        }).catch((err) => {
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
                            Produk
                        </div>

                        <div className="w-64 overflow-y-auto p-3 bg-rose-900 rounded-lg">
                            <ul className="space-y-2">
                                <ul className="space-y-2">
                                    <li
                                        onClick={() => setCategory('Tas Wanita')}
                                        className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer">
                                        <span className="ml-3">Tas Wanita</span>
                                    </li>
                                    <li
                                        onClick={() => setCategory('Tas Pria')}
                                        className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer">
                                        <span className="ml-3">Tas Pria</span>
                                    </li>
                                    <li
                                        onClick={() => setCategory('Pouch')}
                                        className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer">
                                        <span className="ml-3">Pouch</span>
                                    </li>
                                    <li
                                        onClick={() => setCategory('Dompet')}
                                        className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer">
                                        <span className="ml-3">Dompet</span>
                                    </li>
                                    <li
                                        onClick={() => setCategory('Key Holder')}
                                        className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800 cursor-pointer">
                                        <span className="ml-3">Key Holder</span>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <Link to="/inputProduk" className="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            Tambah produk
                        </Link>

                    </div>
                    <ListProduct produk={produk.filter((value) => value.category === category)} />
                </div>
            </div>
        </>
    )
}

export default Produk