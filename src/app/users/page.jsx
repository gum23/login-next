'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import UsersList from "@/components/UsersList";
import NavBar from "@/components/NavBar";

export default function page() {
  const[users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function users(){
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        console.log("Error al obtener los usuarios", error);
      } finally {
        setLoading(false);
      }   
    };
    users();
  }, []);
  
  return (
    <>
      <NavBar/>
      <UsersList users={users} loading={loading}/>
    </>
  )
}
