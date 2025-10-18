'use client'

import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const clear = {"username": ""}
export default function page() {
    const [username, setUsername] = useState(clear);
    const formRef = useRef(null);
    const router = useRouter();

    const handleChange = (ev) => {
        const data = ev.target.value;

        setUsername({
            ...username,
            [ev.target.name]: data
        })
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const res = await axios.post("/api/auth/recover-pass", username)
            if (res.status === 200) {
                alert(res.data);
                router.push("/");    
            }
        } catch (error) {
            alert(error.response.data);
            router.push("/");
        }
    }

  return (
    <div className="p-4 w-max mx-auto mt-40 shadow-lg shadow-green-950 rounded-md
    hover:shadow-green-800 transition-shadow bg-[var(--color-fondo-caja)]">
        <div className="mb-4 flex justify-center">
            <h1 className="text-3xl font-bold">
                Recover Password
            </h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <input type="text" className="input" name="username"
                placeholder="Username" onChange={handleChange} required/>
            </div>
            <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 rounded-sm text-2xl text-black bg-[var(--color-button)]
                hover:bg-green-700 active:bg-green-300 transition-colors cursor-pointer">
                    Recuperar
                </button>
            </div>
        </form>
    </div>
  )
}
