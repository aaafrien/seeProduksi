import React from 'react'
import { FiClipboard } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const detailproduksi = () => {
  return (
    <>
      <div className="w-full h-full p-10">
        <div className="flex flex-row gap-5 items-center justify-between">
          <div>
            <div className="flex items-center font-bold text-xl w-64 h-16">
              <span className="pr-2">
                <FiClipboard />
              </span>
              Detail Produksi
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div className="w-80 h-56 rounded-lg overflow-hidden shadow-md p-3 bg-white">
            <div className="rounded bg-rose-900 h-36"></div>
            <div className="py-5">
              <div className="font-bold text-xl mb-2">Anandi Bag</div>
            </div>
          </div>

          <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
            <table className="w-full text-left">
              <thead className="text-white bg-rose-900 h-12">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Bahan Baku & Aksesoris
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Qty
                  </th>
                  <th scope="col" className="py-3">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
                <tr className="text-black border-b">
                  <th scope="row" className="py-3 px-6 font-medium text-black whitespace-nowrap">
                    Kulit
                  </th>
                  <td className="py-3 px-6">
                    2
                  </td>
                  <td className="py-3">
                    2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end">
          <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
            <Link to="/produk/detailproduksi/faktur">Lanjutkan produksi</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default detailproduksi