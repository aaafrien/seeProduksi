import * as React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Register = () => {
    const [pw, setPassword] = useState({ password: "", showPw: false });
    const [confirmPw, setConfirmPw] = useState({ password: "", showPw: false });

    const handleClickShowPassword = () => {
        setPassword({ ...pw, showPw: !pw.showPw });
    }
    const handlePasswordChange = (prop) => (event) => {
        setPassword({ ...pw, [prop]: event.target.value });
    }

    const handleClickShowConfirmPw = () => {
        setConfirmPw({ ...confirmPw, showPw: !confirmPw.showPw });
    }
    const handleConfirmPwChange = (prop) => (event) => {
        setConfirmPw({ ...confirmPw, [prop]: event.target.value });
    }

    const doRegister = (event) => {
        if (confirmPw.password === formik.values.password) {
            formik.setSubmitting(false)
            formik.resetForm()
            setConfirmPw({ password: "" })
        } else {
            console.log("Password doesn't match")
        }
        console.log(event)
    }
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is not valid'),
            phone: Yup.string()
                .required('Phone number is required'),
            password: Yup.string()
                .required('Password is required')
        }),

        onSubmit: doRegister
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex w-full h-screen">
                <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-white items-center">
                    {/* <img src="https://berliano.com/asset/img/uploads/banner/6417e252c4131d604e46c87cef4ff472.png"></img> */}
                    <div className="text-5xl font-bold text-rose-900">SeeProduksi</div>
                </div>
                <div className="w-full flex items-center justify-center lg:w-1/2 bg-zinc-100">
                    <div className="rounded-3xl items-center justify-center">
                        <h1 className="text-3xl font-bold text-rose-900">Create an Account</h1>
                        <div className="mt-6">
                            <input
                                className="w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="enter your name"
                                {...formik.getFieldProps('name')}
                            />
                        </div>
                        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                        <div className="mt-3">
                            <input
                                className="w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="enter your email"
                                {...formik.getFieldProps('email')}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                        <div className="mt-3">
                            <input
                                className="w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="enter your phone number"
                                {...formik.getFieldProps('phone')}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
                        <div className="mt-3">
                            <div className="flex items-center justify-between w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent">
                                <input
                                    className="border-hidden p-0 bg-transparent"
                                    placeholder="enter your password"
                                    type={pw.showPw ? "text" : "password"}
                                    onChange={handlePasswordChange("password")}
                                    {...formik.getFieldProps('password')}
                                />
                                <span className="mr-2 cursor-pointer">
                                    <span
                                        onClick={handleClickShowPassword}>
                                        {pw.showPw ? <FiEye /> : <FiEyeOff />}
                                    </span>
                                </span>
                            </div>
                        </div>
                        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                        <div className="mt-3">
                            <div className="flex items-center justify-between w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent">
                                <input
                                    className="border-hidden p-0 bg-transparent"
                                    placeholder="confirm your password"
                                    type={confirmPw.showPw ? "text" : "password"}
                                    onChange={handleConfirmPwChange("password")}
                                    value={confirmPw.password}
                                />
                                <span className="mr-2 cursor-pointer">
                                    <span
                                        onClick={handleClickShowConfirmPw}>
                                        {confirmPw.showPw ? <FiEye /> : <FiEyeOff />}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col gap-y-3">
                            <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-rose-900 text-white text-lg font-bold">
                                Sign up
                            </button>
                        </div>
                        <div className="mt-6 flex justify-center items center">
                            <p className="font-medium text-base">Have an account?</p>
                            <button
                                className="text-rose-900 text-base font-medium ml-2">
                                <Link to="/login">Log in</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/homepage"></Link>
        </form>
    )
}

export default Register