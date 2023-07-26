import { Link } from 'react-router-dom'

const ListProduct = ({ produk }) => {

    return (
        <>
            <div className="overflow-x-auto relative w-full rounded-lg border border-rose-900">
                <table className="w-full text-left">
                    <thead className="text-white bg-rose-900 h-16">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Produk
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(produk) && produk.length > 0 && produk.map((item, index) => (
                            <tr className="text-black border-b" key={index}>
                                <th scope="row" className="py-5 px-6  font-medium text-black whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6">
                                    <Link to="/produk/detailproduksi" className="w-fit p-2 font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                                        Produksi
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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