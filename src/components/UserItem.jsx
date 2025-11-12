'use client'

import { useState } from "react";
import axios from "axios";
import ConfirmDeleteUser from "./ConfirmDeleteUser";
import { useRouter } from "next/navigation";

export default function UserItem({user, idToken, onDeleted}) {
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const router = useRouter();

  const handleDelete = (id) => {
    setUserToDelete(id);
    setShowModal(true);
  }

  const confirmDelete = async () => {
    if(!userToDelete) return;

    try {
      const res = await axios.post("/api/users/delete-user", {id: userToDelete});
      if(res.status === 200){
        onDeleted(userToDelete)
      }

    } catch (error) {
      alert(error.response.data);
    } finally {
      setShowModal(false);
      setUserToDelete(null);
      router.push("/");
    }
  }

  const cancelDelete = () => {
    setShowModal(false);
    setUserToDelete(null);
  }
  
  return (
    <div className="mx-4 mb-8 p-4 shadow-lg shadow-green-950 hover:shadow-green-700
    transition-shadow rounded-sm bg-[var(--color-fondo-caja)]">
        <div className="m-3 w-20 flex justify-center">
            <h1 className="text-3xl w-max font-bold">{user.name}</h1>
        </div>
        <div className="w-max ml-2">
            <p className="text-lg">{user.lastName}</p>
        </div>
        <div className="w-max ml-2">
            <p className="text-lg">{user.username}</p>
        </div>
        <div className="w-max mx-auto">
          {idToken.idToken === user.id ? <button className="w-max p-2 mt-2 bg-red-900 hover:bg-red-700 active:bg-red-600 
          active:scale-95 rounded-sm" onClick={() => handleDelete(user.id)}>
            Eliminar
          </button> : <button className="w-max p-2 mt-2 bg-gray-400 rounded-sm" disabled>
            Eliminar
          </button>}
          <ConfirmDeleteUser
            isOpen={showModal}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
            message="Estas seguro de querer eliminar este usuario?"
          />
        </div>
    </div>
  )
}
