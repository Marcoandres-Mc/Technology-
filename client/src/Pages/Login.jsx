import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/auth";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit( async (data) => {
        const response = await loginAdmin(data);
        loginAdmin(data);
        if(response.status === 200){
            login(response.data);
            navigate('/home');
        }
    })

    



  return (
    <>
        <form onSubmit={onSubmit} className='flex flex-col justify-center m-20 gap-5'>
            <input 
            type="text"
            {...register("userName", { required: true })} 
            placeholder="Username"
            />
            <input 
            {...register("password", { required: true })}
            type="password" 
            placeholder="Password"/>
            <button type="submit">
                Login
            </button>
        </form>
    </>
  )
}

export default Login