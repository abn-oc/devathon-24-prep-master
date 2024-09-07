import Separator from "../Components/Separator"
import Button from "../Components/Button"
import { useState } from "react"
import { AuthRegisterBody, AuthLoginBody } from "../../../prep-master-types/types"
import axios from "axios"

const baseURL = "http://17.17.3.9:3000"

export default function Login() {

    const [login, setLogin] = useState(true);
    const [signUp, setSignUp] = useState(false);

    const handleLoginSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        data.username = data.username.toString().replaceAll(" ", "");
        const authData: AuthLoginBody = {
            username: data.username as string,
            password: data.password as string,
        };
        axios.post(`${baseURL}/login`, authData)
            .then((response) => {
                console.log('Login successful:', response.data);
                localStorage.setItem("prep-token", response.data.token)
                localStorage.setItem("username", data.username as string)
                localStorage.setItem("role", response.data.authUser.role)
                window.location.href = 'http://localhost:3000/home';
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });
    };

    const handleSignUpSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        data.username = data.username.toString().replaceAll(" ", "");
        const authData: AuthRegisterBody = {
            username: data.username as string,
            fullname: data.fullname as string,
            password: data.password as string,
            role: data.role as 'student' | 'teacher' | 'admin',
        };

        axios.post(`${baseURL}/register`, authData)
            .then((response) => {
                console.log('Login successful:', response.data);
                console.log('token:', response.data.token);
                localStorage.setItem("prep-token", response.data.token)
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });
    };


    return (
        <>
            <div className="h-screen h-min-90vh flex justify-center items-center bg-neutral-900">
                <div className="border border-transparent shadow-[2px_2px_240px_rgba(109,40,217,1)] rounded-lg w-[400px] p-3 m-3 bg-neutral-800">
                    {login && (
                        <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto p-6 bg-neutral-800 rounded-lg shadow-lg">
                            <div className="text-center mb-6">
                                <div className="text-white text-3xl font-semibold">Login</div>
                                <div className="text-white text-sm font-normal mt-1">Login to your Prep Master</div>
                            </div>
                            <Separator />
                            <div className="flex flex-col mb-4">
                                <label htmlFor="loginName" className="text-lg font-medium text-white mb-1">Name</label>
                                <input
                                    id="loginName"
                                    name="username"
                                    type="text"
                                    placeholder="Type your name..."
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="loginPassword" className="text-lg font-medium text-white mb-1">Password</label>
                                <input
                                    id="loginPassword"
                                    name="password"
                                    type="password"
                                    placeholder="*******"
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <Button className="w-full mt-4 py-2 bg-primary text-black rounded-lg hover:bg-primary-700 transition-colors" type="submit">Login</Button>
                            <div className="text-center mt-4 text-white">
                                Don't have an account?{' '}
                                <span onClick={() => { setLogin(false); setSignUp(true); }} className="hover:underline cursor-pointer text-primary-150">
                                    Sign Up
                                </span>
                            </div>
                        </form>
                    )}
                    {signUp && (
                        <form onSubmit={handleSignUpSubmit} className="max-w-md mx-auto p-6  bg-neutral-800 rounded-lg shadow-lg">
                            <div className="text-center mb-6">
                                <div className="text-white text-3xl font-semibold">Sign Up</div>
                                <div className="text-white text-sm font-normal mt-1">Create your Prep Master Account</div>
                            </div>
                            <Separator />
                            <div className="flex flex-col mb-4">
                                <label htmlFor="signUpName" className="text-lg font-medium text-white mb-1">Full Name</label>
                                <input
                                    id="signUpName"
                                    name="fullname"
                                    type="text"
                                    placeholder="Type your name..."
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="signUpName" className="text-lg font-medium text-white mb-1">Username</label>
                                <input
                                    id="signUpName"
                                    name="username"
                                    type="text"
                                    placeholder="Type your name..."
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="roleSelect" className="text-lg font-medium text-white mb-1">Role</label>
                                <select
                                    id="roleSelect"
                                    name="role"
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                >
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="signUpPassword" className="text-lg font-medium text-white mb-1">Password</label>
                                <input
                                    id="signUpPassword"
                                    name="password"
                                    type="password"
                                    placeholder="*******"
                                    className="border border-gray-700 bg-gray-900 text-white rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <Button className="w-full mt-4 py-2 bg-primary text-black rounded-lg hover:bg-primary-700 transition-colors" type="submit">Sign Up</Button>
                            <div className="text-center mt-4 text-white">
                                Already have an account?{' '}
                                <span onClick={() => { setSignUp(false); setLogin(true); }} className="hover:underline cursor-pointer text-primary">
                                    Sign In
                                </span>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </>
    )
}