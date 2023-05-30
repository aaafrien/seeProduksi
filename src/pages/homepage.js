import { bgHomepage, kelola, kontrol, laporan, hpp, client, berliano } from '../assets'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex items-center text-rose-900 font-bold text-7xl ml-64">
          Kelola produksimu dengan kami!
          <div className="mr-64 mt-24">
            <img src={bgHomepage} alt="bg" width="800" height="800"></img>
          </div>

        </div>
        <button className="bg-rose-900 hover:bg-transparent text-white hover:text-rose-900 py-2 px-4 border hover:border-rose-900 rounded-lg ml-64">
          <Link to="/produk">Produksi sekarang</Link>
        </button>
      </div>
      <div className="flex flex-col p-12 items-center justify-center gap-12">
        <p className="text-rose-900 font-bold text-5xl">Our Features</p>
        <div className="flex flex-row p-2 justify-between gap-12">
          <div className="flex flex-col w-64 h-72 bg-zinc-100 rounded-lg items-center justify-center p-6 gap-8 hover:bg-zinc-200 border border-rose-900 hover:ring-white">
            <img src={kelola} alt="bg" width="150" height="180"></img>
            <div className="text-rose-900">
              <p className="flex font-bold text-2xl text-center">Kelola Produksi</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-zinc-100 rounded-lg items-center justify-center p-6 gap-8 hover:bg-zinc-200 border border-rose-900 hover:ring-white">
            <img src={kontrol} alt="bg" width="150" height="180"></img>
            <div className="text-rose-900">
              <p className="flex font-bold text-2xl text-center">Kontrol Bahan Baku</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-zinc-100 rounded-lg items-center justify-center p-6 gap-8 hover:bg-zinc-200 border border-rose-900 hover:ring-white">
            <img src={laporan} alt="bg" width="150" height="180"></img>
            <div className="text-rose-900">
              <p className="flex font-bold text-2xl text-center">Laporan Produksi</p>
            </div>
          </div>
          <div className="flex flex-col w-64 h-72 bg-zinc-100 rounded-lg items-center justify-center p-6 gap-8 hover:bg-zinc-200 border border-rose-900 hover:ring-white">
            <img src={hpp} alt="bg" width="150" height="180"></img>
            <div className="text-rose-900">
              <p className="flex font-bold text-2xl text-center">Penentuan HPP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-8 sm:p-16 text-rose-900 items-center justify-center gap-12">
        <img src={berliano} alt="bg" width="300" height="300" />
        <p className="text-rose-900 font-bold text-5xl">is Our First Client</p>
      </div>
      <div className="flex flex-row p-8 sm:p-16 bg-rose-200 items-center justify-between">
        <p className="text-rose-900 font-bold text-3xl">Manage your company now with us!</p>
        <button className="w-36 h-12 bg-rose-900 hover:bg-transparent text-white hover:text-rose-900 p-2 border hover:border-rose-900 rounded-lg">
            <Link to="/">Register</Link>
          </button>
      </div>
    </>
  )
}

export default Homepage