'use client'

import "@/app/globals.css";
import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const clearData = {
    "username": '',
    "password": ''
}

export default function Login() {

    const[visible, setVisible] = useState(false);
    const[dataUser, setDataUser] = useState(clearData);
    const formRef = useRef(null);
    const router = useRouter();

    const handleChange = (ev) => {
        const data = ev.target.value;
        
        setDataUser({
            ...dataUser,
            [ev.target.name]: data
        });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", dataUser);
            
            if (res.status === 200) router.push("/users");

        } catch (error) {
            alert(error.response.data);
            router.push("/");
            return;
        }
    }
  return (
    <div className="p-4 w-max mx-auto mt-40 shadow-lg shadow-green-950 rounded-md
    hover:shadow-green-700 transition-shadow">
        <div className="mb-4 flex justify-center">
            <h1 className="text-4xl font-bold">
                Login
            </h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>

            <div className="my-4">
                <input type="text" placeholder='Username' className='input'
                name='username' onChange={handleChange} required />
            </div>
            <div style={{"position": "relative"}} className="flex items-center mt-4">
                <input type={visible ? "text" : "password"} placeholder="Password" className='input'
                name='password' onChange={handleChange} required 
                />
                <span onClick={() => setVisible(!visible)} className="absolute right-4
                hover:scale-120 cursor-pointer pr-1">
                    {visible ? <AiOutlineEye size={20} style={{"color": "green"}}/> :
                    <AiOutlineEyeInvisible size={20} style={{"color": "red"}}/>}
                </span>
            </div>

            <div className='mt-2 ml-6'>
                <p className="text-xs text-blue-200 hover:underline cursor-pointer">
                    recover password
                </p>
            </div>
            <div className="my-6 flex justify-center">
                <button className="px-4 py-2 rounded-sm text-2xl text-black bg-[var(--color-button)]
                hover:bg-green-700 active:bg-green-300 transition-colors cursor-pointer">
                    Login
                </button>
            </div>
            <div className='mt-10 flex justify-center'>
                <Link href="/register" className='text-sm text-blue-200 hover:underline cursor-pointer'>
                    create account
                </Link>
            </div>
        </form>
    </div>
  )
}
