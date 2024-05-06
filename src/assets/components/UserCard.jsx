import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm, setconfirmation, setCloseConfirm }) => {

  const handleDelete = () => {
    deleteUser('/users/', user.id)
    user.text = 'deleted'
    setconfirmation(user)
    setCloseConfirm(false)
  }

  const handleEdit = () => {
    setUserEdit(user)
    handleOpenForm()
  }

//console.log(user)
  return (
    <article className='card'>
      <h2 className='card__name'>{`${user.firstname} ${user.lastname}`}</h2>
      <hr className='card__hr'/>
      <ul className='card__list'>
        <li className='card__item'><span className='card__label'>Email: </span><span className='card__value'>{user.email}</span></li>
        <li className='card__item'><span className='card__label'>Birthday: </span>
        <div className='card__value'>
        <img className='icon__gift' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEvt1r0uBFEcBfDfVhKiUEuIKOgVVAoRDYmGF1AqVApqBR5AKZ5AIpFIFKKg0BEF0QihVVD4qNgrd2V2dnZidrIVt5q5d845/69zMxVtXpU288sTmMcqhnCORVzGgPqxjTHcYA17WcE2E5jBfgrwXN0bwRMuEESSaxJHaZFmAmcYxQq2qmQ7mEPYv8ICTjGNpZjBCcZ/K/CODnTiDT24R3ck+MAw7uLeC17R9VuBR/RiAscRtB4zCq+7MaPwPIVDPKAvT2AWGzGyMsN1jWUcBJJkD2pRlyGvYW8xmBb4jKd5o1v4myRZYXCTVOt4kgJhShqa1GK9wnQNpEsUmrwZndsi7zcsuD3cAA1NrpHmlarwWVZDC5PEyDJx/wLJYfhDJSpjuB+D1WqXNUWtGq7OYHkCZVzcgG37X8UXUBtKGclaL+gAAAAASUVORK5CYII="/>
        {user.birthday}</div></li>
      </ul>
      <hr className='card__hr'/>
      <button className='card__btn__delete' onClick={handleDelete}>
      <img className='icon__delete' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALFJREFUSEvtlVEKAjEMRGfuIgjudTyOn4KX8ToueJosFQt1t83U1uLP7l9JkzeT0A0x+OPg+nABZnYGcAVwLAh5AriQvJeEKsADwEm4nElOrQALiSSzQszMjb9yPXWqgIpvADGhd/Cp4w8HwwFReY311KV3v3l4PwWsFapzCq9yoAp2t2gHbN7Vty3ZZyB/Td0tUoQWQM2iWXOzi6f0ksOqvAE4KPXveHF1/nfpV6p3ry3epM4ZCBVpxgAAAABJRU5ErkJggg=="/>
      </button>
      <button className='card__btn__edit' onClick={handleEdit}>
      <img className='icon__edit' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeZJREFUSEu1lE1rE0EYgJ/J7kYqeBBEDwoFD5Za4se50kavnnPIQhaK4s8QxX8hamQCzSHgL7AfttV/4KF+tqWhGDxYhajMTkdm2YWyTRpnaeY0zC7P88477/sKxrzEmPkUFtRqtfKZiYm7CHH6V7//qtPp/B4UbCFBGIZnT/n+MnDDQg18PYCqlHInL3EWpPAV4LqBPQE/gSm795W6+azd/nZY4iR4UK+fi4NgycA14BOedwf4I7R+bc8EPH4h5aNCgkajcd4XYhWYTgGfPa2rulz+i9ZLQMXAk5dSPnQW3K/XL+ggsGmx8J6AHwauALsC+um+FxtTabVaPSdBAvf9dwhxGejieXNa631PiDWMuZrCkvNms/nF6ZHz8FIczz5fXNzOVVE3O3cq0yiKLnrGrGWR5+DrwAywXYrjeSsd1rADqyiBw1tg0qZlGFzDrJSye9w0OCK4F4aTB77/5iTgVnxEsBBFWyl8qxTHVXt9W/8qCGznVoCPGm6Pijy71SCBsR81XLKQFG7rf0bAh5JSc/ludUrRQhQlgqaUIoVv2FEAbHpKzbvAh6UoEeTWZqDUraft9nfX8T40RYdA7wOlqkXgA2/gGuGo/52m6SjYf3Vy9shFYFlxHDvsxi4oGrnTLDpJyT+30twZwhsdrAAAAABJRU5ErkJggg=="/>
      </button>
      
    </article>
  )
}

export default UserCard