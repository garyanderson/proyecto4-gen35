import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './assets/hooks/useCrud'
import FormUsers from './assets/components/FormUsers'
import UserCard from './assets/components/UserCard'
import iconCreate from '../public/images/iconCreate.png'
import Confirmacion from './assets/components/Confirmacion'
import Loader from './assets/components/Loader'

function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const [confirmation, setconfirmation] = useState('')
  const [closeConfirm, setCloseConfirm] = useState(true)

  const BASEURL = 'http://localhost:8080'
  const [users, getUsers, createUsers, deleteUsers, updateUsers, loading] = useCrud(BASEURL)

  useEffect(() => {
        getUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <div>
          
        </div>
        <button onClick={handleOpenForm} className='form__btn'><img src={iconCreate} className='icon' alt="create" /> <span>crear usuario</span></button>
      </header>        
      <FormUsers 
        createUser={createUsers}
        userEdit={userEdit}
        updateUser={updateUsers}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
        setconfirmation={setconfirmation}
        setCloseConfirm={setCloseConfirm}
        />
       
      
       
          
        
          
        
        <div className='user-container'>
        <Confirmacion 
        confirmation={confirmation}
        setconfirmation={setconfirmation}
        closeConfirm={closeConfirm}
        setCloseConfirm={setCloseConfirm}
        />
        
          {
           
            loading
            ? <Loader />
            :(
            users?.map(user => (
              <UserCard 
                key={user.id}
                user={user}
                deleteUser={deleteUsers}
                formIsClose={formIsClose}
                setUserEdit={setUserEdit}
                handleOpenForm={handleOpenForm}
                setconfirmation={setconfirmation}
                setCloseConfirm={setCloseConfirm}
              />
            )))
          }
        </div>
        
        
        
     </div>
     
     )
}

export default App

        