'use client'

export default function UserItem({user}) {
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
    </div>
  )
}
