import { FiBox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ListProduct from '../components/list_product'

const Produk = () => {
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
                                <li>
                                    <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                        <span className="ml-3">Tas Wanita</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                        <span className="ml-3">Tas Pria</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                        <span className="ml-3">Pouch</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                        <span className="ml-3">Dompet</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bahanbaku/a" className="h-12 flex items-center p-2 rounded-lg text-white hover:bg-rose-800">
                                        <span className="ml-3">Key Holder</span>
                                    </Link>
                                </li>
                            </ul>
                            </ul>
                        </div>
                        <button class="mt-5 w-64 h-12 flex items-center justify-center p-2 text-base font-normal bg-rose-900 text-white rounded-lg border hover:bg-transparent hover:border-rose-900 hover:text-rose-900">
                            <Link to="/inputProduk">Tambah produk</Link>
                        </button>
                    </div>
                    <ListProduct/>
                </div>
            </div>
        </>
    )
}

export default Produk