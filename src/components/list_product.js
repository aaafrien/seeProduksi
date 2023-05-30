import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../config/api'

const ListProduct = () => {
    const [produk, setProduk] = useState([])
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
            <div className="pt-16 pl-8 flex flex-row flex-wrap justify-between w-full overflow-auto gap-y-10">
                {Array.isArray(produk) && produk.length > 0 && produk.map((item, index) => (
                    <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3" key={index}>
                        <div className="rounded bg-rose-900 h-36"></div>
                        <div class="py-5">
                            <div class="font-bold text-xl mb-2">
                                <Link to='/produk/detailproduksi'>Anandi Bag</Link>
                            </div>
                        </div>
                    </div>
                ))}
                {Array.isArray(produk) && produk.length === 0 && (
                    <div>
                        Tidak ada data
                    </div>
                )}
            </div>
        </>
    )
}

export default ListProduct