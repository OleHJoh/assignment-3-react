//Imports components used by the components
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

//Config for whats allowed to be the input value
const usernameConfig = {
  required: true,
  minLength: 3,
};

  //Initiates the LoginForm component
  const LoginForm = () => { const { register, handleSubmit, formState: { errors }, } = useForm();
  //Gets the user object from context
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const [ loading, setLoading ] = useState(false)
  const [ apiError, setApiError ] = useState(null)

  //Uses useEffect to navigate when a user has been logged inn
  useEffect(() => {
      if(user !== null){
        navigate('profile')
      }
  }, [ user, navigate ])

  //When loginForm is submitted it activate the function to login user
  const onSubmit = async ({username}) => {
    setLoading(true)
    const [error, userResponse] = await loginUser(username)
    if(error !== null){
        setApiError(error)
    }
    if(userResponse !== null){
        storageSave( STORAGE_KEY_USER, userResponse)
        setUser(userResponse)
    }
    setLoading(false)
  };

  //Listener for error message, prints out a message if criterias are not met
  const errorMessage = (() => {
    if(!errors.username){
        return null
    }
    if(errors.username.type === 'required'){
        return <span>Username is required</span>
    }
    if(errors.username.type === 'minLength'){
        return <span>Username is to short (min. 3)</span>
    }
  })()

  //Returns the LoginComponent to be rendered to the view
  return (
    <>
      <h2>Write in your username</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="johndoe"
            {...register("username", usernameConfig)}
          />
          { errorMessage }
        </fieldset>
        <button type="submit" disabled={ loading }>Login</button>
        { loading &&  <p>Logging in...</p>}
        { apiError && <p>{ apiError }</p>}
      </form>
    </>
  );
};
export default LoginForm;
