import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './assets/hooks/useCrud'
import FormUsers from './assets/components/FormUsers'
import UserCard from './assets/components/UserCard'

function App() {

  const [userEdit, setUserEdit] = useState()

  const BASEURL = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(BASEURL)

  useEffect(() => {
        getUsers('/users/')
  }, [])
  console.log(users)
  return (
    <div>
        <h1>user CRUD</h1>
        <FormUsers 
        createUser={createUsers}
        userEdit={userEdit}
        updateUser={updateUsers}
        setUserEdit={setUserEdit}
        />
        <div>
          {
            users?.map(user => (
              <UserCard 
                key={user.id}
                user={user}
                deleteUser={deleteUsers}
                setUserEdit={setUserEdit}
              />
            ))
          }
        </div>
     </div>
     )
}

export default App

        