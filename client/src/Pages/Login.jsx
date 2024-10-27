import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
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