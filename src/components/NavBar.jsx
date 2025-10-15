'use client'
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NavBar() {
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
    <div className="py-6 flex justify-center mb-4">
        <button className="h-max p-3 text-black font-bold text-2xl bg-red-900 hover:bg-red-800 active:bg-red-400
        rounded-xl" onClick={handleLogout}>
            SALIR
        </button>
    </div>
  )
}
