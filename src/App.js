import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage, LayoutA, Login, Register, Produk, BahanBaku, Laporan, Setting, InputBahan, InputProduk, Hpp, Karyawan, DaftarKaryawan, DetailProduksi, Faktur } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<LayoutA />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/bahanbaku" element={<BahanBaku />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/inputBahan" element={<InputBahan />} />
            <Route path="/inputProduk" element={<InputProduk />} />
            <Route path="/hpp" element={<Hpp />} />
            <Route path="/setting/karyawan" element={<Karyawan />} />
            <Route path="/setting/daftarkaryawan" element={<DaftarKaryawan />} />
            <Route path="/produk/detailproduksi" element={<DetailProduksi />} />
            <Route path="/produk/detailproduksi/faktur" element={<Faktur />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App