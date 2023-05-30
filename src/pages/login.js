import * as React from "react";
import * as Yup from 'yup';
import { useState } from 'react';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from "axios";
import api from "../config/api";

const Login = () => {
    const [error, setError] = useState(null)
    const [pw, setPassword] = useState({ password: "", showPw: false });

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setPassword({ ...pw, showPw: !pw.showPw });
    }
    const handlePasswordChange = (prop) => (event) => {
        setPassword({ ...pw, [prop]: event.target.value });
    }

    const doLogin = (event) => {
        axios.post(api.urlLogin, event)
            .then((res) => {
                console.log(res.data.data.accessToken)
                localStorage.setItem('token', res.data.data.accessToken)
                navigate('/', { replace: true })
                formik.resetForm()
            })
            .catch(() => {
                setError("Email or password doesn't match")
            })

        formik.setSubmitting(false)
        console.log(event)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required')
                .email('Email is not valid'),
            password: Yup.string()
                .required('Password is required'),
        }),

        onSubmit: doLogin
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
                        <h1 className="text-3xl font-bold text-rose-900 flex justify-center">Login</h1>
                        <div className="mt-6">
                            <div>
                                <input
                                    className="w-full border-2 border-rose-900 rounded-xl p-3 mt-1 bg-transparent"
                                    placeholder="enter your email"
                                    {...formik.getFieldProps('email')}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
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
                                {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                                {error && <div>{error}</div>}
                            </div>
                            <div className="mt-6 flex flex-col gap-y-3">
                                <button type="submit" className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-rose-900 text-white text-lg font-bold">
                                    Log in
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center items center">
                                <p className="font-medium text-base">Don't have an account?</p>
                                <button className="text-rose-900 text-base font-medium ml-2">
                                    <Link to="/register">Sign in</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login