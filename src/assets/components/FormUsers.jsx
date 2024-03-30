import { useForm } from "react-hook-form";
import { useEffect } from "react";
import './styles/FormUser.css'

const FormUsers = ({ createUser, userEdit, updateUser, setUserEdit, formIsClose, setFormIsClose, setconfirmation, setCloseConfirm }) => {

    const { handleSubmit, register, reset,  } = useForm()

    useEffect(() => {
     reset(userEdit)
    }, [userEdit])
    

    const submit = data => {
      if(userEdit){
        updateUser('/users/', userEdit.id, data)
        setUserEdit()
        data.text = 'updated'
        setconfirmation(data)
        setCloseConfirm(false)
      }else{
        createUser('/users/', data) 
        data.text = 'created'
        setconfirmation(data)  
        setCloseConfirm(false)     
      }
      
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setFormIsClose(true)
    }

    const handleFormClose = () => {
      setFormIsClose(true)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    })
    setUserEdit()
    }

  return (
    <div className={`form-container ${formIsClose && 'form__close'}`}>      
      <form className="form" onSubmit={handleSubmit(submit)}>
      <header className="form__header">
        <h2 className="form__title">User Form</h2>
        <div onClick={handleFormClose} className="form__exit">❌</div>
      </header>
        <label className="form__label">
          <span className="form__field">Email</span>
          <input className="form__field__value" {...register('email')} type="email" />
        </label>
        <label className="form__label">
          <span className="form__field">Password</span>
          <input className="form__field__value" {...register('password')} type="password" />
        </label>
        <label className="form__label">
          <span className="form__field">First Name</span>
          <input className="form__field__value" {...register('first_name')} type="text" />
        </label>
        <label className="form__label">
          <span className="form__field">Last Name</span>
          <input className="form__field__value" {...register('last_name')} type="text" />
        </label>
        <label className="form__label">
          <span className="form__field">Bitrhday</span>
          <input className="form__field__value" {...register('birthday')} type="date" />
        </label>
        <button  className="form__btn">submit</button>
      </form>
    </div>
    
  );
};

export default FormUsers;
