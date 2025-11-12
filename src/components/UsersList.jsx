'use client'

import Loading from './Loading';
import UserItem from './UserItem';

export default function UsersList({users, loading, idToken, onDeleted}) {
    
  return (
    <div className='flex flex-wrap py-6 px-8'>
      { loading ? (
        <Loading/>
      ) : (
        users.map(user => (
          <UserItem key={user.id}
          user={user} 
          idToken={idToken}
          onDeleted={onDeleted}/>)
        ))}
    </div>
  )
}
