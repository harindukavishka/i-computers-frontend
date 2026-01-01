import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="w-full h-full bg-[url('/background4.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/logo.png" alt="Logo" className="w-[600px] " />
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-md shadow-3xl rounded-lg flex flex-col justify-center">
                    <input type="email" placeholder="Email" className="m-5 p-3 w-[90%] h-[50px] rounded-md border border-secondary outline-none" />
                    <input type="password" placeholder="Password" className="m-5 p-3 w-[90%] h-[50px] rounded-md border border-secondary outline-none" />
                    <p className="w-full text-right pr-5">Forgot your password?<Link to="/forgot-password" className="text-accent">Reset</Link></p>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-md bg-accent text-white font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-md border border-accent text-white font-bold">Login with Google</button>
                    <p className="w-full text-right pr-5">Don't have an account? <Link to="/register" className="text-accent">Register</Link></p>
                </div>
            </div>
            
        </div>
    )
}