'use client'

import { useState, useRef } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const clear = {"newPass": ""}
export default function page() {
  const [newPass, setNewPass] = useState(clear);
  const formRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  
  const handleChange = (ev) => {
    const data = ev.target.value;

    setNewPass({
      ...newPass,
      [ev.target.name]: data
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      
      const res = await axios.post("/api/auth/reset-pass", {
        token,
        newPass
      })
      if (res.status === 200) {
          alert(res.data);  
          router.push("/"); 
      }

    } catch (error) {
      alert(error.response.data);
      // router.push("/");
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
          <input type="text" className="input" name="newPass"
          placeholder="Nueva contraseña" onChange={handleChange} required/>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 rounded-sm text-2xl text-black bg-[var(--color-button)]
          hover:bg-green-700 active:bg-green-300 transition-colors cursor-pointer">
              Nueva Contraseña
          </button>
        </div>
      </form>
    </div>
  )
}
