'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function notfound() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      //Borra la cookie
      const res = await axios.post("/api/auth/logout");

      if (res.status === 200) {
        router.push("/");
        return;
      }

    } catch (error) {
      alert("Error al cerrar sesión");
    }
  }

  return (
    <div className='p-4 w-max mx-auto mt-40 shadow-lg shadow-green-950 rounded-md
    hover:shadow-green-800 transition-shadow bg-[var(--color-fondo-caja)]'>
        <div className="mb-4 flex justify-center">
            <h1 className="text-4xl font-bold">
              Página no encontrada
            </h1>
        </div>
        <div className='mt-10 flex justify-center'>
            <Link href={"/"}>
              <button className="px-4 py-2 rounded-sm text-2xl text-black bg-[var(--color-button)]
                hover:bg-green-700 active:bg-green-300 transition-colors cursor-pointer"
                onClick={handleLogout}>
                Iniciar Sesión
              </button>
            </Link>
        </div>
    </div>
  )
}
