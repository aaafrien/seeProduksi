import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'

const LayoutA = () => {
    const token = localStorage.getItem('token')
    const navigation = useNavigate()

    useEffect(() => {
        if (!token) {
            navigation('/login', { replace: true })
        }
    }, [])

    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutA