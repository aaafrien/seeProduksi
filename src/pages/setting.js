import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const setting = () => {
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
                                        <Link to="/setting" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Akun</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/hpp" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">HPP</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/setting/karyawan" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                            <span className="ml-3">Karyawan</span>
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            <Link to="/setting/daftarkaryawan">Daftar Karyawan</Link>
                        </button>
                    </div>

                    <div className="pt-16 w-full">
                        <div className="flex flex-col gap-5 bg-white rounded-lg p-5">
                            <div className="font-bold">
                                Detail Akun
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="w-32 h-32 bg-rose-900 rounded-full">
                                    <img src="" alt="profil"></img>
                                </div>
                                <button class="h-10 flex items-center justify-center p-2 bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                                    <Link to="/">Ubah foto profil</Link>
                                </button>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="">
                                        Nama
                                    </label>
                                    <input className="w-80 h-10 p-2 bg-transparent border border-rose-900 rounded-lg"
                                        placeholder="Febri">
                                    </input>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="">
                                        Email
                                    </label>
                                    <input className="w-80 h-10 p-2 bg-transparent border border-rose-900 rounded-lg"
                                        placeholder="berliano@gmail.com">
                                    </input>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default setting