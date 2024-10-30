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

        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Iniciar Sesión</h3>
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 w-full">
                    <div>
<<<<<<< HEAD
                        <label htmlFor="userName" className="block text-gray-300">User Name</label>
=======
                        <label htmlFor="userName" className="block text-gray-300">UserName</label>
>>>>>>> mejora en el crud productos y mejora en el diseño del logint
                        <input
                            type="text"
                            {...register("userName", { required: true })} 
                            placeholder="Username"
                            id="userName"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            {...register("password", { required: true })} 
                            placeholder="password"
                            id="password"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login