import React, { useState } from 'react'
import { FiMenu, FiSettings } from 'react-icons/fi'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const footer = () => {
    return (
        <>
            <div className="flex flex-row p-7 bg-rose-900 sm:p-16 text-white gap-16">
                <div className="flex flex-col gap-4 text-xl">
                    <img src={logo} alt="logo" width="200" height="200" />
                    <p>Kelola produksimu dengan kami!</p>
                </div>
                <div className="flex flex-row gap-16">
                    <div className="text-white">
                        <p className="mb-6 font-bold text-xl">About us</p>
                        <ul>
                            <li className="mb-4 w-64">
                                <p>Kindly worry no more! Reach us through our contacts listed below!</p>
                            </li>
                            <li className="flex flex-row mb-4 items-center gap-2">
                                <HiOutlineLocationMarker />
                                <p>Sleman, Yogyakarta</p>
                            </li>
                            <li className="flex flex-row mb-4 items-center gap-2">
                                <HiOutlineMail />
                                <p>ariranawa@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <p className="mb-6 font-bold text-xl">Our services</p>
                        <ul>
                            <li className="mb-4 hover:font-bold">
                                <p><Link to="/produk">Produk</Link></p>
                            </li>
                            <li className="mb-4 hover:font-bold">
                                <p><Link to="/bahanbaku">Bahan Baku</Link></p>
                            </li>
                            <li className="mb-4 hover:font-bold">
                                <p><Link to="/laporan">Laporan Produksi</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-rose-900 w-full sm:px-16 sm:pb-16">
                <div className="bg-white h-px w-full"></div>
                <div className="flex flex-row text-white gap-2 pt-8 items-center">
                    <MdCopyright />
                    <div>2022 seeProduksi. All rights reserved.</div>
                </div>

            </div>

        </>
    )
}

export default footer