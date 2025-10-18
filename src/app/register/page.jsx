'use client'
import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const clearData = {
    "name":"",
    "lastName": "",
    "email": "",
    "username": "",
    "password": ""
}

export default function page() {
    const [visible, setVisible] = useState(false);
    const [dataUser, setDataUser] = useState(clearData);
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
            const res = await axios.post("/api/auth/register", dataUser);
            if(res.status === 200) {
                alert(res.data);
                router.push("/");
                return;
            }else if (res.status === 201) {
                alert(`Usuario ${res.data} creado correctamente`);
                router.push("/");
            }
            
            
        } catch (error) {
            alert("Error al crear el usuario");
        }
    }

  return (
    <>
        <div className="p-4 w-max mx-auto mt-20 mb-4 shadow-lg shadow-green-950 rounded-md
        hover:shadow-green-700 transition-shadow bg-[var(--color-fondo-caja)]">
            <div className="md-4 flex justify-center mt-4">
                <h1 className="text-4xl font-bold">
                    Register
                </h1>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="my-4">
                    <input type="text" placeholder="Name" className="input" required
                    name="name" onChange={handleChange}/>
                </div>
                <div className="my-4">
                    <input type="text" placeholder="lastName" className="input" required
                    name="lastName" onChange={handleChange}/>
                </div>
                <div className="my-4">
                    <input type="email" placeholder="Email" className="input" required
                    name="email" onChange={handleChange}/>
                </div>
                <div className="my-4">
                    <input type="text" placeholder="Username" className="input"required
                    name="username" onChange={handleChange}/>
                </div>
                <div style={{"position": "relative"}} className="flex items-center mt-4">
                    <input type={visible ? "text":"password"} placeholder="Password" className="input"required
                    name="password" onChange={handleChange}/>
                    <span onClick={() => setVisible(!visible)} className="absolute right-4
                    hover:scale-120 cursor-pointer pr-1">
                        {visible ? <AiOutlineEye size={20} style={{"color":"green"}}/>:
                        <AiOutlineEyeInvisible size={20} style={{"color": "red"}}/>}
                    </span>
                </div>
                <div className="my-6 flex justify-center">
                    <button type="submit" className="px-4 py-2 rounded-sm text-2xl text-black 
                    bg-[var(--color-button)] hover:bg-green-700 active:bg-green-300 transition-colors">
                        Crear
                    </button>
                </div>
            </form>
        </div>
        <div className="flex justify-center mb-16">
            <Link href={"/"} className="text-sm text-blue-200 hover:underline cursor-pointer">
                Iniciar Sesión
            </Link>
        </div>
    </>
  )
}
