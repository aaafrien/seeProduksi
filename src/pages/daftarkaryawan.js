import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const daftarkaryawan = () => {
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

                    <form className="w-full">
                        <div className="flex flex-col gap-y-5">
                            <div className="flex h-16 pl-4 rounded-lg bg-rose-900 items-center text-white font-bold">
                                Daftar Karyawan
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Nama
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter nama karyawan">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Email
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter email">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Nomor HP
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter nomor hp">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Posisi
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter posisi karyawan">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Password
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="enter password">
                                </input>
                            </div>

                            <div className="flex flex-row items-center">
                                <label className="text-black w-32">
                                    Konfirmasi Password
                                </label>
                                <input className="w-full h-12 ml-4 border border-rose-900 bg-transparent rounded-lg p-2"
                                    placeholder="confirm password">
                                </input>
                            </div>

                            <div className="pt-5 flex flex-row gap-3 justify-end">
                                <button className="bg-transparent border border-rose-900 p-2 text-rose-900 rounded-lg">
                                    <Link to="/setting">Cancel</Link>
                                </button>
                                <button type="submit" className="bg-rose-900 rounded-lg p-2 text-white">Daftar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default daftarkaryawan